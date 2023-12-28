import React from 'react'
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../assets/icons/Icon.svg'

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  padding-left : 20px;
  background-color:#2b2930;
  border-radius: 5px;
`;

const SearchInput = styled.input`
  // padding: 8px 32px 8px 8px; /* Adjust padding to accommodate the icon */
  margin-left: 8px;
  height: 100%;
  border: none;
  outline: none;
  width: 90%;
  background-color:#2b2930;
  color:#CAC4D0;
`;

const SearchIcondiv = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
`;


const StyledSearchField = ({ placeholder, onChange, onSearch, ...props }) => {
    return (
      <SearchContainer {...props}>
        <SearchInput type="text" placeholder={placeholder} onChange={onChange} />
        <SearchIcondiv onClick={onSearch}><SearchIcon/></SearchIcondiv>
      </SearchContainer>
    );
  };
export default StyledSearchField
