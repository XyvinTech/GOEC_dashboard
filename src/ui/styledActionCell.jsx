// ActionCell.jsx
import React, { useState } from 'react';
import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const StyledActionCell = ({ actions, onCliked }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-label="more"
        aria-controls="action-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{ color: "#fff" }}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="action-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        sx={{
          "& .MuiPaper-root": {
            bgcolor: "black",
            color: "white",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        {actions.map((item, index) => (
          <MenuItem key={index} onClick={() => { onCliked({ index: index, action: item }); handleClose(); }}>{item}</MenuItem>
        ))
        }
      </Menu>
    </>
  );
};

export default StyledActionCell;
