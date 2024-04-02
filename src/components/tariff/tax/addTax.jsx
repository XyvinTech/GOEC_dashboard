import { Grid, Typography, Container, Stack } from "@mui/material";
import React, { useEffect, useMemo } from "react";
import styled from "styled-components";
import StyledButton from "../../../ui/styledButton";
import StyledSwitch from "../../../ui/styledSwitch";
import { useForm } from "react-hook-form";
import { createTax, editTax } from "../../../services/taxAPI";
import { toast } from "react-toastify";
import StyledInput from "../../../ui/styledInput";

export default function AddTax({ action, data, onIsChange, isChange,onClose }) {
  const defaultValues = useMemo(() => {
    return action === "edit"
      ? {
          name: data.Name,
          percentage: data.Description,
        }
      : {};
  }, [action, data]);

  const { register, handleSubmit, reset } = useForm({ defaultValues });

  useEffect(() => {
    if (action === "edit") {
      reset(defaultValues);
    }
  }, [action, defaultValues, reset]);

  const onSubmit = async (formData) => {
    try {
      if (action === "add") {
        const res = await createTax(formData);
        if (res) {
          const successToastId = toast.success("Tax created successfully", {
            position: "top-right",
          });
          onIsChange(!isChange);
          toast.update(successToastId);
          reset();
        }
      } else if (action === "edit") {
        const res = await editTax(data._id, formData);
        if (res) {
          const successToastId = toast.success("Tax updated successfully", {
            position: "top-right",
          });
          onIsChange(!isChange);
          toast.update(successToastId);
          reset();
        }
      }
    } catch (error) {
      const errorToastId = toast.error("Something went wrong", {
        position: "top-right",
      });
      toast.update(errorToastId);
    }
  };

  return (
    <TableContainer>
      <Container fixed>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={4}>
            <Grid item md={12}>
              <Typography sx={{ marginBottom: 1 }}>Name</Typography>
              <StyledInput placeholder={"Enter Name"} {...register("name")} />
            </Grid>
            <Grid item md={12}>
              <Typography sx={{ marginBottom: 1 }}>Percentage (per kWH)</Typography>
              <StyledInput placeholder={"Enter Percentage"} {...register("percentage")} />
            </Grid>
            <Grid sx={{ marginBottom: 1, marginTop: 3 }} item xs={12} md={12}>
              <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
                <Typography>Activate Tax</Typography>
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
                <StyledButton type="button" variant={"secondary"} width="103" onClick={onClose}>
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
