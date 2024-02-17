import React, { useEffect, useState } from "react";

import MapContainer from "../components/dashboard/liveStatus/MapContainer";
import { Box, IconButton, Stack } from "@mui/material";
import { Map, TableRowsRounded } from "@mui/icons-material";
import TableContainer from "../components/dashboard/liveStatus/tableContainer";
import LastSynced from "../layout/LastSynced";
import { updateChargingStationByList } from "../services/stationAPI";



export default function LiveStatus() {
  const [mapViewActive, setMapView] = useState(true)
    const [chargingStations, setChargingStations] = useState([]);


    useEffect(() => {
      init();
    }, []);

    const init = ()=>[
      updateChargingStationByList({
        "latitude":" 10.0136039",
         "longitude":"76.3117538"
     }).then((res)=>{
        if (res.status) {
          console.log(res.result);
          setChargingStations(res.result)
        }
      })
    ]
  const iconClickHandle = () => {
    setMapView(!mapViewActive)
  }

  return (
    <><LastSynced heading={'Live Status'} reloadHandle={init} /><Box sx={{ p: 2 }}>
      <Stack justifyContent={"end"} direction={"row"} spacing={2} mb={2}>
        <IconButton onClick={iconClickHandle} sx={{ border: '1px solid #fff6', borderRadius: '4px', backgroundColor: mapViewActive && 'secondary.button' }}>
          <Map sx={{ color: mapViewActive && '#fff' }} />
        </IconButton>
        <IconButton onClick={iconClickHandle} sx={{ border: '1px solid #fff6', borderRadius: '4px', backgroundColor: !mapViewActive && 'secondary.button' }}>
          <TableRowsRounded sx={{ color: !mapViewActive && '#fff' }} />
        </IconButton>
      </Stack>
      {mapViewActive ? <MapContainer chargingStations={chargingStations} /> :
        <TableContainer data={chargingStations} />}
    </Box></>
  );
}
