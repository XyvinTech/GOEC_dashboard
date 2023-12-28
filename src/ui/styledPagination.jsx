import React from 'react';
import styled from 'styled-components';


// Pagination component
const StyledPagination = ({ page, pageCount, onChange }) => (
  <PaginationContainer>
    <PageButton
      onClick={() => onChange(page - 1)}
      disabled={page <= 0}
    >
      Previous
    </PageButton>
    {/* Display current page number */}
    <PaginationText>Page {page + 1} of {pageCount}</PaginationText>    <PageButton
      onClick={() => onChange(page + 1)}
      disabled={page >= pageCount - 1}
    >
      Next
    </PageButton>
  </PaginationContainer>
);

export default StyledPagination;



//! STYLINGS 


// Styled pagination container
const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0px;
  
  //Typography
  color: var(--greyy, #B5B8C5);
font-feature-settings: 'clig' off, 'liga' off;

/* typography/caption */
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 166%; /* 19.92px */
letter-spacing: 0.4px;
`;

// Styled page button
const PageButton = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 8px;
  cursor: pointer;
  min-width:100px;
  &:hover {
    background-color: #555;
  }
  &:disabled {
    background-color: #222;
    cursor: not-allowed;
  }

`;


const PaginationText = styled.span`
  margin: 0 10px; // Adjust the margin as needed
`;
