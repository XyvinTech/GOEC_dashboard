import React from "react";
import AllChargingTransactions from "../components/chargingNetwork/chargingTransaction/AllChargingTransactions";
import { ChargingTransactionDummyData } from "../assets/json/ChargingTransactionData";
export default function ChargingTransactions() {
  return (
    <div>
      <AllChargingTransactions
        ChargeStationData={ChargingTransactionDummyData}
      />
    </div>
  );
}
