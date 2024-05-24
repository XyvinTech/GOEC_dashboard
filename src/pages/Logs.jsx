import React, { useEffect, useState } from "react";
import AllChargerLogs from "../components/chargingNetwork/chargerLogs/AllChargerLogs";
import AllLogs from "../components/logs/AllLogs";
import { getServerLogs } from "../services/logsApi";

export default function Logs() {
  const [logs, setLogs] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [totalCount, setTotalCount] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const init = (filter = { pageNo }) => {
    if (searchQuery) {
      filter.searchQuery = searchQuery;
    }
    getServerLogs(filter).then((res) => {
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
      <AllLogs
        data={logs}
        updateData={init}
        setPageNo={setPageNo}
        totalCount={totalCount}
        setSearchQuery={setSearchQuery}
      />
    </div>
  );
}
