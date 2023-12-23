import styled, { css } from "styled-components";

// Styled component for the "Busy" button
const StyledBadge = styled.button`
  background-color: #DAA520; // Gold background color
  color: var(--grayscale-white, #FFF);// White text color
  border: none;
  border-radius: 30px; // Adjust for the desired roundedness
  padding: 5px 20px;
  min-width: 80px; // Adjust based on the design
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); // Shadow to match your design
  //cursor: pointer;
  transition: all 0.3s ease;
 // Variants for different button styles
 ${(props) =>
    props.color === "red" &&
    css`
    background: var(--red, #551D1D);
      color: white;
    `}

    ${(props) =>
      props.color === "yellow" &&
      css`
      background: var(--yellow, #6D5414);
        color: white;
      `}
    ${(props) =>
      props.color === "gray" &&
      css`
      background: rgba(181, 184, 197, 0.20);
        color: white;
      `}
    ${(props) =>
      props.color === "green" &&
      css`
      background: rgba(39, 174, 96, 0.20);
        color: white;
      `}
  
`;

export default StyledBadge;