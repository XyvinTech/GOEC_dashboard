import { Box, Stack } from '@mui/material'
import React,{useEffect, useState} from 'react'
import StyledTab from '../ui/styledTab'

import AddVehicles from '../components/dataManagement/evVehicles/AddVehicles'
import AllVehicles from '../components/dataManagement/evVehicles/AllVehicles'
import { getVehicleListForDashboard } from '../services/vehicleAPI'


export default function Vehicles() {
    const [togglePage, setTogglePage] = useState(0);
    const [vehicleListData, setVehicleListData] = useState([]);
  
    const init = () => {
      getVehicleListForDashboard().then((res) => {
        if (res.status) {
          setVehicleListData(res.result);
        }
      });
    };

    useEffect(() => {
      init();
    }, []);
    
    const buttonChanged = (e) => {
      console.log(e);
      setTogglePage(e.index);
    };
    return (
      <Box>
        <Stack direction={"row"} sx={{ backgroundColor: "secondary.main" }}>
          <StyledTab
           buttons={['All EV Vehicle', 'Add EV Vehicle']} onChanged={buttonChanged} />
        </Stack>
        {togglePage === 0 ? <AllVehicles data={vehicleListData} /> : <AddVehicles />}
      </Box>
    );
  }
  