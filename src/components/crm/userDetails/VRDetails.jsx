import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import LastSynced from "../../../layout/LastSynced";
import { useLocation } from "react-router-dom";
import { uservehicleDetails } from "../../../services/userApi";

const VRCard = ({ data }) => {
  return (
    <Box sx={{ backgroundColor: "#1D1B20", borderRadius: "24px", p: 3 }}>
      <Grid container padding={2} spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            src="https://imgd.aeplcdn.com/227x128/n/cw/ec/47051/compass-exterior-right-front-three-quarter-74.jpeg"
            style={{
              height: "100%",
              width: "100%",
              aspectRatio: "2/1",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack direction={"column"} sx={{ justifyContent: "center" }} spacing={1}>
            <Typography variant="body1" sx={{ color: "secondary.contrastText" }}>
              {data?.brand}
            </Typography>
            <Typography variant="h5">{data?.model}</Typography>
            <Stack direction={"row"} spacing={1}>
              <Typography variant="body1" sx={{ color: "secondary.contrastText" }}>
                Vehicle No:
              </Typography>
              <Typography variant="h6">{data?.evRegNumber}</Typography>
            </Stack>
            <Stack direction={"row"} spacing={1}>
              {data?.compactable_port?.map((res, i) => {
                return (
                  <Typography
                    key={i}
                    variant="inherit"
                    sx={{ backgroundColor: "#fff3", p: 1, borderRadius: "5px" }}
                  >
                    {res}
                  </Typography>
                );
              })}
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default function VRDetails() {
  const { state } = useLocation();
  const [VR, setVR] = useState();

  const getData = async () => {
    const res = await uservehicleDetails(state);
    setVR(res.result);
  };

  useEffect(() => {
    getData();
  }, [state]);
  return (
    <Box>
      <LastSynced heading={"VR Details"} />
      <Box sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} xl={4}>
            <VRCard data={VR} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
