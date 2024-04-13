import { Box, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import StyledTab from '../ui/styledTab'

import AddVehicles from '../components/dataManagement/evVehicles/AddVehicles'
import AllVehicles from '../components/dataManagement/evVehicles/AllVehicles'
import { getVehicleListForDashboard } from '../services/vehicleAPI'


export default function Vehicles() {
  const [togglePage, setTogglePage] = useState(0);
  const [vehicleListData, setVehicleListData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [totalCount, setTotalCount] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const init = (filter = {pageNo}) => {
    if(searchQuery){
      filter.searchQuery = searchQuery;
    }
    getVehicleListForDashboard(filter).then((res) => {
      if (res.status) {
        setVehicleListData(res.result.map((item) => ({ ...item, charger_types: item.compactable_port.toString() })));
        setTotalCount(res.totalCount);
      }
    });
  };

  useEffect(() => {
    init();
  }, [pageNo, searchQuery]);

  const buttonChanged = (e) => {
    console.log(e);
    setTogglePage(e.index);
  };
  return (
    <Box>
      <Stack direction={"row"} sx={{ backgroundColor: "secondary.main" }}>
        <StyledTab
          activeIndex={togglePage}
          buttons={['All EV Vehicle', 'Add EV Vehicle']} onChanged={buttonChanged} />
      </Stack>
      {togglePage === 0 ? <AllVehicles data={vehicleListData} setPageNo={setPageNo} totalCount={totalCount} setSearchQuery={setSearchQuery} updateData={init} /> : <AddVehicles formSubmited={() => { setTogglePage(0); init() }} />}
    </Box>
  );
}
