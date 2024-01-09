import { Box, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import StyledTab from '../ui/styledTab'
import AllChargeStation from '../components/assetManagement/chargeStations/allChargeStation';
import AddChargingStation from '../components/assetManagement/chargeStations/AddChargingStation';
import { getChargingStationList } from '../services/stationAPI';

export default function ChargingStation() {

  const [chargeStationListData, setChargeStationListData] = useState([])

  const init = () => {
    getChargingStationList().then((res) => {
      if (res.status) {
        setChargeStationListData(res.result)
      }
    }

    )
  }

  useEffect(() => {
    init();
  }, [])

  const [togglePage, setTogglePage] = useState(0);

  const buttonChanged = (e) => {
    console.log(e);
    setTogglePage(e.index);
  };
  return (
    <Box>
      <StyledTab
        buttons={['All Charge stations', 'Add Charge Station']} onChanged={buttonChanged} />
      {togglePage === 0 ? <AllChargeStation data={chargeStationListData} /> : <AddChargingStation />}
    </Box>
  );
}
