import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import StyledTab from "../ui/styledTab";
import About from "../components/help/About";

function Help() {
    const [togglePage, setTogglePage] = useState(0);
  
    const buttonChanged = (e) => {
      console.log(e);
      setTogglePage(e.index);
    };
  return (
    <Box>
      <Stack direction={"row"} sx={{ backgroundColor: "secondary.main" }}>
        <StyledTab
          buttons={["About Us", "Raise Ticket"]}
          onChanged={buttonChanged}
        />
      </Stack>
      {togglePage === 0 ? <About /> : ""}
    </Box>
  );
}

export default Help;
