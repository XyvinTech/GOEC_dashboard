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
import StyledInput from "../../../ui/styledInput";
import StyledButton from "../../../ui/styledButton";
import { Add } from "@mui/icons-material";
import ConnectorDetails from "./addEvcharger/connectorDetails";
// StyledTable component
export default function AddEvCharger() {
  const [connectorDetailOpen,setConnectorDetailOpen] = useState(false)
  return (
    <Container maxWidth="lg" sx={{ backgroundColor: 'secondary.main', p: 2, m: { md: 4 }, border: '1px solid #fff6', borderRadius: '4px' }}>
      <ConnectorDetails open={connectorDetailOpen} onClose={()=>{setConnectorDetailOpen(false)}}/>
      <Typography sx={{ marginBottom: 3, marginTop: 3, color: 'primary.contrastText' }}>
        Add Charger OEM
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <StyledSelectField placeholder={"Select Charger OEM"} />
        </Grid>
      </Grid>


      <Typography sx={{ marginBottom: 3, marginTop: 3, color: 'primary.contrastText' }}>
        Model Name
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <StyledInput placeholder={"Select Model Name"} />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ marginBottom: 3, marginTop: 3, color: 'primary.contrastText' }}>
            Output type
          </Typography>

          <Stack direction="column">
            <StyledSelectField placeholder={"Enter Output type"} />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography sx={{ marginBottom: 3, marginTop: 3, color: 'primary.contrastText' }}>OCPP version</Typography>
          <Stack direction="column">
            <StyledSelectField placeholder={"1.6"} />
          </Stack>
        </Grid>
      </Grid>

      <Typography sx={{ marginBottom: 3, marginTop: 3, color: 'primary.contrastText' }}>
        Capacity(kW)
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <InputField />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography sx={{ marginBottom: 3, marginTop: 3, color: 'primary.contrastText' }}>
            Number of Ports
          </Typography>

          <Grid container direction={{ xs: "column", md: "row" }} spacing={2}>
            <Grid item xs={12} md={7}>
              <StyledSelectField placeholder={"Enter Output type"} />
            </Grid>
            <Grid item xs={12} md={5}>
              <StyledButton style={{ width: '100%' }} onClick={()=>{setConnectorDetailOpen(true)}}><Add /> Connector details</StyledButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Stack direction={"row"} sx={{ justifyContent: 'end' }} p={2} spacing={2}>
        <StyledButton style={{ width: '150px' }} variant={'secondary'}>Cancel</StyledButton>
        <StyledButton style={{ width: '200px' }} variant={'primary'}>Save</StyledButton>
      </Stack>
    </Container>
  );
};