import React from "react";
import LastSynced from "../../../layout/LastSynced";
import { Box, Modal, Stack, Typography } from "@mui/material";
import StyledTable from "../../../ui/styledTable";
import StyledButton from "../../../ui/styledButton";
import { useState } from "react";
import StyledDivider from "../../../ui/styledDivider";
import AddRole from "./addRole";
import { ReactComponent as Close } from "../../../assets/icons/close-circle.svg";

export default function RoleManagement({ headers, data }) {
  const [open, setOpen] = useState(false);
  const [action, setAction] = useState("add");
  const [tableData, setTableData] = useState();
  // Function to open the modal
  const handleOpen = () => {
    setOpen(true);
  };

  // Function to close the modal
  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (e) => {
    if (e.action === "Edit") {
      setAction("edit");
      setOpen(true);
      setTableData(e.data);
    }
  };
  return (
    <>
      <LastSynced heading="Role Management" showSearchField={true} />
      <Box sx={{p:3}}>
        <Box display="flex" justifyContent="flex-end">
          <StyledButton
            variant="secondary"
            width="150"
            mr="10"
            onClick={handleOpen}
          >
            Add
          </StyledButton>
        </Box>
        <StyledTable
          headers={headers}
          data={data}
          onActionClick={handleClick}
        />
      </Box>
      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={2}
            my={2}
          >
            <Typography
              sx={{
                color: "secondary.greytext",
                fontSize: 18,
                fontWeight: 700,
              }}
            >
              Add New Admin
            </Typography>
            <Close onClick={handleClose} style={{ cursor: "pointer" }} />
          </Stack>
          <StyledDivider />
          <AddRole action={action} data={tableData} />
        </Box>
      </Modal>
    </>
  );
}

// Modal style
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto", // Adjust width to fit your content or screen
  bgcolor: "#27292F", // Dark background color
  boxShadow: 10,
  p: 4,
  color: "#fff", // White text for better visibility on dark background
  outline: "none", // Remove the focus ring
};
