import React from 'react'
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../assets/icons/Icon.svg'

const SearchContainer = styled.div`
  position: relative;
  display: block;
  width: 280px;
`;

const SearchInput = styled.input`
  padding: 8px 32px 8px 8px; /* Adjust padding to accommodate the icon */
  border: none;
  border-radius: 4px;
  outline: none;
  width: 100%;
  height: 50px;
  background-color:#2b2930;
  color:#CAC4D0;
`;

const SearchIcondiv = styled.div`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  cursor: pointer;
`;


const StyledSearchField = ({ placeholder, onChange, onSearch }) => {
    return (
      <SearchContainer>
        <SearchInput type="text" placeholder={placeholder} onChange={onChange} />
        <SearchIcondiv onClick={onSearch}><SearchIcon/></SearchIcondiv>
      </SearchContainer>
    );
  };
export default StyledSearchField
