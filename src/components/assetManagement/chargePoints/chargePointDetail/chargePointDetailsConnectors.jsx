import React from "react";
import { Box, Typography, Stack, Grid } from "@mui/material";
import StyledDivider from "../../../../ui/styledDivider";
import { ReactComponent as Mdi_evplugchademo } from "../../../../assets/icons/mdi_ev-plug-chademo.svg";
import { ReactComponent as Qr_evplug } from "../../../../assets/icons/material-symbols_qr-code.svg";
import { ReactComponent as AvailableCHAdeMO } from "../../../../assets/icons/CHAdeMO/Property1=Available.svg";
import { ReactComponent as Mdi_unlocked } from "../../../../assets/icons/mdi_unlocked.svg"
export default function ChargePointDetailsConnectors() {
  return (
    <Box

      sx={{ backgroundColor: "secondary.main", borderRadius: "4px" }}
    >
      <Box container spacing={2} px={6}>
        <Stack direction={"row"} spacing={2} pt={2}>
          <Typography
            sx={{ color: "secondary.contrastText", fontWeight: "700" }}
          >
            Connectors
          </Typography>
        </Stack>
      </Box>
      <StyledDivider />


      <Grid container spacing={3}
        sx={{ alignItems: "center", justifyContent: "center", py: 2,px:2 }}
      >
        <Grid item xs={6}>
          <Stack direction={"column"}
            sx={{ backgroundColor: "#2B2930", borderRadius: "4px", justifyContent: 'flex-end' }}
          >
            <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
              <Qr_evplug />
            </Box>
            <Box sx={{display:'flex', justifyContent: 'center' }}>
              <AvailableCHAdeMO />
            </Box>
            <Box m={1} p={1} mt={3}
              sx={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                backgroundColor: "#4A4458",
                borderRadius: "4px"
              }}
            >
              <Mdi_unlocked />
              Unlock
            </Box>
          </Stack>
        </Grid>

        <Grid item xs={6}>
          <Stack direction={"column"}
            sx={{ backgroundColor: "#2B2930", borderRadius: "4px", justifyContent: 'flex-end' }}
          >
            <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
              <Qr_evplug />
            </Box>
            <Box sx={{display:'flex', justifyContent: 'center' }}>
              <AvailableCHAdeMO />
            </Box>
            <Box m={1} p={1} mt={3}
              sx={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                backgroundColor: "#4A4458",
                borderRadius: "4px"
              }}
            >
              <Mdi_unlocked />
              Unlock
            </Box>
          </Stack>
        </Grid>

      </Grid>



    </Box>
  );
}
