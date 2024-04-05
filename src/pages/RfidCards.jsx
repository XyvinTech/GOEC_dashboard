import { Box, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import StyledTab from "../ui/styledTab";
import AllRfidCards from '../components/tagManagement/Rfid/AllRfidCards';
import AssignRfid from '../components/tagManagement/Rfid/AssignRfid';
import { getRfidList } from '../services/rfidAPI';

const RfidCards = () => {
  const [togglePage, setTogglePage] = useState(0);
  const [rfidData,setRfidData] = useState([])
  const [pageNo, setPageNo] = useState(1);
  const [totalCount, setTotalCount] = useState(1);

  const init = (filter = {pageNo}) => {
    getRfidList(filter).then((res) => {
      setRfidData(res.result)
      setTotalCount(res.totalCount);
    })
  }

  useEffect(() => {
    init()
  }, [pageNo])


  const buttonChanged = (e) => {
    setTogglePage(e.index);
  };
  return (
    <Box>
      <Stack direction={"row"} sx={{ backgroundColor: "secondary.main" }}>
        <StyledTab
          buttons={["All RFID cards", "Assign RFID"]}
          onChanged={buttonChanged}
        />
      </Stack>
      {togglePage === 0 ? <AllRfidCards data={rfidData} setPageNo={setPageNo} totalCount={totalCount} updateData={init}/> : <AssignRfid />}
    </Box>
  )
}

export default RfidCards
