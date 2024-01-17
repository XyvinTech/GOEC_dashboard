import { Box, Dialog, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import StyledTab from '../ui/styledTab'
import AllChargeStation from '../components/assetManagement/chargeStations/allChargeStation';
import AddChargingStation from '../components/assetManagement/chargeStations/AddChargingStation';
import { getChargingStationList, createChargingStation, deleteChargingStation } from '../services/stationAPI';
import ConfirmDialog from '../ui/confirmDialog';
import { ReactComponent as Close } from "../assets/icons/close-icon-large.svg";

export default function ChargingStation() {
  const [togglePage, setTogglePage] = useState(0);
  const [chargeStationListData, setChargeStationListData] = useState([])
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(false);


  const init = () => {
    getChargingStationList().then((res) => {
      if (res.status) {
        setChargeStationListData(res.result)
      }
    }
    )
  }

  const addChargeStation = (data) => {
    createChargingStation(data).then((res) => {
      console.log(res)

    }
    )
  }

  useEffect(() => {
    init();
  }, [])

  const deleteData = (data) => {
    deleteChargingStation(selectedData._id).then((res) => {
      init();
    })
  }

  const buttonChanged = (e) => {
    setTogglePage(e.index);
  };

  return (
    <Box>
      <ConfirmDialog
        open={dialogOpen}
        title={"Confirm Delete"}
        subtitle={"Do you want to Delete"}
        buttonText={"Delete"}
        onClose={() => { setDialogOpen(false) }}
        confirmButtonHandle={deleteData} />

        <Dialog open={editDialogOpen} maxWidth='md' fullWidth>
          <Stack direction={'row'} sx={{p:2,backgroundColor:'primary.main',justifyContent:'space-between',borderBottom:'solid 1px #fff3'}}>
            <Typography sx={{color:'secondary.contrastText'}}>Edit ChargeStation</Typography>
            <Close style={{cursor:'pointer'}} onClick={()=>{setEditDialogOpen(false) }}/>
          </Stack>
          <AddChargingStation data={selectedData} editStatus={true} />
        </Dialog>
      <StyledTab
        buttons={['All Charge stations', 'Add Charge Station']} onChanged={buttonChanged} />
      {togglePage === 0 ? <AllChargeStation data={chargeStationListData} deleteData={(data) => { setSelectedData(data); setDialogOpen(true) }}  editData={(data)=>{setSelectedData(data); setEditDialogOpen(true)}}/> :
        <AddChargingStation formSubmited={() => { init(); setTogglePage(0) }} addChargeStation={addChargeStation} />}
    </Box>
  );
}
