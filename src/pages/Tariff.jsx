import React from "react";
import { DummyData } from "../assets/json/ChargingTariffData.js";
import DashboardLayout from "../layout/dashboardLayout.jsx";
import ChargingTariff from "../components/tariff/chargingTariff/ChargingTariff.jsx";

export default function Tariff() {
  const headers = [
    "Name",
    "Service fee(INR)",
    "Created on",
    "Last updated",
    "Tax",
    "Status",
  ];

  return (
    <DashboardLayout>
      <ChargingTariff data={DummyData} headers={headers}/>
    </DashboardLayout>
  );
}
