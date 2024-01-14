import { Box, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import StyledTab from '../ui/styledTab'
import AllChargePoint from '../components/assetManagement/chargePoints/allChargePoint';
import AddChargePoint from '../components/assetManagement/chargePoints/AddChargePoint';
import { listEvMachine } from '../services/evMachineAPI';
export default function ChargingPoints() {
  const [togglePage, setTogglePage] = useState(0);
  const [chargePointListData, setChargePointListData] = useState([])

  const init = () => {
    listEvMachine().then((res) => {
      console.log(res);
      if (res) {
        setChargePointListData(res)
      }
    }
    )
  }

  useEffect(() => {
    init();
  }, [])

  const buttonChanged = (e) => {
    setTogglePage(e.index)
  }
  return (
    <Box>
      <StyledTab buttons={['All Chargepoints', 'Add chargepoints']} onChanged={buttonChanged} />
      {togglePage === 0 ? <AllChargePoint data={chargePointListData} /> : <AddChargePoint />}
    </Box>
  )
}