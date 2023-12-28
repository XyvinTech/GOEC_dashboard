import React from "react";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import { ReactComponent as Station } from "../../../assets/icons/station.svg";
import StyledDivider from "../../../ui/styledDivider";

export default function ChargeStationDetailsAction() {
  return (
    <Box py={2} px={3}  sx={{ backgroundColor: "secondary.main", borderRadius: "4px" }}>
      <Grid pt={2} container spacing={2}>
        <Grid item xs={12} md={12}>
          <Stack direction={"row"} spacing={2}>
          
            <Typography
              sx={{ color: "secondary.contrastText", fontWeight: "700" }}
            >
              Actions
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <StyledDivider />

      <Container  maxWidth="lg">
        <Grid  pt={2} container >
          <Grid item xs={12} >
            <Stack direction={"column"} spacing={2} >

         <Box sx={{backgroundColor:"#6C3333", borderRadius: "4px", justifyContent: "center"}} p={2}>
         <Typography
              sx={{ textAlign:'center',color: "info.text", fontWeight: "500", fontSize: "16px" }}
              >
              Hard Reset
            </Typography>
         </Box>

         <Box sx={{backgroundColor:"#885324", borderRadius: "4px", justifyContent: "center"}} p={2}>
         <Typography
              sx={{ textAlign:'center',color: "info.text", fontWeight: "500", fontSize: "16px" }}
              >
              Soft Reset
            </Typography>
         </Box>

         <Box sx={{backgroundColor:"#26426F", borderRadius: "4px", justifyContent: "center"}} p={2}>
         <Typography
              sx={{ textAlign:'center',color: "info.text", fontWeight: "500", fontSize: "16px" }}
              >
              Clear Cache
            </Typography>
         </Box>
                </Stack>
          </Grid>
        </Grid>

</Container>
      
      


     
    </Box>
  );
}
