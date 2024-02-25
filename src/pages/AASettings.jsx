import { Box } from "@mui/material";
import { DummyData } from "../assets/json/AdminActivityData";
import AdminActivity from "../components/settings/adminActivity/adminActivity";

function AASettings() {
  const tableHeader = [
    "Admin Name",
    "Role",
    "Session start time",
    "Session Finish time",
    "Session Device",
    "Session IP",
  ];




  return (
    <Box>
      <AdminActivity headers={tableHeader} data={DummyData} />
    </Box>
  );
}

export default AASettings;
