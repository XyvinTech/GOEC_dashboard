import React, { useEffect, useState } from "react";
import AllChargingTransactions from "../components/chargingNetwork/chargingTransaction/AllChargingTransactions";
import { ChargingTransactionDummyData } from "../assets/json/ChargingTransactionData";
import { getAllOcppTransactionLogs } from "../services/ocppAPI";
export default function ChargingTransactions() {

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
    getAllOcppTransactionLogs(filter).then((res) => {
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
      <AllChargingTransactions
        data={logs}
        updateData={init}
        setPageNo={setPageNo} 
        totalCount={totalCount}
        setSearchQuery={setSearchQuery}
      />
    </div>
  );
}
