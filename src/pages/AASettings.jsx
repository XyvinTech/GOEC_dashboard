import React from "react";
import { Box } from "@mui/material";
import { DummyData } from "../assets/json/AdminActivityData";
import AdminActivity from "../components/settings/adminActivity/adminActivity";

function AASettings() {
  const headers = [
    "Admin Name",
    "Role",
    "Session start time",
    "Session Finish time",
    "Session Device",
    "Session IP",
  ];
  return (
    <Box>
      <AdminActivity headers={headers} data={DummyData} />
    </Box>
  );
}

export default AASettings;
