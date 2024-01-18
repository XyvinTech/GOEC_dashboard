import React, { useState } from "react";
import { Box, Modal, Stack, Typography } from "@mui/material";
import StyledTable from "../../../ui/styledTable";
import LastSynced from "../../../layout/LastSynced";
import StyledDivider from "../../../ui/styledDivider";
import { ReactComponent as Close } from "../../../assets/icons/close-circle.svg";
import { ToastContainer, toast } from "react-toastify";

import AddTax from "./addTax";
import StyledButton from "../../../ui/styledButton";
import StyledSearchField from "../../../ui/styledSearchField";
import { tableHeaderReplace } from "../../../utils/tableHeaderReplace";
import { deleteTax } from "../../../services/taxAPI";
function Tax({ data, headers, onIsChange, isChange }) {
  const [open, setOpen] = useState(false);
  const [action, setAction] = useState("add");
  const [tableData, setTableData] = useState();
  const [filterValue, setFilterValue] = useState("");

  // Function to open the modal
  const handleOpen = () => {
    setAction("add");
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
    } else if (e.action === "Delete") {
      setAction("delete");
      const res = deleteTax(e.data._id);
      if (res) {
        const successToastId = toast.success("Tax deleted successfully", {
          position: "top-right",
        });
        toast.update(successToastId);
        onIsChange(!isChange);
      }
    }
  };

  const taxData = tableHeaderReplace(data, ["name", "percentage", "createdAt"], headers);

  return (
    <>
      <LastSynced heading="Tax">
        <StyledSearchField
          placeholder={"Search"}
          onChange={(e) => {
            setFilterValue(e.target.value);
          }}
        />
      </LastSynced>
      <Box sx={{ p: 3 }}>
        <Box display="flex" justifyContent="flex-end">
          <StyledButton variant="primary" width="150" mr="10" onClick={handleOpen}>
            Add
          </StyledButton>
        </Box>
        <StyledTable headers={headers} data={taxData} onActionClick={handleClick} />
      </Box>
      <ToastContainer />
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
              Add Tariff
            </Typography>
            <Close onClick={handleClose} style={{ cursor: "pointer" }} />
          </Stack>
          <StyledDivider />
          <AddTax action={action} data={tableData} onIsChange={onIsChange} isChange={isChange}/>
        </Box>
      </Modal>
    </>
  );
}

export default Tax;

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
