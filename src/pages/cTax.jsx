import React from "react";
import { Box } from "@mui/material";
import { DummyData } from "../assets/json/TaxData";
import Tax from "../components/tariff/tax/Tax";

export default function CTax() {
  const headers = [
    "Name",
    "Description",
    "Created on",
    "Status",
  ];

  return (
    <Box>
      <Tax data={DummyData} headers={headers} />
    </Box>
  );
}
