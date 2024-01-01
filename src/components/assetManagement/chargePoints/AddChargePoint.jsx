import styled from "styled-components";
import {
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import InputField from "../../../ui/styledInput";
import StyledSelectField from "../../../ui/styledSelectField";

import StyledSwitch from "../../../ui/styledSwitch";

import { ReactComponent as Calendar_month } from "../../../assets/icons/calendar_month.svg";

import { ReactComponent as Close } from "../../../assets/icons/close-icon-large.svg";
// StyledTable component
const AddChargePoint = ({ headers, data }) => {
  const [active, setActive] = useState(false);

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
    <TableContainer>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid sx={{ marginBottom: 1, marginTop: 3 }} item xs={12} md={12}>
            <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
              <Typography
                sx={{ color: "secondary.contrastText", fontWeight: "700" }}
              >
                Add Chargepoint
              </Typography>
              <Close />
            </Stack>
          </Grid>
        </Grid>


        <Typography sx={{ marginBottom: 3, marginTop: 3, color:'primary.contrastText' }}>
          Location Name
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <StyledSelectField placeholder={"Select Location Name"} />
          </Grid>
        </Grid>


        <Typography sx={{ marginBottom: 3, marginTop: 3 , color:'primary.contrastText'}}>
          Charge Point OEM
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <StyledSelectField placeholder={"DELTA"} />
          </Grid>
        </Grid>

        <Typography sx={{ marginBottom: 3, marginTop: 3, color:'primary.contrastText' }}>
          Model Name
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <StyledSelectField placeholder={"FNFNF252727"} />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography sx={{ marginBottom: 3, marginTop: 3, color:'primary.contrastText' }}>
              Charge point display name
            </Typography>

            <Stack direction="column">
              <InputField placeholder={"GO1"} />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography sx={{ marginBottom: 3, marginTop: 3, color:'primary.contrastText' }}>CPID</Typography>
            <Stack direction="column">
              <InputField placeholder={"GO1"} />
            </Stack>
          </Grid>
        </Grid>
       
        <Typography sx={{ marginBottom: 3, marginTop: 3, color:'primary.contrastText' }}>
          Authorisation key
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <InputField placeholder={"XXXXXXXXXXXX"} />
          </Grid>
        </Grid>

        <Typography sx={{ marginBottom: 3, marginTop: 3, color:'primary.contrastText' }}>
          Serial number
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <InputField placeholder={"2DEFFG4345"} />
          </Grid>
        </Grid>

        <Typography sx={{ marginBottom: 3, marginTop: 3, color:'primary.contrastText' }}>
          Commissioned date
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <InputField
              iconright={<Calendar_month />}
              placeholder={"21-08-2023"}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid sx={{ marginBottom: 1, marginTop: 3 }} item xs={12} md={12}>
            <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
              <Typography sx={{color:'primary.contrastText'}}>Published</Typography>
              <StyledSwitch />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </TableContainer>
  );
};

export default AddChargePoint;

//! STYLINGS

// Styled action cell

// Styled table container
export const TableContainer = styled.div`
  background: #27292f; // Dark background for the table
  overflow-x: auto; // Allows table to be scrollable horizontally
  border-radius: 8px; // Rounded corners
 
`;
