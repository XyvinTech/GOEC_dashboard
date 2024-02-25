import { Grid, Typography, Container, Stack, Box } from "@mui/material";
import styled from "styled-components";
import StyledButton from "../../../ui/styledButton";
import InputField from "../../../ui/styledInput";
import StyledTab from "../../../ui/styledTab";
import LocationalAccess from "./locationalAccess";
import FunctionalAccess from "./functionalAccess";
import { useForm, Controller, FormProvider } from "react-hook-form";

export default function AddRole({ action, data }) {

  const methods = useForm({
    defaultValues: {
      roleName: action === "edit" ? data.Name : "",
      roleDescription: action === "edit" ? data.Description : "",
      functionalPermissions: [],
      locationalPermissions: [],
      
    },
  });

  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = methods;

  const onSubmit = (data) => {
    console.log(data); // Here, 'data' will include all the form fields
  };
  const buttonChanged = (e) => {
    setValue("togglePage", e.index);
  };

  return (
    <TableContainer>
      <FormProvider {...methods}>
        <Container fixed>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Grid container spacing={4}>
              <Grid item md={12}>
                <Typography sx={{ marginBottom: 1 }}>Role name</Typography>
                <Controller
                  name="roleName"
                  
                  render={({ field }) => (
                    <InputField
                      placeholder="Enter Role name"
                      {...field}
                      error={!!errors.roleName}
                      helperText={errors.roleName?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item md={12}>
                <Typography sx={{ marginBottom: 1 }}>
                  Role Description
                </Typography>
                <Controller
                  name="roleDescription"
                 
                  render={({ field }) => (
                    <InputField
                      placeholder="Enter Description"
                      {...field}
                      error={!!errors.roleDescription}
                      helperText={errors.roleDescription?.message}
                    />
                  )}
                />
              </Grid>

              {/* Tabs for Functional and Locational Access */}
              <Box pl={4} pt={3} sx={{ width: "100%" }}>
                <StyledTab
                  buttons={["Functional Access", "Locational Access"]}
                  onChanged={buttonChanged}
                />
                {watch("togglePage") === 0 && <FunctionalAccess />}
                {watch("togglePage") === 1 && <LocationalAccess />}
              </Box>

              {/* Save and Cancel Buttons */}
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
          </form>
        </Container>
      </FormProvider>
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
