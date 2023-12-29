import React from "react";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import StyledDivider from "../../../../ui/styledDivider";

export default function ChargePointDetailsAction() {
  return (
    <Box py={2} px={5} sx={{ backgroundColor: "secondary.main", borderRadius: "4px" }}>
      <Stack pt={2} spacing={2}>
        <Typography
          sx={{ color: "secondary.contrastText", fontWeight: "700" }}
        >
          Actions
        </Typography>
      </Stack>
      <StyledDivider />

      <Stack sx={{ justifyContent: 'center', mt: 5,px:1 }} spacing={2}>
        <Box sx={{ backgroundColor: "#6C3333", borderRadius: "4px", justifyContent: "center", px: 10, py: 1.5 }} >
          <Typography
            sx={{ textAlign: 'center', color: "info.text", fontWeight: "500", fontSize: "16px" }}
          >
            Hard Reset
          </Typography>
        </Box>

        <Box sx={{ backgroundColor: "#885324", borderRadius: "4px", justifyContent: "center", px: 8, py: 1.5 }} >
          <Typography
            sx={{ textAlign: 'center', color: "info.text", fontWeight: "500", fontSize: "16px" }}
          >
            Soft Reset
          </Typography>
        </Box>

        <Box sx={{ backgroundColor: "#26426F", borderRadius: "4px", justifyContent: "center", px: 8, py: 1.5 }} >
          <Typography
            sx={{ textAlign: 'center', color: "info.text", fontWeight: "500", fontSize: "16px" }}
          >
            Clear Cache
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}
