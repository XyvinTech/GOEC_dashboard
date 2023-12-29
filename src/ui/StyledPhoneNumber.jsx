import React, { useState } from 'react';
import styled from 'styled-components';
import Select from 'react-select';

const PhoneNumberContainer = styled.div`
  display: flex;
  height: 56px;
  padding: 0px;
  align-items: center;
  border-radius: var(--borderRadius, 4px);
  background: var(--Field-inner, #39383D);
  border: 1px solid var(--White-20, rgba(255, 255, 255, 0.20));
`;

const PhoneNumberInput = styled.input`

color:  var(--Grey, #B5B8C5);
font-feature-settings: 'clig' off, 'liga' off;
/* Small Caption/ Medium */
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 16px; /* 114.286% */
flex: 1 0 0;
background: var(--inner, #39383D);
border:none;
&::placeholder {
  color: #B5B8C5; 
}
&:focus {
    outline: none; // Disable the default focus outline
    border: none;  // Set border to none when focusing
    // Add any additional styles you want when the input is focused
  }
`;


const StyledPhoneNumber = ({ onChange,placeholder }) => {
  const [selectedCountryCode, setSelectedCountryCode] = useState('');

  const handleCountryCodeChange = (selectedOption) => {
    if (selectedOption) {
      setSelectedCountryCode(selectedOption.value);
      // You can also propagate the selected country code to the parent component if needed
      onChange(selectedOption.value);
    }
  };


  const options = [
    { value: '+91', label: '+91' },
    { value: '+971', label: '+971' },
    // Add more options as needed
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: '100%',
      padding: '0px',
      border: 'none',
      borderRadius: '4px',
      backgroundColor: state.isFocused ? '#39383D' : 'var(--inner, #39383D)',
    color: state.isFocused ? '#fff' : '#B5B8C5',
    boxShadow: state.isFocused ? 'none' : 'none', 
      cursor: 'pointer',
      placeholder: {
        color: '#B5B8C5', // Set the placeholder color
      },
    }),
    indicatorSeparator: (provided) => ({
        ...provided,
        display: 'none', // Remove the separator
      }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#4a4a4a' : 'var(--inner, #39383D)',
      color: state.isFocused ? '#fff' : '#B5B8C5',
      cursor: 'pointer',
      backgroundColor: state.isSelected ? '#242424' : 'initial',
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: 'var(--inner, #39383D)',
      color: '#B5B8C5',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#F7F8FC', // Set the text color for the selected value
    }),
  };

  const customTheme = (theme) => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary: 'var(--inner, #39383D)',
    },
  });


  return (
    <PhoneNumberContainer>
      <Select
        placeholder="+91"
        onChange={handleCountryCodeChange}
        styles={customStyles}
        theme={customTheme}
      />
      <PhoneNumberInput
        type="tel"
        placeholder={placeholder}
        value={selectedCountryCode}
        onChange={(e) => setSelectedCountryCode(e.target.value)}
      />
    </PhoneNumberContainer>
  );
};

export default StyledPhoneNumber
