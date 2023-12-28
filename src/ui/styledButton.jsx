import styled, { css } from "styled-components";

const StyledButton = styled.button`
  border: 1px solid rgba(255, 255, 255, 0.20);
  border-radius: 4px; 
  font-family:"Inter", 'sans-serif';
  cursor: pointer;
  // font-size: 16px;
  // font-weight: 600;
  font-style: normal;
  gap:16px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s, box-shadow 0.3s;

  // font size for different button styles
  ${(props) => props.fontSize &&
    css`
    font-size:${props.fontSize}px;
    `}
    ${(props) => !props.fontSize &&
    css`
    font-size:16px;
    `}
    
  // width for different button styles
  ${(props) => props.width &&
    css`
      width:${props.width}px;
    `}
    ${(props) => !props.width &&
    css`
        width:482px;
      `}

    // height for different button styles
  ${(props) => props.height &&
    css`
    height:${props.height}px;
    `}
     
  // padding for different button styles

  ${(props) => {
    if (props.p) {
        return css`
            padding: ${props.p}px;
        `;
    } else if (props.pt) {
        return css`
            padding-top: ${props.pt}px;
        `;
    } else if (props.pr) {
        return css`
            padding-right: ${props.pr}px;
        `;
    } else if (props.pb) {
        return css`
            padding-bottom: ${props.pb}px;
        `;
    } else if (props.pl) {
        return css`
            padding-left: ${props.pl}px;
        `;
    } else {
        return css`
            padding: 15px 20px;
        `;
    }
}}

// margin for different button styles

${(props) => {
  if (props.m) {
      return css`
          margin: ${props.m}px;
      `;
  } else if (props.mt) {
      return css`
      margin-top: ${props.mt}px;
      `;
  } else if (props.mr) {
      return css`
      margin-right: ${props.mr}px;
      `;
  } else if (props.mb) {
      return css`
      margin-bottom: ${props.mb}px;
      `;
  } else if (props.ml) {
      return css`
      margin-left: ${props.ml}px;
      `;
  } else {
      return css`
      margin: 0px 0px;
      `;
  }
}}

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

  ${(props) =>
    props.variant === "gray" &&
    css`
      background-color: #39383D; 
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
