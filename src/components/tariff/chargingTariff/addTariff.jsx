import { Grid, Typography, Container, Stack } from "@mui/material";
import React from "react";
import styled from "styled-components";
import StyledSelectField from "../../../ui/styledSelectField";
import StyledButton from "../../../ui/styledButton";
import InputField from "../../../ui/styledInput";

export default function AddTariff({action, data}) {
  return (
    <TableContainer>
      <Container fixed>
        <Grid container spacing={4}>
          <Grid item md={12}>
            <Typography sx={{ marginBottom: 1 }}>Name</Typography>
            <InputField placeholder={"Enter Name"} value={action==="edit"? data.Name: ""}/>
          </Grid>
          <Grid item md={12}>
            <Typography sx={{ marginBottom: 1 }}>Value (per kWH)</Typography>
            <InputField placeholder={"Enter Value"} value={action==="edit"? data.value: ""}/>
          </Grid>
          <Grid item md={12}>
            <Typography sx={{ marginBottom: 1 }}>Service fee</Typography>
            <InputField placeholder={"Enter Amount"} value={action==="edit"? data.fee: ""}/>
          </Grid>
          <Grid item md={12}>
            <Typography sx={{ marginBottom: 1 }}>TAX</Typography>
            <StyledSelectField placeholder={"None"} value={action==="edit"? data.Tax: ""}/>
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
`;
