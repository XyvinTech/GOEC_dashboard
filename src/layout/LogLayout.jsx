import React from "react";
import styled from "styled-components";
import StyledButton from "../ui/styledButton";

const LogLayout = ({ logo, children, button }) => {
  return (
    <>
      {logo ? (
        <StyledLayout>
          <LogoContainer>{logo}</LogoContainer>
          {children}
        </StyledLayout>
      ) : (
        <StyledLayout2>{children}</StyledLayout2>
      )}
    </>
  );
};

export default LogLayout;

const StyledLayout = styled.div`
  display: flex;
  width: 543px;
  padding: 0px 32px 24px 32px;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #1c1d22;
`;

const StyledLayout2 = styled.div`
  display: flex;
  width: 544px;
  padding: 32px;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  border-radius: 8px;
  background: #1c1d22;
`;
const StyledLayout3 = styled.div`
  display: inline-flex;
  padding: 20px 25.506px 20px 467.494px;
  justify-content: flex-end;
  align-items: center;
  background: #1c1d22;
`;

const LogoContainer = styled.div`
  display: flex;
  width: 544px;
  padding: 32px 0px 34px 0px;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  font-family: Conthrax;
  font-size: 29.712px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.446px;
  background: var(
    --Primary,
    linear-gradient(100deg, #ed5dcd -2.24%, rgba(95, 93, 215, 0.71) 98.06%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
