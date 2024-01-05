import { Container, Grid, Typography, Box } from "@mui/material";
import React from "react";
import InputField from "../../../ui/styledInput";
import StyledSelectField from "../../../ui/styledSelectField";
import StyledButton from "../../../ui/styledButton";
import StyledPhoneNumber from "../../../ui/StyledPhoneNumber";
import LastSynced from "../../../layout/LastSynced";
import StyledDivider from "../../../ui/styledDivider";
import { ReactComponent as SearchButtonIcon } from "../../../assets/icons/searchGlass.svg";
import { useForm, Controller } from "react-hook-form";
export default function RemoteSession() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    clearErrors,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    clearErrors();
    reset();
  };

  const handlePhoneNumberChange = (value) => {
    console.log(value);
  };
  const cpid = [{ value: "GOEC117", label: "GOEC117" }];
  const connectorId = [{ value: "1", label: "1" }];
  const session = [{ value: "session", label: "session" }];
  const location = [{ value: "location", label: "location" }];
  return (
    <>
      <LastSynced heading="Start Remote Sessions" />
      <Container maxWidth="lg">
        <Grid item sm container spacing={6} sx={{ my: 2 }}>
          {/*First Section */}
          <Grid item xs={12} md={6}>
            <Box sx={{ backgroundColor: "#1C1D22", padding: 2, margin: 2 }}>
              <Typography
                sx={{
                  mt: 1,
                  mb: 1,
                  color: "var(--Grey, #B5B8C5)",
                  fontFeatureSettings: "'clig' off, 'liga' off",
                  fontFamily: "Inter",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "32px" /* 177.778% */,
                }}
              >
                Start Remote Session
              </Typography>
              <StyledDivider />
              <Typography sx={typoLabel}>Phone number</Typography>
              <Grid container spacing={2} item xs={12} md={12}>
                <Grid item xs={12} md={9}>
                  <StyledPhoneNumber
                    onChange={handlePhoneNumberChange}
                    placeholder="Enter Phone number"
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <StyledButton variant="primary" width="70" height="56">
                    <SearchButtonIcon />
                  </StyledButton>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          {/* Other Sections */}
          <Grid item xs={12} md={6} sx={{ marginTop: { xs: 2, sm: 0 } }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              {" "}
              <Box sx={{ backgroundColor: "#1C1D22", padding: 2, margin: 2 }}>
                <Typography sx={typoLabel}>User Name</Typography>
                <Controller
                  name="username"
                  control={control}
                  render={({ field }) => (
                    <>
                      <InputField placeholder={"Anish Vikende"} {...field} />
                      {errors.username && (
                        <span style={errorMessageStyle}>
                          {errors.username.message}
                        </span>
                      )}
                    </>
                  )}
                  rules={{ required: "User is required" }}
                />
                <Typography sx={typoLabel}>Location</Typography>
                <Controller
                  name="location"
                  control={control}
                  render={({ field }) => (
                    <>
                      <StyledSelectField
                        options={location}
                        placeholder={"Select Location"}
                        {...field}
                      />
                      {errors.location && (
                        <span style={errorMessageStyle}>
                          {errors.location.message}
                        </span>
                      )}
                    </>
                  )}
                  rules={{ required: "Location is required" }}
                />
                <Typography sx={typoLabel}>CPID</Typography>
                <Controller
                  name="cpid"
                  control={control}
                  render={({ field }) => (
                    <>
                      <StyledSelectField
                        options={cpid}
                        placeholder={"Select Chargepoint"}
                        {...field}
                      />
                      {errors.cpid && (
                        <span style={errorMessageStyle}>
                          {errors.cpid.message}
                        </span>
                      )}
                    </>
                  )}
                  rules={{ required: "CPID is required" }}
                />
                <Typography sx={typoLabel}>Connector ID</Typography>
                <Controller
                  name="connectorId"
                  control={control}
                  render={({ field }) => (
                    <>
                      <StyledSelectField
                        options={connectorId}
                        placeholder={"Select Connector"}
                        {...field}
                      />
                      {errors.connectorId && (
                        <span style={errorMessageStyle}>
                          {errors.connectorId.message}
                        </span>
                      )}
                    </>
                  )}
                  rules={{ required: "Connector ID is required" }}
                />
                <Typography sx={typoLabel}>Session Mode</Typography>

                <Controller
                  name="sessionMode"
                  control={control}
                  render={({ field }) => (
                    <>
                      <StyledSelectField
                        options={session}
                        placeholder={"Select Session Mode"}
                        {...field}
                      />
                      {errors.sessionMode && (
                        <span style={errorMessageStyle}>
                          {errors.sessionMode.message}
                        </span>
                      )}
                    </>
                  )}
                  rules={{ required: "Session Mode is required" }}
                />
                <Typography sx={typoLabel}>Value</Typography>

                <Grid container spacing={2} item xs={12} md={12}>
                  <Grid item xs={12} md={9}>
                    <Controller
                      name="value"
                      control={control}
                      render={({ field }) => (
                        <>
                          <InputField placeholder={"Enter Value"} {...field} />
                          {errors.value && (
                            <span style={errorMessageStyle}>
                              {errors.value.message}
                            </span>
                          )}
                        </>
                      )}
                      rules={{ required: "Value is required" }}
                    />
                  </Grid>
                  <Grid item xs={12} md={3} sx={{ px: 1 }}>
                    <StyledButton
                      variant="primary"
                      type="submit"
                      width="100"
                      height="50"
                    >
                      Start
                    </StyledButton>
                  </Grid>
                </Grid>
              </Box>
            </form>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

const typoLabel = {
  mt: 3,
  mb: 1,
  color: "var(--white, #F7F8FC)",
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontFamily: "Inter",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "16px",
};
const errorMessageStyle = {
  color: "red",
};
