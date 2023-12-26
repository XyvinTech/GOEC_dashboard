import styled, { css } from "styled-components";
import { ReactComponent as Close } from "../assets/icons/Light.svg";
import { ReactComponent as Plus } from "../assets/icons/Light-1.svg";
// Styled component for the "Busy" button
const CheckbutonContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
  background-color: #2B2930; // Gold background color
  color: var(--grayscale-white, #FFF);// White text color
  border: solid 1px rgba(255, 255, 255, 0.20);
  border-radius: 5px; // Adjust for the desired roundedness
 
  padding: 2rem 4rem;
 
  min-height: 60px; // Adjust based on the design
  
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  text-transform: capitalize;
 
  cursor: pointer;
  transition: all 0.3s ease;
 // Variants for different button styles
 

    ${(props) =>
      props.active &&
      css`
      background: rgba(74, 68, 88);
        color: white;
      `}
  
  
`;

const IconContainer = styled.div`


padding-left:10px;
height: 24px;
justify-content: center;
align-items: center;
flex-shrink: 0;
color:#87898E;
`;

const 
StyledCheckButton = ({ icon, children, ...props }) => {
  return (
    <CheckbutonContainer  onClick={() => props.setActive(!props.active)} {...props}>
     
    {children}
    {
      props.active ? <IconContainer><Close style={{ fontSize:'25px'}}/></IconContainer> : <IconContainer><Plus/></IconContainer>
    }
    
    </CheckbutonContainer>
  );
};

export default StyledCheckButton;