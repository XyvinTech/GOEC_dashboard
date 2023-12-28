import { Grid, Typography, Container, Stack } from "@mui/material";
import React from "react";
import styled from "styled-components";
import LastSynced from "../../../layout/LastSynced";
import StyledSelectField from "../../../ui/styledSelectField";
import InputField from "../../../ui/styledInput";
import StyledButton from "../../../ui/styledButton";
import { ReactComponent as Phone } from "../../../assets/icons/Phone.svg";

export default function Personal() {
  return (
    <TableContainer>
      <LastSynced heading="Location" />
      <Container fixed>
        <Grid
          container
          spacing={4}
          sx={{
            alignItems: "center",
            bgcolor: "#1c1d22",
            padding: 5,
            marginTop: 5,
            marginLeft: 5,
            width: "50%",
          }}
        >
          <Grid item md={12}>
            <Typography sx={{ marginBottom: 1 }}>Person</Typography>
            <InputField icon={<Phone />} placeholder={"Enter Phone number"} />
          </Grid>
          <Grid item md={12}>
            <Typography sx={{ marginBottom: 1 }}>Change Location</Typography>
            <StyledSelectField placeholder={"Select Locations"} />
          </Grid>
          <Grid item md={12}>
            <Typography sx={{ marginBottom: 1}}>CPID</Typography>
            <StyledSelectField placeholder={"Select CPID"} />
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Stack direction={"row"} spacing={2} sx={{ mt: 2 }}>
              <StyledButton variant={"secondary"} width="103">
                Cancel
              </StyledButton>
              <StyledButton variant={"primary"} width="160">
                Assign
              </StyledButton>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </TableContainer>
  );
}

//! STYLINGS

// Styled table container
export const TableContainer = styled.div`
  background: #27292f; // Dark background for the table
  overflow-x: auto; // Allows table to be scrollable horizontally
  border-radius: 8px; // Rounded corners
`;
