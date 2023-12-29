import React from "react";
import { Box } from "@mui/material";
import { DummyData } from "../assets/json/RoleManagementData";
import RoleManagement from "../components/settings/roleManagement/roleManagement";

function RMSettings() {
  const headers = [
    "Role name",
    "Created on",
    "Access Type",
    "Role Description",
    "Status",
  ];
  return (
    <Box>
      <RoleManagement headers={headers} data={DummyData} />
    </Box>
  );
}

export default RMSettings;
