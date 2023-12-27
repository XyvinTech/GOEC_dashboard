import React from 'react'
import styled from 'styled-components';


const FooterContainer = styled.div`
display: inline-flex;
padding: 20px 25.506px 20px 467.494px;
justify-content: flex-end;
align-items: center;
background: #1C1D22;
width: 772px;
bottom: 0;
border-bottom-left-radius: var(--borderRadius, 4px);
border-bottom-right-radius: var(--borderRadius, 4px);
`;

const StyledFooter = ({children}) => {
  return (
    <FooterContainer>
        {children}
    </FooterContainer>
  )
}

export default StyledFooter
