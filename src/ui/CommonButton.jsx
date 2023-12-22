import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  background: ${props => (props.background ? props.background : '#008CBA')};
  color: white;
  border: ${props => (props.border ? props.border : 'none')};
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  width: 482px;
  padding: 20px 10px;
  justify-content: center;
  align-items: center;
  gap: 16px;

  &:hover {
    background: ${props => (props.background ? props.background : '#005A8C')};
  }

  ${props =>
    props.disabled &&
    css`
      background-color: #d3d3d3;
      cursor: not-allowed;
      &:hover {
        background-color: #d3d3d3;
      }
    `}
`;

export default StyledButton;