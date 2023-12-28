import React from "react";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import StyledDivider from "../../../ui/styledDivider";
import { ReactComponent as Mdi_evplugchademo } from "../../../assets/icons/mdi_ev-plug-chademo.svg";
import { ReactComponent as Qr_evplug } from "../../../assets/icons/material-symbols_qr-code.svg";
import { ReactComponent as AvailableCHAdeMO } from "../../../assets/icons/CHAdeMO/Property1=Available.svg";
import { ReactComponent as Mdi_unlocked} from "../../../assets/icons/mdi_unlocked.svg"
export default function ChargeStationDetailsConnectors() {
  return (
    <Box
      py={2}
      px={3}
      sx={{ backgroundColor: "secondary.main", borderRadius: "4px" }}
    >
      <Grid pt={2} container spacing={2}>
        <Grid item xs={12} md={12}>
          <Stack direction={"row"} spacing={2}>
            <Typography
              sx={{ color: "secondary.contrastText", fontWeight: "700" }}
            >
              Connectors
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <StyledDivider />

     
        <Grid pt={2} container>
          <Grid item xs={12}>
            <Stack
              direction={"row"}
              spacing={2}
              sx={{ alignItems: "center", justifyContent: "center" }}
            >
              <Stack direction={"column"}
                sx={{ backgroundColor: "#2B2930", borderRadius: "4px" }}
              >
                <Box sx={{ display: "flex", justifyContent: "flex-end",p:1 }}>
                  <Qr_evplug />
                </Box>
                <Stack sx={{justifyContent:"center",alignItems:"center"}}>
                <AvailableCHAdeMO />
                </Stack>

                <Box
                  m={1}
                  mt={3}
                  p={1}
                  sx={{
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    backgroundColor: "#4A4458",
                    borderRadius: "4px",
                    width: "150px",
                  }}
                >
                    <Mdi_unlocked/>
                  Unlock
                </Box>
              </Stack>









              <Stack direction={"column"}
                sx={{ backgroundColor: "#2B2930", borderRadius: "4px" }}
              >
                <Box sx={{ display: "flex", justifyContent: "flex-end",p:1 }}>
                  <Qr_evplug />
                </Box>
                <Stack sx={{justifyContent:"center",alignItems:"center"}}>
                <AvailableCHAdeMO />
                </Stack>

                <Box
                  m={1}
                  p={1}
                  mt={3}
                  sx={{
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    backgroundColor: "#4A4458",
                    borderRadius: "4px",
                    width: "150px",
                  }}
                >
                    <Mdi_unlocked/>
                  Unlock
                </Box>
              </Stack>
              
            </Stack>
          </Grid>
        </Grid>
  


    </Box>
  );
}
