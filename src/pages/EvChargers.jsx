import { Box, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import StyledTab from '../ui/styledTab'
import AllEvChargers from '../components/dataManagement/evChargers/AllEvChargers';
import AddEvCharger from '../components/dataManagement/evChargers/AddEvCharger';
import { deleteEvModel, getEvModel } from '../services/evMachineAPI';
import { toast } from 'react-toastify';
import ConfirmDialog from '../ui/confirmDialog';


export default function EvChargers() {
  const [togglePage, setTogglePage] = useState(0);
  const [evModelListData, setEvModelListData] = useState([]);
  

  const init = () => {
    getEvModel().then((res) => {
      console.log(res.result);
      if (res.status) {
        setEvModelListData(res.result);
      }
    });
  };

  useEffect(() => {
    init();
  }, []);


  const buttonChanged = (e) => {
    setTogglePage(e.index);
  };

  
  return (
    <Box>
      
      <Stack direction={"row"} sx={{ backgroundColor: "secondary.main" }}>
        <StyledTab
          buttons={['All EV chargers', 'Add EV charger']} onChanged={buttonChanged} activeIndex={togglePage} />
      </Stack>
      {togglePage === 0 ? <AllEvChargers data={evModelListData} updateData={init} /> : <AddEvCharger formSubmitted={() => { init(); setTogglePage(0) }} />}
    </Box>
  );
}
