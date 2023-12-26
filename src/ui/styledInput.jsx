import React from 'react'
import styled, { css } from 'styled-components';

const InputContainer = styled.div`
  position: relative;
  display: flex;
  width: 402px;
  height: 56px;
  padding: 16px;
  align-items: center;
  gap: 8px;
  border: 1px solid rgba(255, 255, 255, 0.20);
  background: var(--inner, #39383D);
  border-radius: 4px;
`;

const StyledInput = styled.input`
  
color: var(--Color-Dark-Dark-2, #87898E);
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

const InputWithIcon = ({ icon, placeholder,iconright, ...props }) => {
  return (
    <InputContainer>
      {icon && <IconContainer>{icon}</IconContainer>}
      <StyledInput placeholder={placeholder} {...props} />
      {iconright && <IconContainer>{iconright}</IconContainer>}
    </InputContainer>
  );
};

export default InputWithIcon;
