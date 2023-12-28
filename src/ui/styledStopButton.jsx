// Styled Stop button
import styled from "styled-components";

const StyledStopButton = styled.button`
  display: inline-flex;
  padding: 10px 20px;
  align-items: flex-start;
  gap: 10px;
  background-color: #663131; // Red background color for stop button
  border: none; // No border
  border-radius: 4px; // Rounded corners
  cursor: pointer; // Pointer cursor on hover
  margin-left: auto; // Align to the right
  &:hover {
    background-color: #a8322c; // Slightly darker red on hover
  }

  //Typography
  color: var(--grayscale-white, #fff);
  text-align: center;
  font-family: Inter;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

export default StyledStopButton;
