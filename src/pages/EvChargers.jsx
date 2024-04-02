import { Box, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import StyledTab from '../ui/styledTab'
import AllEvChargers from '../components/dataManagement/evChargers/AllEvChargers';
import AddEvCharger from '../components/dataManagement/evChargers/AddEvCharger';
import { getEvModel } from '../services/evMachineAPI';


export default function EvChargers() {
  const [togglePage, setTogglePage] = useState(0);
  const [evModelListData, setEvModelListData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [totalCount, setTotalCount] = useState(1);

  const init = (filter = {pageNo}) => {
    getEvModel(filter).then((res) => {
      if (res.status) {
        setEvModelListData(res.result);
        setTotalCount(res.totalCount);
      }
    });
  };

  useEffect(() => {
    init();
  }, [pageNo]);


  const buttonChanged = (e) => {
    setTogglePage(e.index);
  };

  
  return (
    <Box>
      <Stack direction={"row"} sx={{ backgroundColor: "secondary.main" }}>
        <StyledTab
          buttons={['All EV chargers', 'Add EV charger']} onChanged={buttonChanged} activeIndex={togglePage} />
      </Stack>
      {togglePage === 0 ? <AllEvChargers data={evModelListData} setPageNo={setPageNo} totalCount={totalCount} updateData={init} /> : <AddEvCharger formSubmitted={() => { init(); setTogglePage(0) }} />}
    </Box>
  );
}
