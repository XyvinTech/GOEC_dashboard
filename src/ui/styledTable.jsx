import styled, { css } from "styled-components";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React, { useState } from "react";
import StyledPagination from "./styledPagination";

// StyledTable component
const StyledTable = ({ headers, data }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenuRowIndex, setOpenMenuRowIndex] = useState(null);
  // pagination

  const [page, setPage] = useState(0);
  const rowsPerPage = 10;
  const paginatedData = data.slice(
    page * rowsPerPage,
    (page + 1) * rowsPerPage
  );
  const pageCount = Math.ceil(data.length / rowsPerPage);

  const handleClick = (event, index) => {
    setAnchorEl(event.currentTarget);
    setOpenMenuRowIndex(index);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenuRowIndex(null);
  };

  const handleChangePage = (newPage) => {
    console.log("Current page:", page);
    console.log("New page:", newPage);
    setPage(newPage); // Assuming newPage is 1-indexed
  };

  return (
    <TableContainer>
      <Table>
        <TableHeader>
          <tr>
            {headers.map((header) => (
              <HeaderCell key={header}>{header}</HeaderCell>
            ))}
            <HeaderCell></HeaderCell>
          </tr>
        </TableHeader>

        <TableBody>
          {paginatedData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header, cellIndex) => {
                const isStatusColumn = header.toLowerCase() === "status";

                return (
                  <TableCell
                    key={`${rowIndex}-${header}`}
                    $isfirstcolumn={cellIndex === 0}
                  >
                     {isStatusColumn ? (
                      <StatusChip $status={row[header]}>{row[header]}</StatusChip>
                    ) : (
                      row[header]
                    )}
                  </TableCell>
                );
              })}
              <ActionCell>
                <IconButton
                  aria-label="more"
                  aria-controls="long-menu"
                  aria-haspopup="true"
                  onClick={(event) => handleClick(event, rowIndex)}
                  style={{ color: "#fff" }}
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id="long-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={openMenuRowIndex === rowIndex}
                  onClose={handleClose}
                  sx={{
                    "& .MuiPaper-root": {
                      bgcolor: "black",
                      color: "white",
                      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
                    },
                  }}
                >
                  {options.map((option) => (
                    <MenuItem key={option} onClick={handleClose}>
                      {option}
                    </MenuItem>
                  ))}
                </Menu>
              </ActionCell>
            </tr>
          ))}
        </TableBody>
      </Table>
      <StyledPagination
        page={page}
        pageCount={pageCount}
        onChange={handleChangePage}
      />
    </TableContainer>
  );
};

export default StyledTable;

//! STYLINGS

// Styled action cell
export const ActionCell = styled.td`
  padding: 16px;
  text-align: right;
  font-family: "Inter", sans-serif; // Use Inter font family
  font-weight: 400; // Normal font weight
  color: #fff; // White text color
`;

const options = ["Edit", "Delete", "View"];
// Styled table container
export const TableContainer = styled.div`
  background: #121212; // Dark background for the table
  overflow-x: auto; // Allows table to be scrollable horizontally
  border-radius: 8px; // Rounded corners
  margin: 16px 0; // Margin for spacing, adjust as needed
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
  font-family: "Inter", sans-serif; // Use Inter font family
  color: rgba(255, 255, 255, 0.5); // White text color
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
  font-family: "Inter", sans-serif; // Use Inter font family
  color: ${(props) =>
    props.$isfirstcolumn // Use $ prefix for transient prop
      ? "#2D9CDB"
      : "rgba(181, 184, 197, 1)"}; // Blue text color for the first column, white for others
`;

// Define a styled component for the status chip
const StatusChip = styled.span`
  padding: 4px 8px;
  border-radius: 10px; // Adjust as needed for the chip look
  color: white;
  text-transform: uppercase;
 font-weight:500;
  text-align: center;
  display: inline-block;
  min-width: 60px; // Set a minimum width for uniformity

  // Dynamically set the background color based on the status
  background-color: ${props => {
    // Normalize the status to uppercase for case-insensitive comparison
    const status = props.$status.toUpperCase();

    if (["ACTIVE", "ONLINE", "ASSIGNED", "SUCCESS"].includes(status)) {
      return "rgba(24, 73, 45, 1)"; // Green for active or successful statuses
    } else if (status === "OFFLINE") {
      return "#c0392b"; // Red for offline
    } else if (status === "INACTIVE") {
      return "#3e3c3c"; // White for inactive
    } else if (["UNASSIGNED", "PENDING"].includes(status)) {
      return "#65572B"; // Brown for unassigned or pending statuses
    }
    // Add a default background color if needed
    return "defaultColor";
  }};
`;
