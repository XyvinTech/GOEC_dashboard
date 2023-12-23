import styled from "styled-components";

// Styled table container
export const TableContainer = styled.div`
  background: #121212; // Dark background for the table
  overflow-x: auto; // Allows table to be scrollable horizontally
  border-radius: 8px; // Rounded corners
  margin: 20px 0; // Margin for spacing, adjust as needed
`;

// Styled table
export const Table = styled.table`
  width: 100%; // Full-width table
  border-collapse: collapse; // Collapses table borders
  color: #fff; // White text color
`;

// Styled table header
export const TableHeader = styled.thead`
  background: #1e1e1e; // Slightly lighter dark background for header
  text-align: left;
`;

// Styled table header cell
export const HeaderCell = styled.th`
  padding: 16px; // Padding inside header cells, adjust as needed
  font-weight: 500; // Medium font weight
`;

// Styled table body
export const TableBody = styled.tbody`
  tr {
    border-bottom: 1px solid #333; // Border color for row separation

    &:nth-child(even) {
      background: #242424; // Alternating row background
    }
  }
`;

// Styled table cell
export const TableCell = styled.td`
  padding: 16px; // Padding inside cells, adjust as needed
  font-weight: 400; // Regular font weight
`;

// Usage example in a React component
const StyledTable = ({ headers, data }) => (
  <TableContainer>
    <Table>
      <TableHeader>
        <tr>
          {headers.map((header, index) => (
            <HeaderCell key={index}>{header}</HeaderCell>
          ))}
        </tr>
      </TableHeader>
      <TableBody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {headers.map((header, cellIndex) => (
              <TableCell key={cellIndex}>{row[header]}</TableCell>
            ))}
          </tr>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default StyledTable;
