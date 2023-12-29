import React from "react";
import { Box, Typography, Stack } from "@mui/material";
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
      <Box container spacing={2} py={2} px={6}>
        <Stack direction={"row"} spacing={2}>
          <Typography
            sx={{ color: "secondary.contrastText", fontWeight: "700" }}
          >
            Connectors
          </Typography>
        </Stack>
      </Box>
      <StyledDivider />


        <Stack
          direction={"row"}
          spacing={5}
          sx={{ alignItems: "center", justifyContent: "center",py:2,px:6 }}
        >
          <Stack direction={"column"}
            sx={{ backgroundColor: "#2B2930", borderRadius: "4px" }}
          >
            <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
              <Qr_evplug />
            </Box>
            <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
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
                px: 8
              }}
            >
              <Mdi_unlocked />
              Unlock
            </Box>
          </Stack>

          <Stack direction={"column"}
            sx={{ backgroundColor: "#2B2930", borderRadius: "4px" }}
          >
            <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
              <Qr_evplug />
            </Box>
            <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
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
                px: 8
              }}
            >
              <Mdi_unlocked />
              Unlock
            </Box>
          </Stack>

        </Stack>



    </Box>
  );
}
