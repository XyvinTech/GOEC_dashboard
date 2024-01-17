import React, { useEffect, useState } from 'react'
import { Box, Button, Modal, Stack, Typography } from '@mui/material'
import StyledTable from '../../../ui/styledTable'
import { DummyData } from '../../../assets/json/RfidTableData'
import StyledButton from '../../../ui/styledButton'
import LastSynced from '../../../layout/LastSynced'
import AddRfidCard from '../Rfid/AddRfidCard'
import AddBulkRfidCard from './AddBulkRfidCard'
import EditRfidCard from './EditRfidCard'
import {getRfidList} from '../../../services/rfidAPI'

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
  const [isComponent, setIsComponent] = useState(0); // State to track which component to render

  const [action, setAction] = useState("add");
  const [tableData, setTableData] = useState();

  const [rfidData, setRfiddata] = useState('');

  // Function to open the modal
  const handleOpen = () => {
    setOpen(true);
  };

  // Function to close the modal
  const handleClose = () => {
    setOpen(false);
  };

  // Function to switch between AddRfidCard and AddBulkRfidCard
  const toggleAddMode = (status) => {
    setIsComponent(status);
    setOpen(true);
  };

  const handleClick = (e) => {
   
    // if (e.action === "Edit") {
      console.log('edit')
      setAction("edit");
      setIsComponent(2);
      setOpen(true);
      setTableData(e.data);
    // }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRfidList();
      setRfiddata(data); // Use setRfiddata to update the state
      //console.log("data is", data);
    } catch (error) {
      console.error("Error fetching RFID data:", error);
    }
  };

    fetchData();
  }, []); 

  return (
    <>
     <LastSynced heading="RFID Cards"/>
      <Box sx={{p:3}}>
        <Box display="flex" justifyContent="flex-end">
            <StyledButton variant='secondary' width='150' mr='10'  onClick={() => toggleAddMode(0)}>Add</StyledButton>
            <StyledButton variant='primary' width='150' onClick={() => toggleAddMode(1)}>Add Bulk</StyledButton>
        </Box>
        <StyledTable 
          headers={tableHeader} 
          data={DummyData}
          onActionClick={(e) => handleClick(e)}/>
      </Box>
       {/* Modal */}
       <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
                  
        <Box sx={modalStyle}>
         
          {isComponent === 0 ? (
            <AddRfidCard Close={handleClose} />
          ) : isComponent === 1 ? (
            <AddBulkRfidCard Close={handleClose} />
          ) : isComponent === 2 ?(
            <EditRfidCard Close={handleClose} existingData={tableData}/>
          ):null}
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
  boxShadow: 10,
  borderRadius: 2,
  color: '#fff', // White text for better visibility on dark background
  outline: 'none', // Remove the focus ring
  maxHeight: '100%',
  overflowY:'auto'
};
