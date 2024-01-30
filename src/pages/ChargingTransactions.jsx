import React, { useEffect, useState } from "react";
import AllChargingTransactions from "../components/chargingNetwork/chargingTransaction/AllChargingTransactions";
import { ChargingTransactionDummyData } from "../assets/json/ChargingTransactionData";
import { getAllOcppTransactionLogs } from "../services/ocppAPI";
export default function ChargingTransactions() {

  const [logs, setLogs] = useState([]);

  const init = () => {
    getAllOcppTransactionLogs().then((res) => {
      console.log(res.result);
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
      <AllChargingTransactions
        data={logs}
      />
    </div>
  );
}
