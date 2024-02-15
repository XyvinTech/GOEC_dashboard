import React, { useState, forwardRef } from 'react'
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

const InputField = styled.textarea`
color: #FFFFFF;
background: none;
resize: none;
font-feature-settings: 'clig' off, 'liga' off;
/* Small Caption/ Medium */
font-family: Inter;
font-size: 14px;
width:100%;
min-width:60px;
font-style: normal;
font-weight: 400;
line-height: ${props => props.lineHeight || '16px'}; 
height: ${props => props.height || '16px'};
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

const StyledTextArea = forwardRef(({onTextChange, icon, placeholder,iconright,value, lineHeight,specialAlign, ...props },ref) => {
  return (
    <InputContainer {...props}>
      <InputField 
        autoComplete="off"
        placeholder={placeholder} 
        value={value} 
        onChange={onTextChange} 
        lineHeight={lineHeight}
        specialAlign={specialAlign}
        ref={ref}
        {...props} />
    </InputContainer>
  );
});

export default StyledTextArea;
