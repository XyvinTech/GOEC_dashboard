import styled, { css } from "styled-components";

// Styled component for the "Busy" button
const StyledBadge = styled.button`
  background-color: #DAA520; // Gold background color
  color: #FFFFFF; // White text color
  border: none;
  border-radius: 30px; // Adjust for the desired roundedness
  padding: 10px 20px;
  min-width: 80px; // Adjust based on the design
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); // Shadow to match your design
  cursor: pointer;
  transition: all 0.3s ease;
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
    background-color: #FFD700; // Lighter gold color on hover
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  &:focus {
    outline: none;
  }
`;

export default StyledBadge;