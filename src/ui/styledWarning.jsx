import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const TextField = styled.h1`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  color: #EB5757;
`;

const IconContainer = styled.div`
  display: flex;
  width: 19px;
  height: 19px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const StyledWarning = ({ icon, value }) => {
  return (
    <Container>
      {icon && <IconContainer>{icon}</IconContainer>}
      <TextField>{value}</TextField>
    </Container>
  );
};

export default StyledWarning;
