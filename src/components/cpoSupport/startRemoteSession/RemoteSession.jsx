import { Container, Grid, Typography, Box } from "@mui/material";
import React from "react";
import InputField from "../../../ui/styledInput";
import StyledSelectField from "../../../ui/styledSelectField";
import StyledButton from "../../../ui/styledButton";
import StyledPhoneNumber from "../../../ui/StyledPhoneNumber";
import LastSynced from "../../../layout/LastSynced";
import StyledDivider from "../../../ui/styledDivider";
import { ReactComponent as SearchButtonIcon } from "../../../assets/icons/searchGlass.svg";

export default function RemoteSession( {handleSubmit}) {
  const handlePhoneNumberChange = (e) => {
    console.log(e.target.value);
  };

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
            <Box sx={{ backgroundColor: "#1C1D22", padding: 2, margin: 2 }}>
              <Typography sx={typoLabel}>User Name</Typography>
              <InputField placeholder={"Anish Vikende"} />
              <Typography sx={typoLabel}>Location</Typography>
              <StyledSelectField placeholder={"Select Location"} />
              <Typography sx={typoLabel}>CPID</Typography>
              <StyledSelectField placeholder={"Select Chargepoint"} />

              <Typography sx={typoLabel}>Connector ID</Typography>
              <StyledSelectField placeholder={"Select Connector"} />
              <Typography sx={typoLabel}>Session Mode</Typography>
              <StyledSelectField placeholder={"Select Session Mode"} />
              <Typography sx={typoLabel}>Value</Typography>
              <Grid container spacing={2} item xs={12} md={12}>
                <Grid item xs={12} md={9}>
                  <InputField placeholder={"Enter Value"} />
                </Grid>
                <Grid item xs={12} md={3} sx={{ px: 1 }}>
                  <StyledButton variant="primary" width="100" height="50" onClick={handleSubmit}>
                    Start
                  </StyledButton>
                </Grid>
              </Grid>
            </Box>
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
