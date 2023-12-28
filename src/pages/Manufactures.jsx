import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import StyledTab from "../ui/styledTab";

import OEM from "../components/dataManagement/manufacturers/OEM";
import Vehicles from "../components/dataManagement/manufacturers/Vehicle";
export default function Manufactures() {
  const [togglePage, setTogglePage] = useState(0);

  const buttonChanged = (e) => {
    console.log(e);
    setTogglePage(e.index);
  };
  return (
    <Box>
      <Stack direction={"row"} sx={{ backgroundColor: "secondary.main" }}>
        <StyledTab buttons={["OEM", "Vehicles"]} onChanged={buttonChanged} />
      </Stack>
      {togglePage === 0 ? <OEM /> : <Vehicles />}
    </Box>
  );
}
