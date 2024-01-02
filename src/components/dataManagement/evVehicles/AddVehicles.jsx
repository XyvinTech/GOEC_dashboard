import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import InputField from "../../../ui/styledInput";
import StyledSelectField from "../../../ui/styledSelectField";
import StyledButton from "../../../ui/styledButton";
import FileUpload from "../../../utils/FileUpload";
import LastSynced from "../../../layout/LastSynced";

// StyledTable component
export default function AddVehicles() {

  let Amenities = [
    "Mall",
    "Cafe",
    "Restaurant",
    "Restroom",
    "Waitingroom",
    "BAR",
  ];
  // pagination

  return (
    <Box>
      <LastSynced heading={'EV Vehicles'} />
      <Container maxWidth="md" sx={{ backgroundColor: 'secondary.main', p: 3, m: { md: 4 }, border: '1px solid #fff6', borderRadius: '4px' }}>
        <Grid container >
          <Grid item xs={12} sx={{ height: '250px' }}>
            <FileUpload />
          </Grid>
        </Grid>

        {/* ----Map co-ordinates*/}

        <Typography sx={{ marginBottom: 2, marginTop: 2 }}>
          Vehicle Manufacturer Name
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Stack direction="column">
              <StyledSelectField placeholder={"Enter Vehicle Manufacturer Name"} />
            </Stack>
          </Grid>
        </Grid>


        <Typography sx={{ marginBottom: 2, marginTop: 2 }}>
          Model Name
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Stack direction="column">
              <InputField placeholder={"Enter Model Name"} />
            </Stack>
          </Grid>
        </Grid>


        <Typography sx={{ marginBottom: 2, marginTop: 2 }}>
          Compatable ports
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Stack direction="column">
              <StyledSelectField placeholder={"Select ports"} />
            </Stack>
          </Grid>
        </Grid>


        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Stack item xs={12} md={12} direction={'row'} justifyContent={"end"} spacing={2} sx={{ mt: 2 }}>
              <StyledButton variant={"secondary"} width="150" > Cancel </StyledButton>
              <StyledButton variant={"primary"} width="180" > Save </StyledButton>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
