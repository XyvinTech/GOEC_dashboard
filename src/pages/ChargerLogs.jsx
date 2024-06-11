import React, { useEffect, useState } from "react";
import AllChargerLogs from "../components/chargingNetwork/chargerLogs/AllChargerLogs";
import { getAllOcppLogs } from "../services/ocppAPI";

export default function ChargerLogs() {
  const [logs, setLogs] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [totalCount, setTotalCount] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const init = (filter = {pageNo}) => {
    const filterStore = localStorage.getItem('filter');
    if(filterStore){
      const cfilter = JSON.parse(filterStore);
      cfilter.pageNo = filter.pageNo;
      filter = {...cfilter};
    }
    if(searchQuery){
      filter.searchQuery = searchQuery;
    }
    getAllOcppLogs(filter).then((res) => {
      if (res) {
        setLogs(res.result);
        setTotalCount(res.totalCount);
      }
    });
  };

  useEffect(() => {
    init();
  }, [pageNo, searchQuery]);


  return (
    <div>
      <AllChargerLogs data={logs} updateData={init} setPageNo={setPageNo} totalCount={totalCount} setSearchQuery={setSearchQuery} />
    </div>
  );
}
