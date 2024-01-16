import { Box, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import StyledTab from "../ui/styledTab";
import OEM from "../components/dataManagement/manufacturers/OEM";
import Vehicles from "../components/dataManagement/manufacturers/Vehicle";

import { getOem } from "../services/evMachineAPI";
import { getBrand } from "../services/vehicleAPI";

export default function Manufactures() {
  const [togglePage, setTogglePage] = useState(0);
  const [oemListData, setOemListData] = useState([]);
  const [brandListData, setBrandListData] = useState([]);

  const init = () => {
    getOem().then((res) => {
      if (res.status) {
        setOemListData(res.result);
      }
    });
  };

  const init2 = () => {
    getBrand().then((res) => {
      if (res.status) {
        setBrandListData(res.result)
      }
    })
  };
  useEffect(() => {
    init();
    init2();
  }, []);

  const buttonChanged = (e) => {
    console.log(e);
    setTogglePage(e.index);
  };
  return (
    <Box>
      <Stack direction={"row"} sx={{ backgroundColor: "secondary.main" }}>
        <StyledTab buttons={["OEM", "Brand"]} onChanged={buttonChanged} />
      </Stack>
      {togglePage === 0 ? <OEM data={oemListData} /> : <Vehicles data={brandListData} />}
    </Box>
  );
}
