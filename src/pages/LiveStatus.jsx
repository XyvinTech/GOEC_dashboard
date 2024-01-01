import React, { useState, useEffect } from "react";

import MapContainer from "../components/dashboard/liveStatus/MapContainer";
// import { getChargingStationList } from "../services/stationAPI";
import { ChargeStationData } from "../assets/json/chargestations";



export default function LiveStatus() {
//   const [chargingStations, setChargingStations] = useState([]);


//   useEffect(() => {
//     const fetchEvMachines = async () => {
//       try {
//         const data = await getChargingStationList();
//         setChargingStations(data);
//         setLoading(false);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     };

//     fetchEvMachines();
//   }, []);


  return (
    <div>
      {/* <MapContainer chargingStations={ChargeStationData}/> */}
      hi
    </div>
  );
}
