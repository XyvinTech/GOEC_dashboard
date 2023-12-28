import React, { useState } from "react";
import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import StyledTable from "../../../ui/styledTable";
import LastSynced from "../../../layout/LastSynced";
import { ReactComponent as Close } from "../../../assets/icons/close-circle.svg";
import StyledDivider from "../../../ui/styledDivider";
import AddTariff from "./addTariff";
function ChargingTariff({ data, headers }) {
  const [open, setOpen] = useState(false);
  // Function to open the modal
  const handleOpen = () => {
    setOpen(true);
  };

  // Function to close the modal
  const handleClose = () => {
    setOpen(false);
  };

  const dummyData = {
    name: "Jack Hugh",
    value: "40 kWH",
    fee: "40 Rs",
    tax: "10%",
  };

  return (
    <>
      <LastSynced
        heading="Charge Tariff"
        showSearchField={true}
        showButton={true}
        handleClick={handleOpen}
      />
      <Box sx={{ p: 3 }}>
        <StyledTable headers={headers} data={data} />
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
              Add Tariff
            </Typography>
            <Close onClick={handleClose} style={{ cursor: "pointer" }} />
          </Stack>
          <StyledDivider />
          <AddTariff action={"add"} data={dummyData}/>
        </Box>
      </Modal>
    </>
  );
}

export default ChargingTariff;

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
