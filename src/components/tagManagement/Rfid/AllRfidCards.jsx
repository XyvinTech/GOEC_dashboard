import React, { useState } from 'react'
import { Box, Button, Modal, Stack, Typography } from '@mui/material'
import StyledTable from '../../../ui/styledTable'
import { DummyData } from '../../../assets/json/RfidTableData'
import StyledButton from '../../../ui/styledButton'
import LastSynced from '../../../layout/LastSynced'
import AddRfidCard from '../Rfid/AddRfidCard'
import AddBulkRfidCard from './AddBulkRfidCard'

const tableHeader = [
    'RFID Tag',
    'User Name',
    'Created On',
    'Expires On',
    'Balance',
    'Status'
  ]


const AllRfidCards = () => {
  const [open, setOpen] = useState(false);
  const [isAddRfid, setIsAddRfid] = useState(true); // State to track which component to render


  // Function to open the modal
  const handleOpen = () => {
    setOpen(true);
  };

  // Function to close the modal
  const handleClose = () => {
    setOpen(false);
  };

  // Function to switch between AddRfidCard and AddBulkRfidCard
  const toggleAddMode = (addRfid) => {
    setIsAddRfid(addRfid);
    setOpen(true);
  };

  return (
    <>
     <LastSynced heading="RFID Cards"/>
      <Box sx={{p:3}}>
        <Box display="flex" justifyContent="flex-end">
            <StyledButton variant='secondary' width='150' mr='10'  onClick={() => toggleAddMode(true)}>Add</StyledButton>
            <StyledButton variant='primary' width='150' onClick={() => toggleAddMode(false)}>Add Bulk</StyledButton>
        </Box>
        <StyledTable headers={tableHeader} data={DummyData}/>
      </Box>
       {/* Modal */}
       <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          {isAddRfid ? (
            <AddRfidCard Close={handleClose} />
          ) : (
            <AddBulkRfidCard Close={handleClose} />
          )}
        </Box>
       
      </Modal>
    </>
  )
}

export default AllRfidCards

// Modal style
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto', // Adjust width to fit your content or screen
  boxShadow: 24,
  borderRadius: 2,
  color: '#fff', // White text for better visibility on dark background
  outline: 'none', // Remove the focus ring
  maxHeight: '100%',
  overflowY:'auto'
};
