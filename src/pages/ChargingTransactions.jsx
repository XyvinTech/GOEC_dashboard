import React, { useEffect, useState } from "react";
import AllChargingTransactions from "../components/chargingNetwork/chargingTransaction/AllChargingTransactions";
import { ChargingTransactionDummyData } from "../assets/json/ChargingTransactionData";
import { getAllOcppTransactionLogs } from "../services/ocppAPI";
export default function ChargingTransactions() {

  const [logs, setLogs] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [totalCount, setTotalCount] = useState();

  const init = (filter = {pageNo}) => {
    getAllOcppTransactionLogs(filter).then((res) => {
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
      <AllChargingTransactions
        data={logs}
        updateData={init}
        setPageNo={setPageNo} 
        totalCount={totalCount}
      />
    </div>
  );
}
