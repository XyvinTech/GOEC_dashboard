import React from "react";
import { Box } from "@mui/material";
import AdminManangement from "../components/settings/adminManagement/adminManangement";
import { DummyData } from "../assets/json/AdminManagementData";

function AMSettings() {
  const headers = ["Name", "Role", "Email", "Phone", "Designation", "Status"];
  return (
    <Box>
      <AdminManangement headers={headers} data={DummyData} />
    </Box>
  );
}

export default AMSettings;
