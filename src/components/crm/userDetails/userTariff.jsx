import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import LastSynced from "../../../layout/LastSynced";
import TariffCard from "./userTariff/tariffCard";
import AssignTariff from "./userTariff/assignTariff";
import { useLocation } from "react-router-dom";
import { userchargingTariff } from "../../../services/userApi";

const tariffData = [
  {
    tarrifName: "Default",
    Location: "Oberon Mall",
    CPID: "GOEC1",
    Value: 15,
    Tax: "GST Kerala",
    ServiceFee: "-",
  },
  {
    tarrifName: "Default",
    Location: "Oberon Mall",
    CPID: "GOEC1",
    Value: 15,
    Tax: "GST Kerala",
    ServiceFee: "-",
  },
  {
    tarrifName: "Default",
    Location: "Oberon Mall",
    CPID: "GOEC1",
    Value: 15,
    Tax: "GST Kerala",
    ServiceFee: "-",
  },
  {
    tarrifName: "Default",
    Location: "Oberon Mall",
    CPID: "GOEC1",
    Value: 15,
    Tax: "GST Kerala",
    ServiceFee: "-",
  },
];

export default function UserTariff() {
  const [open, setOpen] = useState(false);
  const { state } = useLocation();
  const [tariff, setTariff] = useState();

  const getData = async () => {
    const res = await userchargingTariff(state);
    setTariff(res.result);
  };

  useEffect(() => {
    getData();
  }, [state]);
  return (
    <Box>
      <AssignTariff
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      />
      <LastSynced
        heading={"Tarrif"}
        showButton={true}
        handleClick={() => {
          setOpen(true);
        }}
      />
      <Grid container sx={{ p: { xs: 2, md: 4 }, justifyContent:"center" }} spacing={2}>
        <TariffCard data={tariff} />
      </Grid>
    </Box>
  );
}
