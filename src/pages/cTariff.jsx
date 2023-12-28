import React from "react";
import { Box } from "@mui/material";
import { DummyData } from "../assets/json/ChargingTariffData.js";
import ChargingTariff from "../components/tariff/chargingTariff/ChargingTariff.jsx";

export default function cTariff() {
  const headers = [
    "Name",
    "Service fee(INR)",
    "Created on",
    "Last updated",
    "Tax",
    "Status",
  ];

  return (
    <Box>
      <ChargingTariff data={DummyData} headers={headers} />
    </Box>
  );
}
