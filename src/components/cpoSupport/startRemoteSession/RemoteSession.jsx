import styled from "styled-components";
import {
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import InputField from "../../../ui/styledInput";
import StyledSelectField from "../../../ui/styledSelectField";
import StyledButton from "../../../ui/styledButton";
import StyledPhoneNumber from "../../../ui/StyledPhoneNumber";
import LastSynced from "../../../layout/LastSynced";
import StyledSearchField from "../../../ui/styledSearchField";
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
            <Grid
              item
              xs={12}
              sm
              container
              spacing={6}
            >
              {/*First Section */}
              <Grid item xs={6} md={6}>
                <Grid
                  item
                  xs={12}
                  md={12}
                  sx={{ backgroundColor: "black", padding: 4, margin: 2 }}
                >
                  <Typography sx={{ mt: 1, mb: 1 }}>Phone number</Typography>
                  <Grid container spacing={2} item xs={12} md={12}>
                    <Grid item xs={12} md={9}>
                      <StyledPhoneNumber
                        onChange={handlePhoneNumberChange}
                        placeholder="Enter Phone number"
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <StyledButton variant="primary" width="121" height="56">
                        search
                      </StyledButton>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              {/*Second Section */}
              <Grid
                item
                xs={6}
                md={6}
                
              >
                <Grid item xs={12} md={12}sx={{ backgroundColor: "black", padding: 4 , margin: 2 }}>
                  <Typography sx={{ mt: 3, mb: 1 }}>User Name</Typography>
                  <Stack direction="column">
                    <StyledSelectField placeholder={"Anish Vikende"} />
                  </Stack>
                  <Typography sx={{ mt: 3, mb: 1 }}>Location</Typography>
                  <Stack direction="column">
                    <StyledSelectField placeholder={"Select Location"} />
                  </Stack>
                  <Typography sx={{ mt: 3, mb: 1 }}>CPID</Typography>
                  <Stack direction="column">
                    <StyledSelectField placeholder={"Select Chargepoint"} />
                  </Stack>
                  <Typography sx={{ mt: 3, mb: 1 }}>Connector ID</Typography>
                  <Stack direction="column">
                    <StyledSelectField placeholder={"Select Connector"} />
                  </Stack>
                  <Typography sx={{ mt: 3, mb: 1 }}>Session Mode</Typography>
                  <Stack direction="column">
                    <StyledSelectField placeholder={"Select Session Mode"} />
                  </Stack>
                  <Typography sx={{ mt: 3, mb: 1 }}>Value</Typography>
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
