import styled from "styled-components";
import { Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import InputField from "../../../ui/styledInput";
import StyledSelectField from "../../../ui/styledSelectField";
import StyledButton from "../../../ui/styledButton";
import StyledPhoneNumber from "../../../ui/StyledPhoneNumber";
import LastSynced from "../../../layout/LastSynced";
import StyledDivider from "../../../ui/styledDivider";
import { ReactComponent as SearchButtonIcon } from "../../../assets/icons/searchGlass.svg";
export default function RemoteSession() {
  const handlePhoneNumberChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <LastSynced heading="Start Remote Sessions" />
      <TableContainer>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} sm container spacing={6}>
              {/*First Section */}
              <Grid item xs={12} md={6}>
                <Grid
                  item
                  xs={12}
                  md={12}
                  sx={{ backgroundColor: "#1C1D22", padding: 2, margin: 2 }}
                >
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
                  <Typography
                    sx={{
                      mt: 3,
                      mb: 1,
                      color: "var(--white, #F7F8FC)",
                      fontFeatureSettings: "'clig' off, 'liga' off",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "16px",
                    }}
                  >
                    Phone number
                  </Typography>
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
                </Grid>
              </Grid>

              {/* Other Sections */}
              <Grid
                item
                xs={12}
                md={6}
                sx={{ marginTop: { xs: 2, sm: 0 } }} 
              >
                <Grid
                  item
                  xs={12}
                  md={12}
                  sx={{ backgroundColor: "#1C1D22", padding: 3, margin: 2 }}
                >

                  <Typography
                    sx={{
                      mt: 1,
                      mb: 1,
                      color: "var(--white, #F7F8FC)",
                      fontFeatureSettings: "'clig' off, 'liga' off",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "16px" /* 114.286% */,
                    }}
                  >
                    User Name
                  </Typography>
                  <Stack direction="column">
                    <InputField placeholder={"Anish Vikende"} />
                  </Stack>
                  <Typography
                    sx={{
                      mt: 3,
                      mb: 1,
                      color: "var(--white, #F7F8FC)",
                      fontFeatureSettings: "'clig' off, 'liga' off",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "16px",
                    }}
                  >
                    Location
                  </Typography>
                  <Stack direction="column">
                    <StyledSelectField placeholder={"Select Location"} />
                  </Stack>
                  <Typography
                    sx={{
                      mt: 3,
                      mb: 1,
                      color: "var(--white, #F7F8FC)",
                      fontFeatureSettings: "'clig' off, 'liga' off",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "16px",
                    }}
                  >
                    CPID
                  </Typography>
                  <Stack direction="column">
                    <StyledSelectField placeholder={"Select Chargepoint"} />
                  </Stack>
                  <Typography
                    sx={{
                      mt: 3,
                      mb: 1,
                      color: "var(--white, #F7F8FC)",
                      fontFeatureSettings: "'clig' off, 'liga' off",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "16px",
                    }}
                  >
                    Connector ID
                  </Typography>
                  <Stack direction="column">
                    <StyledSelectField placeholder={"Select Connector"} />
                  </Stack>
                  <Typography
                    sx={{
                      mt: 3,
                      mb: 1,
                      color: "var(--white, #F7F8FC)",
                      fontFeatureSettings: "'clig' off, 'liga' off",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "16px",
                    }}
                  >
                    Session Mode
                  </Typography>
                  <Stack direction="column">
                    <StyledSelectField placeholder={"Select Session Mode"} />
                  </Stack>
                  <Typography
                    sx={{
                      mt: 3,
                      mb: 1,
                      color: "var(--white, #F7F8FC)",
                      fontFeatureSettings: "'clig' off, 'liga' off",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "16px",
                    }}
                  >
                    Value
                  </Typography>
                  <Grid container spacing={2} item xs={12} md={12}>
                    <Grid item xs={12} md={9}>
                      <Stack direction="column">
                        <InputField placeholder={"Enter Value"} />
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <StyledButton variant="primary" width="121" height="50">
                        Start
                      </StyledButton>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </TableContainer>
    </>
  );
}

export const TableContainer = styled.div`
  overflow-x: auto;
  border-radius: 8px;
  margin: 20px 16px;
`;
