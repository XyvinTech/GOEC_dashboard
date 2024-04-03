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
  const [pageNo, setPageNo] = useState(1);
  const [pageNo1, setPageNo1] = useState(1);
  const [totalCount, setTotalCount] = useState(1);
  const [totalCount1, setTotalCount1] = useState(1);

  const init = (filter = {pageNo}) => {
    getOem(filter).then((res) => {
      if (res.status) {
        setOemListData(res.result);
        setTotalCount(res.totalCount);
      }
    });
  };

  const init2 = (filter = {pageNo1}) => {
    getBrand(filter).then((res) => {
      if (res.status) {
        setBrandListData(res.result)
        setTotalCount1(res.totalCount);
      }
    })
  };
  useEffect(() => {
    init();
    init2();
  }, [pageNo, pageNo1]);

  const buttonChanged = (e) => {
    setTogglePage(e.index);
  };
  return (
    <Box>
      <Stack direction={"row"} sx={{ backgroundColor: "secondary.main" }}>
        <StyledTab buttons={["OEM", "Brand"]} onChanged={buttonChanged} />
      </Stack>
      {togglePage === 0 ? oemListData && <OEM data={oemListData} setPageNo={setPageNo} totalCount={totalCount} updateData={init} /> : brandListData && <Vehicles data={brandListData} setPageNo1={setPageNo1} totalCount1={totalCount1} updateData={init2} />}
    </Box>
  );
}
