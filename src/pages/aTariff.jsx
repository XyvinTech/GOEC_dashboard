import { Box, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import StyledTab from "../ui/styledTab";
import Personal from "../components/tariff/assignTariff/personal";
import Location from "../components/tariff/assignTariff/location";
import { getChargingStationList } from "../services/stationAPI";
export default function ATariff() {
  const [togglePage, setTogglePage] = useState(0);
  const [locationList, setLocationList] = useState([])

  const buttonChanged = (e) => {
    setTogglePage(e.index);
  };

  const getLocation = () => {
    getChargingStationList().then((res) => {
      if (res.status) {
        setLocationList(res.result.map((dt)=>({label:dt.name,value:dt._id})))
      }
    })
  }

  useEffect(() => {
    getLocation();
  }, [])

  return (
    <Box>
      <Stack direction={"row"} sx={{ backgroundColor: "secondary.main" }}>
        <StyledTab
          buttons={["Location", "Personal"]}
          onChanged={buttonChanged}
        />
      </Stack>
      {togglePage === 0 ? <Location location={locationList} /> : <Personal location={locationList} />}
    </Box>
  );
}
