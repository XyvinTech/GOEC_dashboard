import React, { useEffect, useState } from "react";

import { Box } from "@mui/material";
import AdminManangement from "../components/settings/adminManagement/adminManangement";
import { DummyData } from "../assets/json/AdminManagementData";
import { getAdmins } from "../services/userApi";
import { tableHeaderReplace } from "../utils/tableHeaderReplace";

function AMSettings() {
  let [admins, setAdmins] = useState([]);
  const [isChange, setIsChange] = useState(false)
  const tableHeader = ["Name", "Role", "Email", "Phone", "Designation", "Status"];

  const init = async () => {
    let data = await getAdmins();

    setAdmins(data.result);
  };

  useEffect(() => {
    init();
  }, [isChange]);

  const AllAdminData = tableHeaderReplace(
    admins,
    ["name", "role", "email", "phone", "designation", "status"],
    tableHeader
  );

  return (
    <Box>
      <AdminManangement headers={tableHeader} data={AllAdminData}  setIsChange={setIsChange} isChange={isChange}/>
    </Box>
  );
}

export default AMSettings;
