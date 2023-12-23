import styled, { css } from "styled-components";

const StyledButton = styled.button`
  width:482px;
  padding: 15px 20px;
  border: 1px solid rgba(255, 255, 255, 0.20);
  border-radius: 4px; 
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  font-style: normal;
  gap:16px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s, box-shadow 0.3s;

  // Variants for different button styles
  ${(props) =>
    props.variant === "primary" &&
    css`
      background-image: linear-gradient(
        100deg,
        #8e2de2,
        #4a00e0
      ); 
      color: white;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
    `}

  ${(props) =>
    props.variant === "secondary" &&
    css`
      background-color: #333; 
      color: white;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
    `}

  &:hover {
  
    box-shadow: 0 6px 12px rgba(152, 149, 149, 0.35);
  }

  &:focus {
    outline: none;
  }
`;

export default StyledButton;
