import React, { useEffect, useState } from "react";
import AllChargerLogs from "../components/chargingNetwork/chargerLogs/AllChargerLogs";
import { getAllOcppLogs } from "../services/ocppAPI";

export default function ChargerLogs() {
  const [logs, setLogs] = useState([]);

  const init = () => {
    getAllOcppLogs().then((res) => {
      console.log('test',res.result);
      if (res) {
        setLogs(res.result);
      }
    });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div>
      <AllChargerLogs data={logs} />
    </div>
  );
}
