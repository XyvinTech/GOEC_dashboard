import { Grid, Typography, Container, Stack } from "@mui/material";
import React from "react";
import styled from "styled-components";
import StyledSelectField from "../../../ui/styledSelectField";
import StyledButton from "../../../ui/styledButton";
import InputField from "../../../ui/styledInput";
import StyledPhoneNumber from "../../../ui/StyledPhoneNumber";
import StyledSwitch from "../../../ui/styledSwitch";

export default function AddAdmin({action, data}) {
  return (
    <TableContainer>
      <Container fixed>
        <Grid container spacing={1}>
          <Grid item md={12}>
            <Typography sx={{ marginBottom: 1 }}>Name</Typography>
            <InputField placeholder={"Enter Admin Name"} value={action==="edit"? data.Name: ""}/>
          </Grid>
          <Grid item md={12}>
            <Typography sx={{ marginBottom: 1 }}>Designation</Typography>
            <InputField placeholder={"Enter Designation"} value={action==="edit"? data.Designation: ""}/>
          </Grid>
          <Grid item md={12}>
            <Typography sx={{ marginBottom: 1 }}>Email</Typography>
            <InputField placeholder={"Enter Email"} value={action==="edit"? data.Email: ""}/>
          </Grid>
          <Grid item md={12}>
            <Typography sx={{ marginBottom: 1 }}>Mobile number</Typography>
            <StyledPhoneNumber placeholder={"Enter Mobile number"} value={action==="edit"? data.Phone: ""}/>
          </Grid>
          <Grid item md={12}>
            <Typography sx={{ marginBottom: 1 }}>Role name</Typography>
            <StyledSelectField placeholder={"Select Role"} value={action==="edit"? data.Role: ""}/>
          </Grid>
          <Grid sx={{ marginBottom: 1, marginTop: 3 }} item xs={12} md={12}>
            <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
              <Typography>Activate Admin status</Typography>
              <StyledSwitch />
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <Stack direction={"row"} spacing={2} sx={{ mt: 2 }}>
              <StyledButton variant={"secondary"} width="103">
                Cancel
              </StyledButton>
              <StyledButton variant={"primary"} width="160">
                Save
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
  max-width:500px;
`;
