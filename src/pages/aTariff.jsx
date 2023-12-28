import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import StyledTab from "../ui/styledTab";
import Personal from "../components/tariff/assignTariff/personal";
import Location from "../components/tariff/assignTariff/location";
export default function ATariff() {
  const [togglePage, setTogglePage] = useState(0);

  const buttonChanged = (e) => {
    console.log(e);
    setTogglePage(e.index);
  };
  return (
    <Box>
      <Stack direction={"row"} sx={{ backgroundColor: "secondary.main" }}>
        <StyledTab
          buttons={["Location", "Personal"]}
          onChanged={buttonChanged}
        />
      </Stack>
      {togglePage === 0 ? <Location /> : <Personal />}
    </Box>
  );
}
