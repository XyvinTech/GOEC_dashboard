import { Grid, Typography, Container, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StyledSelectField from "../../../ui/styledSelectField";
import StyledButton from "../../../ui/styledButton";
import InputField from "../../../ui/styledInput";
import StyledPhoneNumber from "../../../ui/StyledPhoneNumber";
import StyledSwitch from "../../../ui/styledSwitch";
import { Controller, useForm } from "react-hook-form";
import StyledInput from "../../../ui/styledInput";
import { Phone, Try } from "@mui/icons-material";
import { createAdmin, getRoles, updateAdmin } from "../../../services/userApi";
import { toast } from "react-toastify";

export default function AddAdmin({ setIsChange, isChange, setAction, action, data, ...props }) {

  const formOptions =
    action === "edit"
      ? {
          defaultValues: {
            name: data.Name,
            designation: data.Designation,
            email: data.Email,
            mobile: data.Phone,
            role: data.Role,
            status: data.Status === "Active" ? true : false,
          },
        }
      : {};

  const [roles, setRoles] = useState([]);
  const { register, handleSubmit, control, reset } = useForm(formOptions);


  const [loading, setLoading] = useState(false);
  const onSubmit = async (formData) => {
    setLoading(true);
    let fData = { ...formData, role: formData.role.value };

    try {
      if (action === "add") {
        await createAdmin(fData);
      } else if (action === "edit") {
        await updateAdmin(data._id, fData);
        setAction("add");
        reset();
      }
      props.onSuccess();
      setIsChange(!isChange);
    } catch (error) {
      console.log(error);
      toast.error("Failed to add role");
    }finally {
      setLoading(false); // Stop loading regardless of the outcome
    }
  };

  const init = async () => {
    let roles1 = await getRoles();
    setRoles(roles1.result);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <TableContainer>
      <Container fixed>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={1}>
            <Grid item md={12}>
              <Typography sx={{ marginBottom: 1 }}>Name</Typography>
              <InputField placeholder={"Enter Admin Name"} {...register("name")} />
            </Grid>
            <Grid item md={12}>
              <Typography sx={{ marginBottom: 1 }}>Designation</Typography>
              <InputField placeholder={"Enter Designation"} {...register("designation")} />
            </Grid>
            <Grid item md={12}>
              <Typography sx={{ marginBottom: 1 }}>Email</Typography>
              <InputField placeholder={"Enter Email"} {...register("email")} />
            </Grid>
            <Grid item md={12}>
              <Typography sx={{ marginBottom: 1 }}>Mobile number</Typography>
              <Controller
                name="mobile"
                control={control}
                render={({ field }) => (
                  <>
                    <StyledInput
                      {...field}
                      icon={<Phone />}
                      placeholder={"Enter Phone number"}
                      type="number"
                    />
                  </>
                )}
                rules={{ required: "Phone number is required" }}
              />{" "}
            </Grid>
            <Grid item md={12}>
              <Typography sx={{ marginBottom: 1 }}>Role name</Typography>
              <Controller
                name="role"
                control={control}
                render={({ field }) => (
                  <>
                    <StyledSelectField
                      {...field}
                      placeholder="Role"
                      options={roles.map((e) => ({
                        label: e.roleName,
                        value: e._id,
                      }))}
                    />
                  </>
                )}
                rules={{ required: "Role is required" }}
              />
            </Grid>
            <Grid sx={{ marginBottom: 1, marginTop: 3 }} item xs={12} md={12}>
              <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
                <Typography>Activate Admin status</Typography>
                <Controller
                  name="status"
                  control={control}
                  render={({ field }) => (
                    <StyledSwitch
                      {...field}
                      defaultChecked={field.value}
                      // Adding 'required' attribute
                    />
                  )}
                />
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
                <StyledButton variant={"primary"} width="160" type="submit"
                  disabled={loading}>
                   {loading ? "Saving..." : "Save"}
                </StyledButton>
              </Stack>
            </Grid>
          </Grid>
        </form>
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
  max-width: 500px;
`;
