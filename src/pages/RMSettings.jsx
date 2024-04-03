import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { DummyData } from "../assets/json/RoleManagementData";
import RoleManagement from "../components/settings/roleManagement/roleManagement";
import { getRoles } from "../services/userApi";
import { tableHeaderReplace } from "../utils/tableHeaderReplace";

function RMSettings() {
  let [roles, setRoles] = useState([]);
  const [isChange, setIsChange] = useState(false)
  const [pageNo, setPageNo] = useState(1);
  const [totalCount, setTotalCount] = useState(1);

  const init = async (filter={pageNo}) => {
    let data = await getRoles(filter);

    setRoles(data.result);
    setTotalCount(data.totalCount);
  };

  useEffect(() => {
    init();
  }, [isChange, pageNo]);

  const tableHeader = [
    "Role name",
    "Created on",
    "Access Type",
    "Role Description",
    "Status",
  ];

  const AllRoleData = tableHeaderReplace(
    roles,
    ["roleName", "createdOn", "accessType", "description", "status"],
    tableHeader
  );

  return (
    <Box>
      <RoleManagement headers={tableHeader} setPageNo={setPageNo} totalCount={totalCount} data={AllRoleData} setIsChange={setIsChange} isChange={isChange}/>
    </Box>
  );
}

export default RMSettings;
