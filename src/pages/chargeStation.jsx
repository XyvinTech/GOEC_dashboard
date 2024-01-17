import { Box, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import StyledTab from '../ui/styledTab'
import AllChargeStation from '../components/assetManagement/chargeStations/allChargeStation';
import AddChargingStation from '../components/assetManagement/chargeStations/AddChargingStation';
import { getChargingStationList, createChargingStation, deleteChargingStation } from '../services/stationAPI';
import ConfirmDialog from '../ui/confirmDialog';

export default function ChargingStation() {
  const [togglePage, setTogglePage] = useState(0);
  const [chargeStationListData, setChargeStationListData] = useState([])
  const [dialogOpen, setDialogOpen] = useState(false);
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

        
      <StyledTab
        buttons={['All Charge stations', 'Add Charge Station']} onChanged={buttonChanged} />
      {togglePage === 0 ? <AllChargeStation data={chargeStationListData} deleteData={(data) => { setSelectedData(data); setDialogOpen(true) }} /> :
        <AddChargingStation formSubmited={() => { init(); setTogglePage(0) }} addChargeStation={addChargeStation} />}
    </Box>
  );
}
