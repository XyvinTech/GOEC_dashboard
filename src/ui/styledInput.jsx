import React, { useState } from 'react'
import styled, { css } from 'styled-components';

const InputContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  padding: 16px;
  align-items: center;
  gap: 8px;
  border: 1px solid rgba(255, 255, 255, 0.20);
  background: var(--inner, #39383D);
  border-radius: 4px;
`;

const InputField = styled.input`
  
color: #FFFFFF;
font-feature-settings: 'clig' off, 'liga' off;
/* Small Caption/ Medium */
font-family: Inter;
font-size: 14px;
width:100%;
min-width:60px;
font-style: normal;
font-weight: 400;
line-height: ${props => props.lineHeight || '16px'}; /* 114.286% */
flex: 1 0 0;
background: var(--inner, #39383D);
border:none;
&::placeholder {
  color: #B5B8C5; 
  ${props =>
    props.specialAlign &&
    css`
    position: absolute;
    top: 0; 
    left: 0;
    margin: 0; 
    `}
}
&:focus {
    outline: none; // Disable the default focus outline
    border: none;  // Set border to none when focusing
    // Add any additional styles you want when the input is focused
  }
  
`;

const IconContainer = styled.div`
display: flex;
width: 24px;
height: 24px;
justify-content: center;
align-items: center;
flex-shrink: 0;
color:#87898E;
`;

const StyledInput = ({ icon, placeholder,iconright,value, lineHeight,specialAlign, ...props }) => {
  const [inputValue, setInputValue] = useState(value); 
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <InputContainer {...props}>
      {icon && <IconContainer>{icon}</IconContainer>}
      <InputField 
        placeholder={placeholder} 
        value={value} 
        onChange={handleInputChange} 
        lineHeight={lineHeight}
        specialAlign={specialAlign}
        {...props} />
      {iconright && <IconContainer>{iconright}</IconContainer>}
    </InputContainer>
  );
};

export default StyledInput;
