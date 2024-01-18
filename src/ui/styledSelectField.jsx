import React from "react";
import styled from "styled-components";
import Select from "react-select";

const SelectContainer = styled.div`
  position: relative;
  width: 100%; /* Adjust width as needed */
`;

const StyledSelectField = ({ placeholder, options, onChange, value, ...props }) => {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: "100%",
      padding: "8px",
      border: "1px solid var(--White-20, rgba(255, 255, 255, 0.20));",
      borderRadius: "4px",
      backgroundColor: state.isFocused ? "#39383D" : "var(--inner, #39383D)",
      color: state.isFocused ? "#fff" : "#B5B8C5",
      boxShadow: state.isFocused ? "0 0 0 2px #fff" : "none",
      cursor: "pointer",
      // fontSize:'12px'
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none", // Remove the separator
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#242424" : " #39383D",
      color: state.isFocused ? "#fff" : "#B5B8C5",
      cursor: "pointer",
      // fontSize:'12px'
      // Add a :active pseudo-class for selected option
      ":active": {
        backgroundColor: "#242424",
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "var(--inner, #39383D)",
      color: "#B5B8C5",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "##F7F8FC", // Set the text color for the selected value
    })
  };

  const customTheme = (theme) => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary: "var(--inner, #39383D)",
    },
  });

  var selectedIndex = -1;
  for (var i = 0; i < options.length && value; i++) {
    if (options[i].value === value || options[i].label === value) {
      selectedIndex = i;
      break;
    }
  }
  return (
    <SelectContainer>
      <Select
        placeholder={placeholder}
        options={options}
        onChange={onChange}
        styles={customStyles}
        theme={customTheme}
        defaultValue={options[selectedIndex]}
        {...props}
      />
    </SelectContainer>
  );
};

export default StyledSelectField;
