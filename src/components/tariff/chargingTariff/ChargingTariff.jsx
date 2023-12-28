import React, { useState } from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import StyledTable from "../../../ui/styledTable";
import LastSynced from "../../../layout/LastSynced";
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
          <Typography id="modal-title" variant="h6" component="h2">
            Charge Tariff Details
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            Details about the charging tariff can be placed here.
          </Typography>
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </>
  );
}

export default ChargingTariff;

// Modal style
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto', // Adjust width to fit your content or screen
  bgcolor: '#333', // Dark background color
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  color: '#fff', // White text for better visibility on dark background
  outline: 'none' // Remove the focus ring
};
