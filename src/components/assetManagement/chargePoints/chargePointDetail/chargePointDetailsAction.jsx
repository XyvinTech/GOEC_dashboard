import React from "react";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import StyledDivider from "../../../../ui/styledDivider";

export default function ChargePointDetailsAction() {
  return (
    <Box sx={{ backgroundColor: "secondary.main", borderRadius: "4px" }}>
      <Stack pt={2} px={2} spacing={2}>
        <Typography
          sx={{ color: "secondary.contrastText", fontWeight: "700" }}
        >
          Actions
        </Typography>
      </Stack>
      <StyledDivider />

      <Stack sx={{ justifyContent: 'center',px:1,py:4,px:2 }} spacing={3}>
        <Box sx={{ backgroundColor: "#6C3333", borderRadius: "4px", justifyContent: "center", px: 3, py: 1 }} >
          <Typography
            sx={{ textAlign: 'center', color: "info.text", fontWeight: "500", fontSize: "14px" }}
          >
            Hard Reset
          </Typography>
        </Box>

        <Box sx={{ backgroundColor: "#885324", borderRadius: "4px", justifyContent: "center", px: 3, py: 1.5 }} >
          <Typography
            sx={{ textAlign: 'center', color: "info.text", fontWeight: "500", fontSize: "14px" }}
          >
            Soft Reset
          </Typography>
        </Box>

        <Box sx={{ backgroundColor: "#26426F", borderRadius: "4px", justifyContent: "center", px: 3, py: 1.5 }} >
          <Typography
            sx={{ textAlign: 'center', color: "info.text", fontWeight: "500", fontSize: "14px" }}
          >
            Clear Cache
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}
