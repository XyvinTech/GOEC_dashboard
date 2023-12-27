import React from 'react'
import styled, { css } from 'styled-components';


const FooterContainer = styled.div`
display: inline-flex;
padding: 20px 25.506px 20px 467.494px;
justify-content: flex-end;
align-items: center;
background: #1C1D22;
bottom: 0;
border-bottom-left-radius: var(--borderRadius, 4px);
border-bottom-right-radius: var(--borderRadius, 4px);
// width for different button styles
  ${(props) => props.width &&
    css`
      width:${props.width}%;
    `}
    ${(props) => !props.width &&
    css`
        width:772px;
      `}
`;

const StyledFooter = ({children,width }) => {
  return (
    <FooterContainer width={width}>
        {children}
    </FooterContainer>
  )
}

export default StyledFooter
