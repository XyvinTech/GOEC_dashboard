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
    <span>Page {page + 1} of {pageCount}</span>
    <PageButton
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
  margin-top: 20px;
`;

// Styled page button
const PageButton = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  margin: 0 8px;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
  &:disabled {
    background-color: #222;
    cursor: not-allowed;
  }
`;
