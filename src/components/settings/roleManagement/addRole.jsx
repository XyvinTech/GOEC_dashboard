import { Grid, Typography, Container, Stack, Box } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import StyledButton from "../../../ui/styledButton";
import InputField from "../../../ui/styledInput";
import StyledTab from "../../../ui/styledTab";
import LocationalAccess from "./locationalAccess";
import FunctionalAccess from "./functionalAccess";

export default function AddRole({ action, data }) {
  const [roleName, setRoleName] = useState(action === "edit" ? data.Name : "");
  const [roleDescription, setRoleDescription] = useState(
    action === "edit" ? data.Description : ""
  );
  const [functionalPermissions, setFunctionalPermissions] = useState([]);
  const [locationalPermissions, setLocationalPermissions] = useState([]);
  const [togglePage, setTogglePage] = useState(0);

  const handleRoleNameChange = (e) => {
    setRoleName(e.target.value);
  };

  const handleRoleDescriptionChange = (e) => {
    setRoleDescription(e.target.value);
  };

  const handleFunctionalPermissionsChange = (permissions) => {
    setFunctionalPermissions(permissions);
  };

  const handleLocationalPermissionsChange = (permissions) => {
    setLocationalPermissions(permissions);
  };

  const handleSaveButtonClick = () => {
    console.log("Role Name:", roleName);
    console.log("Role Description:", roleDescription);
    console.log("Functional Permissions:", functionalPermissions);
    console.log("Locational Permissions:", locationalPermissions);
  };

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
              value={roleName}
              onChange={handleRoleNameChange}
            />
          </Grid>
          <Grid item md={12}>
            <Typography sx={{ marginBottom: 1 }}>Role Description</Typography>
            <InputField
              placeholder={"Enter Description"}
              value={roleDescription}
              onChange={handleRoleDescriptionChange}
            />
          </Grid>
          <Box pl={4} pt={3} sx={{ width: "100%", borderRadius: "5" }}>
            <StyledTab
              buttons={["Functional Access", "Locational Access"]}
              onChanged={buttonChanged}
            />
            {togglePage === 0 ? (
              <FunctionalAccess onChange={handleFunctionalPermissionsChange} />
            ) : (
              <LocationalAccess onChange={handleLocationalPermissionsChange} />
            )}
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
              <StyledButton variant={"primary"} width="160" onClick={handleSaveButtonClick}>
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
