import React from "react";
import LastSynced from "../../../layout/LastSynced";
import { Box, Dialog, Modal, Stack, Typography } from "@mui/material";
import StyledTable from "../../../ui/styledTable";
import StyledButton from "../../../ui/styledButton";
import { useState } from "react";
import StyledDivider from "../../../ui/styledDivider";
import AddRole from "./addRole";
import { ReactComponent as Close } from "../../../assets/icons/close-circle.svg";
import { toast } from "react-toastify";
import { deleteRole } from "../../../services/userApi";
import { Transition } from "../../../utils/DialogAnimation";

export default function RoleManagement({ headers, data, setIsChange, isChange }) {
  const [open, setOpen] = useState(false);
  const [action, setAction] = useState("add");
  const [tableData, setTableData] = useState();
  // Function to open the modal
  const handleOpen = () => {
    setTableData();
    setAction("add");
    setOpen(true);
  };

  // Function to close the modal
  const handleClose = () => {
    setOpen(false);
  };
  const handleRoleSuccess = () => {
    toast.success("Role successfully updated!");
    handleClose(); // Close the modal after success
  };
  const handleClick = async (e) => {
    if (e.action === "Edit") {
      setAction("edit");
      setOpen(true);
      setTableData(e.data);
    } else if (e.action === "Delete") {
      await deleteRole(e.data._id);
      setIsChange(!isChange);
      toast.success("Role deleted!");
    }
  };
  return (
    <>
      <LastSynced heading="Role Management" showSearchField={true} />
      <Box sx={{ p: 3 }}>
        <Box display="flex" justifyContent="flex-end">
          <StyledButton variant="secondary" width="150" mr="10" onClick={handleOpen}>
            Add
          </StyledButton>
        </Box>
        <StyledTable headers={headers} data={data} onActionClick={handleClick} actions={["Edit","Delete"]} />
      </Box>
      {/* Modal */}
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
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
          <AddRole
            action={action}
            data={tableData}
            onSuccess={handleRoleSuccess}
            onClose = {handleClose}
            setIsChange={setIsChange}
            isChange={isChange}
          />
        </Box>
      </Dialog>
    </>
  );
}

// Modal style
const modalStyle = {
  width: "auto", // Adjust width to fit your content or screen
  bgcolor: "#27292F", // Dark background color
  boxShadow: 10,
  p: 2,
  color: "#fff", // White text for better visibility on dark background
  outline: "none", // Remove the focus ring
};
