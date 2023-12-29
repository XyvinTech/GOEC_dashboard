import React, { useState } from 'react'
import { Box, Modal, Stack, Typography } from '@mui/material'
import StyledTable from '../../../ui/styledTable'
import { DummyData } from '../../../assets/json/VidTableData'
import StyledButton from '../../../ui/styledButton'
import LastSynced from '../../../layout/LastSynced'
import AddVidCards from './AddVidCards'

const tableHeader = [
  'VID Tag',
  'User Name',
  'Created On',
  'Expires On',
  'Balance',
  'Status'
]

export default function AllVidCards() {

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
      <LastSynced heading="VID Cards"/>
      <Box sx={{p:3}}>
        <Box display="flex" justifyContent="flex-end">
            <StyledButton variant='secondary' width='150' mr='10' onClick={handleOpen}>Add</StyledButton>
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
            <AddVidCards Close={handleClose} />
        </Box>
       
      </Modal>
    </>
  )
}



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