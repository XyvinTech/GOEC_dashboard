import styled from "styled-components";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import InputField from "../../../ui/styledInput";
import StyledSelectField from "../../../ui/styledSelectField";
import StyledSwitch from "../../../ui/styledSwitch";
import { ReactComponent as Calendar } from "../../../assets/icons/calendar.svg";
import { ReactComponent as Calendar_month } from "../../../assets/icons/calendar_month.svg";
import { ReactComponent as Close } from "../../../assets/icons/close-icon-large.svg";
import { useForm, Controller } from "react-hook-form";
import StyledInput from "../../../ui/styledInput";
import CalendarInput from "../../../ui/CalendarInput";
import StyledButton from "../../../ui/styledButton";
// StyledTable component
const AddChargePoint = ({ headers, data, onClose }) => {
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    clearErrors,
  } = useForm({
    defaultValues: {
      published: false, // Set the default value for "activate"
    },
  });
  const onSubmit = (data) => {
    // Handle form submission with data
    console.log("Form data submitted:", data);
    // Close your form or perform other actions
  };

  const handleChange = (event) => {
    setValue("published", event.target.checked);
  };


  const handleDateChangeInParent = (date) => {
    setValue("commissionedDate", date); // Assuming you have 'expiryDate' in your form state
    clearErrors("commissionedDate");
    console.log(date);
  };
  const commissionedDate = watch("commissionedDate", ""); // Watching the value for 'expiryDate'

  // pagination

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box maxWidth="lg" p={2}>
        <Grid container spacing={2}>
          <Grid sx={{ marginBottom: 1, marginTop: 3 }} item xs={12} md={12}>
            <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
              <Typography
                sx={{ color: "secondary.contrastText", fontWeight: "700" }}
              >
                Add Chargepoint
              </Typography>
              {onClose && <Close onClick={() => { onClose() }} />}
            </Stack>
          </Grid>
        </Grid>

        <Typography
          sx={{
            marginBottom: 3,
            marginTop: 3,
            color: "primary.contrastText",
          }}
        >
          Location Name
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Controller
              name="locationName"
              control={control}
              render={({ field }) => (
                <>
                  <StyledSelectField
                    {...field}
                    placeholder="Select Location Name"
                  />
                  {errors.locationName && (
                    <span style={errorMessageStyle}>
                      {errors.locationName.message}
                    </span>
                  )}
                </>
              )}
              rules={{ required: "Location Name is required" }}
            />
          </Grid>
        </Grid>

        <Typography
          sx={{
            marginBottom: 3,
            marginTop: 3,
            color: "primary.contrastText",
          }}
        >
          Charge Point OEM
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Controller
              name="chargePointOEM"
              control={control}
              render={({ field }) => (
                <>
                  <StyledSelectField {...field} placeholder="DELTA" />
                  {errors.chargePointOEM && (
                    <span style={errorMessageStyle}>
                      {errors.chargePointOEM.message}
                    </span>
                  )}
                </>
              )}
              rules={{ required: "Charge Point OEM is required" }}
            />
          </Grid>
        </Grid>

        <Typography
          sx={{
            marginBottom: 3,
            marginTop: 3,
            color: "primary.contrastText",
          }}
        >
          Model Name
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Controller
              name="model"
              control={control}
              render={({ field }) => (
                <>
                  <StyledSelectField {...field} placeholder="FNFNF252727" />
                  {errors.model && (
                    <span style={errorMessageStyle}>
                      {errors.model.message}
                    </span>
                  )}
                </>
              )}
              rules={{ required: "Model is required" }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                marginBottom: 3,
                marginTop: 3,
                color: "primary.contrastText",
              }}
            >
              Charge point display name
            </Typography>

            <Stack direction="column">
              <Controller
                name="chargePointDisplayName"
                control={control}
                render={({ field }) => (
                  <>
                    <StyledInput {...field} placeholder={"GO1"} />
                    {errors.chargePointDisplayName && (
                      <span style={errorMessageStyle}>
                        {errors.chargePointDisplayName.message}
                      </span>
                    )}
                  </>
                )}
                rules={{ required: "Charge Point Display Name is required" }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                marginBottom: 3,
                marginTop: 3,
                color: "primary.contrastText",
              }}
            >
              CPID
            </Typography>
            <Stack direction="column">
              <Controller
                name="CPID"
                control={control}
                render={({ field }) => (
                  <>
                    <StyledInput {...field} placeholder="GO1" />
                    {errors.CPID && (
                      <span style={errorMessageStyle}>
                        {errors.CPID.message}
                      </span>
                    )}
                  </>
                )}
                rules={{ required: "CPID is required" }}
              />
            </Stack>
          </Grid>
        </Grid>

        <Typography
          sx={{
            marginBottom: 3,
            marginTop: 3,
            color: "primary.contrastText",
          }}
        >
          Authorisation key
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Controller
              name=" authorisationkey"
              control={control}
              render={({ field }) => (
                <>
                  <StyledInput {...field} placeholder="XXXXXXXXXXXX" />
                  {errors.authorisationkey && (
                    <span style={errorMessageStyle}>
                      {errors.authorisationkey.message}
                    </span>
                  )}
                </>
              )}
              rules={{ required: " Authorisation key is required" }}
            />
          </Grid>
        </Grid>

        <Typography
          sx={{
            marginBottom: 3,
            marginTop: 3,
            color: "primary.contrastText",
          }}
        >
          Serial number
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Controller
              name="serialNumber"
              control={control}
              render={({ field }) => (
                <>
                  <StyledInput {...field} placeholder="2DEFFG4345" />
                  {errors.serialNumber && (
                    <span style={errorMessageStyle}>
                      {errors.serialNumber.message}
                    </span>
                  )}
                </>
              )}
              rules={{ required: "Serial Number is required" }}
            />
          </Grid>
        </Grid>

        <Typography
          sx={{
            marginBottom: 3,
            marginTop: 3,
            color: "primary.contrastText",
          }}
        >
          Commissioned date
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Controller
              name="commissionedDate"
              control={control}
              render={({ field }) => (
                <>
                  <StyledInput
                    {...field}
                    placeholder="Commissioned Date"
                    icon={<Calendar />}
                    iconright={
                      <CalendarInput
                        onDateChange={handleDateChangeInParent}
                      />
                    }
                    value={commissionedDate}
                    readOnly
                  />
                  {errors.commissionedDate && (
                    <span style={errorMessageStyle}>
                      {errors.commissionedDate.message}
                    </span>
                  )}
                </>
              )}
              rules={{ required: "Commissioned Date is required" }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid sx={{ marginBottom: 1, marginTop: 3 }} item xs={12} md={12}>
            <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
              <Typography sx={{ color: "primary.contrastText" }}>
                Published
              </Typography>

              <Controller
                name="published"
                control={control}
                render={({ field }) => (
                  <StyledSwitch
                    {...field}
                    onChange={(e) => {
                      handleChange(e);
                      // Additional logic if needed
                    }}
                    defaultChecked={field.value}
                  // Adding 'required' attribute
                  />
                )}
              />

            </Stack>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Stack
              item
              xs={12}
              md={12}
              direction={"row-reverse"}
              // sx={{ flexDirection: 'row-reverse' }}
              spacing={2}
              alignItems={"center"}
              sx={{ mt: 2 }}
            >

              <StyledButton variant={"primary"} width="200" type="submit">
                {" "}
                Save{" "}
              </StyledButton>

              <StyledButton variant={"secondary"} width="160">
                {" "}
                Cancel{" "}
              </StyledButton>



            </Stack>
          </Grid>
        </Grid>
      </Box>
    </form>
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

const errorMessageStyle = {
  color: "red",
  // margin: '1px 0',
};
