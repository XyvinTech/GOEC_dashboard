import { Box, Dialog, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import StyledTab from '../ui/styledTab'
import AllChargePoint from '../components/assetManagement/chargePoints/allChargePoint';
import AddChargePoint from '../components/assetManagement/chargePoints/AddChargePoint';
import { deleteEvMachine, listEvMachine } from '../services/evMachineAPI';
import ConfirmDialog from '../ui/confirmDialog';
import { ReactComponent as Close } from "../assets/icons/close-icon-large.svg";
import { toast } from 'react-toastify';
import { Transition } from '../utils/DialogAnimation';
export default function ChargingPoints() {
  const [togglePage, setTogglePage] = useState(0);
  const [chargePointListData, setChargePointListData] = useState([])
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(false);
  const [pageNo, setPageNo] = useState(1);
  const [totalCount, setTotalCount] = useState();

  const init = (filter = {pageNo}) => {
    listEvMachine(filter).then((res) => {
      if (res) {
        setChargePointListData(res.result)
        setTotalCount(res.totalCount);
      }
    }
    )
  }

  useEffect(() => {
    init();
  }, [pageNo])

  const deleteData = () => {
    deleteEvMachine(selectedData._id).then((res) => {
      init();
      toast.success("charging station deleted successfully")
    })
  }

  const buttonChanged = (e) => {
    setTogglePage(e.index)
  }
  return (
    <Box>
      <ConfirmDialog
        open={dialogOpen}
        title={"Confirm Delete"}
        subtitle={"Do you want to Delete"}
        buttonText={"Delete"}
        onClose={() => { setDialogOpen(false) }}
        confirmButtonHandle={deleteData} />
      <Dialog open={editDialogOpen} maxWidth='md' fullWidth TransitionComponent={Transition}>
        <Stack direction={'row'} sx={{ p: 2, backgroundColor: 'primary.main', justifyContent: 'space-between', borderBottom: 'solid 1px #fff3' }}>
          <Typography sx={{ color: 'secondary.contrastText' }}>Edit ChargeStation</Typography>
          <Close style={{ cursor: 'pointer' }} onClick={() => { setEditDialogOpen(false) }} />
        </Stack>
        <AddChargePoint formsubmitted={() => { init(); setEditDialogOpen(false); }} chargepointData={selectedData} editStatus={true} />
      </Dialog>
      <StyledTab activeIndex={togglePage} buttons={['All Chargepoints', 'Add chargepoints']} onChanged={buttonChanged} />
      {togglePage === 0 ? <AllChargePoint
        data={chargePointListData}
        setPageNo={setPageNo} 
        totalCount={totalCount}
        deleteData={(data) => { setSelectedData(data); setDialogOpen(true) }}
        editData={(data) => { setSelectedData(data); setEditDialogOpen(true) }} 
        reloadData={init}/> : 
        <AddChargePoint formsubmitted={() => { init(); setTogglePage(0); }} />}
    </Box>
  )
}