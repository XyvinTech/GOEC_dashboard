import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { ReactComponent as OutlineIcon } from "../../src/assets/icons/AdjustmentsOutline.svg";
import { Typography } from "@mui/material";
import StyledSelectField from "./styledSelectField";

const StyledDropdown = ({ height, width, component }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleTriggerClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownTrigger onClick={handleTriggerClick}>
        <OutlineIcon />
      </DropdownTrigger>
      <DropdownContent isOpen={isOpen} width={width} height={height}>
        <DropdownItem>{component}</DropdownItem>
      </DropdownContent>
    </DropdownContainer>
  );
};

export default StyledDropdown;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownTrigger = styled.div`
  cursor: pointer;
  display: flex;
  // height: 50px;
  padding: 15px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: var(--borderRadius, 4px);
  border: 1px solid rgba(0, 0, 0, 0.2);
  background: var(--Secondary, #322f3b);
`;

const DropdownContent = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  background-color: #322f3b;
  min-width: 200px;
  min-height: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  // for width
  ${(props) =>
    props.width &&
    css`
      width: ${props.width}px!important;
    `}
  // for height
   ${(props) =>
    props.height &&
    css`
      height: ${props.height}px!important;
    `}
`;

const DropdownItem = styled.div`
  padding: 12px;
`;
