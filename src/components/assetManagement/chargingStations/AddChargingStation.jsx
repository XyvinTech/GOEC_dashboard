import styled, { css } from "styled-components";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import InputField from "../../../ui/styledInput";
import StyledSelectField from "../../../ui/styledSelectField";
import StyledCheckButton from "../../../ui/styledCheckButton";
import StyledButton from "../../../ui/styledButton";
import FileUpload from "../../../utils/FileUpload";
import { ReactComponent as ClockOutline } from "../../../assets/icons/ClockOutline.svg";
import { ReactComponent as Calendar } from "../../../assets/icons/calendar.svg";
import { ReactComponent as Calendar_month } from "../../../assets/icons/calendar_month.svg";
import { ReactComponent as Phone } from "../../../assets/icons/Phone.svg";
import { ReactComponent as SMS } from "../../../assets/icons/sms.svg";

// StyledTable component
const AddChargingStation = ({ headers, data }) => {
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
        <Grid container sx={{ alignItems: "center" }}>
          <Grid item xs={12} md={8}>
            <Stack direction="column">
              <Typography sx={{ marginBottom: 3, marginTop: 3 }}>
                Location name
              </Typography>
              <InputField placeholder={"Enter Location Name"} />
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <FileUpload />
          </Grid>
        </Grid>

        {/* ----address */}
        <Typography sx={{ marginBottom: 3, marginTop: 3 }}>Address</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Stack direction="column">
              <InputField placeholder={"Enter Address"} />
            </Stack>
          </Grid>

          <Grid item xs={6} md={4}>
            <InputField placeholder={"Pincode"} />
          </Grid>

          <Grid item xs={6} md={4}>
            <StyledSelectField placeholder={"Country"} />
          </Grid>

          <Grid item xs={6} md={4}>
            <StyledSelectField placeholder={"State"} />
          </Grid>

          <Grid item xs={6} md={4}>
            <StyledSelectField placeholder={"City"} />
          </Grid>
        </Grid>

        {/* ----Map co-ordinates*/}

        <Typography sx={{ marginBottom: 3, marginTop: 3 }}>
          Map co-ordinates
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Stack direction="column">
              <InputField placeholder={"Longitude"} />
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <InputField placeholder={"Latitude"} />
          </Grid>
        </Grid>

        <Typography sx={{ marginBottom: 3, marginTop: 3 }}>
          Operating hours
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Stack direction="column">
              <InputField icon={<ClockOutline />} placeholder={"Start time"} />
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <InputField icon={<ClockOutline />} placeholder={"End time"} />
          </Grid>

          <Grid item xs={12} md={12}>
            <InputField
              icon={<Calendar />}
              iconright={<Calendar_month />}
              placeholder={"Commissioned Date"}
            />
          </Grid>
        </Grid>

        <Typography sx={{ marginBottom: 3, marginTop: 3 }}>
          Location Support
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <InputField
              placeholder={"Enter Location Support personal's name"}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack direction="column">
              <InputField icon={<Phone />} placeholder={"Enter Phone number"} />
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <InputField icon={<SMS />} placeholder={"Enter Email ID"} />
          </Grid>
        </Grid>

        

        <Typography sx={{ marginBottom: 3, marginTop: 3 }}>
          Amenities
        </Typography>
        <Grid container spacing={2}>
          {Amenities.map((Amenity) => {
            return (
              <Grid item xs={6} md={3}>
                <StyledCheckButton
                  active={active}
                  setActive={setActive}
                  color="gray"
                >
                  {Amenity}
                </StyledCheckButton>
              </Grid>
            );
          })}
        </Grid>

        <Typography sx={{ marginBottom: 3, marginTop: 3 }}>
          Business name
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <InputField placeholder={"Enter Business Name"} />
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack direction="column">
              <InputField icon={<Phone />} placeholder={"Enter Phone number"} />
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <InputField icon={<SMS />} placeholder={"Enter Email ID"} />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid  sx={{ marginBottom: 1, marginTop: 3 }} item xs={12} md={12}>
            <Stack direction={'row'} sx={{ justifyContent: 'space-between' }}>

            <Typography >
              Staff
            </Typography>
            <Switch  color="default" />
            </Stack>
          </Grid>
        </Grid>
        <Typography sx={{ marginBottom: 3, marginTop: 3 }}>Vendor</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <StyledSelectField placeholder={"Select Vendor"} />
          </Grid>
        </Grid>

        <Typography sx={{ marginBottom: 3, marginTop: 3 }}>Category</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <StyledSelectField placeholder={"Select category"} />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Stack item xs={12} md={12} direction={'row'}>
              <StyledButton variant={"primary"} width="200" mt="20" > Save </StyledButton>

              <StyledButton variant={"secondary"}  width="160" mt="20" > Cancel </StyledButton>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </TableContainer>
  );
};

export default AddChargingStation;

//! STYLINGS

// Styled action cell

// Styled table container
export const TableContainer = styled.div`
  background: #27292f; // Dark background for the table
  overflow-x: auto; // Allows table to be scrollable horizontally
  border-radius: 8px; // Rounded corners
  margin: 20px 0; // Margin for spacing, adjust as needed
`;