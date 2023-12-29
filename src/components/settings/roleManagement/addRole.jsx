import { Grid, Typography, Container, Stack, Box } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import StyledButton from "../../../ui/styledButton";
import InputField from "../../../ui/styledInput";
import StyledTab from "../../../ui/styledTab";
import LocationalAccess from "./locationalAccess";
import FunctionalAccess from "./functionalAccess";

export default function AddRole({ action, data }) {
  const [togglePage, setTogglePage] = useState(0);

  const buttonChanged = (e) => {
    setTogglePage(e.index);
  };
  return (
    <TableContainer>
      <Container fixed>
        <Grid container spacing={4}>
          <Grid item md={12}>
            <Typography sx={{ marginBottom: 1 }}>Role name</Typography>
            <InputField
              placeholder={"Enter Role name"}
              value={action === "edit" ? data.Name : ""}
            />
          </Grid>
          <Grid item md={12}>
            <Typography sx={{ marginBottom: 1 }}>Role Description</Typography>
            <InputField
              placeholder={"Enter Description"}
              value={action === "edit" ? data.Description : ""}
            />
          </Grid>
          <Box pl={1} pt={3}>
            <Container fixed>
              <StyledTab
                buttons={["Functional Access", "Locational Access"]}
                onChanged={buttonChanged}
              />
            {togglePage === 0 ? <FunctionalAccess /> : <LocationalAccess />}
            </Container>
          </Box>
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
