import styled, { css } from "styled-components";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React, { useState } from "react";
import InputWithIcon from "../styledInput";

// StyledTable component
const StyledTable = ({ headers, data }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenuRowIndex, setOpenMenuRowIndex] = useState(null);
  // pagination

  const handleClick = (event, index) => {
    setAnchorEl(event.currentTarget);
    setOpenMenuRowIndex(index);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenuRowIndex(null);
  };

  const handleChangePage = () => {};

  return (
    <TableContainer>
      <Box>
        <Typography
          sx={{
            paddingLeft: "185px",
            paddingBottom: "10px",
            paddingTop: "20px",
          }}
        >
          Location name{" "}
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <InputWithIcon placeholder="Enter Location Name" />
          <InputWithIcon placeholder="Enter Location Name" />
        </Box>
      </Box>

      <Box>
        <Typography
          sx={{
            paddingLeft: "185px",
            paddingBottom: "10px",
            paddingTop: "50px",
          }}
        >
          Address
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <InputWithIcon placeholder="Enter Address" />
          <InputWithIcon placeholder="Pincode" />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <InputWithIcon placeholder="Country" />
          <InputWithIcon placeholder="State" />
          <InputWithIcon placeholder="City" />
        </Box>
      </Box>

      <Box>
      <Typography
          sx={{
            paddingLeft: "185px",
            paddingBottom: "10px",
            paddingTop: "50px",
          }}
        >
          Map co-ordinates
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <InputWithIcon placeholder="Longitude" />
          <InputWithIcon placeholder="Latitude" />
        </Box>
      </Box>
    </TableContainer>
  );
};

export default StyledTable;

//! STYLINGS

// Styled action cell

// Styled table container
export const TableContainer = styled.div`
  background: #27292f; // Dark background for the table
  overflow-x: auto; // Allows table to be scrollable horizontally
  border-radius: 8px; // Rounded corners
  margin: 20px 0; // Margin for spacing, adjust as needed
`;
