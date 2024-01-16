import { Box, Stack } from '@mui/material'
import React,{useEffect, useState} from 'react'
import StyledTab from '../ui/styledTab'
import AllEvChargers from '../components/dataManagement/evChargers/AllEvChargers';
import AddEvCharger from '../components/dataManagement/evChargers/AddEvCharger';
import { getEvModel } from '../services/evMachineAPI';


export default function EvChargers() {
  const [togglePage, setTogglePage] = useState(0);
  const [evModelListData, setEvModelListData] = useState([]);

  const init = () => {
    getEvModel().then((res) => {
      if (res.status) {
        setEvModelListData(res.result);
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
         buttons={['All EV chargers', 'Add EV charger']} onChanged={buttonChanged} />
      </Stack>
      {togglePage === 0 ? <AllEvChargers data={evModelListData} /> : <AddEvCharger />}
    </Box>
  );
}
