import React, { useEffect, useState } from "react";
import AllChargerLogs from "../components/chargingNetwork/chargerLogs/AllChargerLogs";
import { getAllOcppLogs } from "../services/ocppAPI";

export default function ChargerLogs() {
  const [logs, setLogs] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [totalCount, setTotalCount] = useState(1);

  const init = (filter = {pageNo}) => {
    getAllOcppLogs(filter).then((res) => {
      if (res) {
        setLogs(res.result);
        setTotalCount(res.totalCount);
      }
    });
  };

  useEffect(() => {
    init();
  }, [pageNo]);

  return (
    <div>
      <AllChargerLogs data={logs} updateData={init} setPageNo={setPageNo} totalCount={totalCount}/>
    </div>
  );
}
