import React, { useEffect, useState } from "react";
import AllChargerLogs from "../components/chargingNetwork/chargerLogs/AllChargerLogs";
import { getAllOcppLogs } from "../services/ocppAPI";

export default function ChargerLogs() {
  const [logs, setLogs] = useState([]);
  const [allLogs, setAllLogs] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [totalCount, setTotalCount] = useState();

  const init = (filter = {}) => {
    getAllOcppLogs(filter, pageNo).then((res) => {
      if (res) {
        setLogs(res.result);
        setTotalCount(res.totalCount);
      }
    });
  };

  const get = (filter = {}) => {
    getAllOcppLogs(filter).then((res) => {
      if (res) {
        setAllLogs(res.result);
      }
    });
  };

  useEffect(() => {
    init();
    get();
  }, [pageNo]);

  return (
    <div>
      <AllChargerLogs data={logs} allLogs={allLogs} updateData={init} setPageNo={setPageNo} pageNo={pageNo} totalCount={totalCount}/>
    </div>
  );
}
