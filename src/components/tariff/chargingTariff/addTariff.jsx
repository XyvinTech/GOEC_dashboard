import { Grid, Typography, Container, Stack } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import StyledSelectField from "../../../ui/styledSelectField";
import StyledButton from "../../../ui/styledButton";
import InputField from "../../../ui/styledInput";
import { Controller, useForm } from "react-hook-form";
import { createChargingTariff, editChargingTariff } from "../../../services/chargingTariffAPI";
import { toast } from "react-toastify";
import { getTaxListDropdown } from "../../../services/taxAPI";

export default function AddTariff({ action, data, onIsChange, isChange,updateData, setOpen }) {
  const [taxListData, setTaxListData] = useState([]);
  const getTariffData = () => {
    getTaxListDropdown().then((res) => {
      if (res) {
        setTaxListData(res.taxs);
      }
    });
  };

  const defaultValues = useMemo(() => {
    return action === "edit"
      ? {
          name: data.Name,
          value: data.Value,
          tax: data.Tax,
          serviceFee: data["Service fee(INR)"]
        }
      : {};
  }, [action, data]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm({ defaultValues });

  useEffect(() => {
    getTariffData();
    if (action === "edit") {
      reset(defaultValues);
    }
  }, [action, defaultValues, reset]);

  const handleCancel = ()=>{
    setOpen(false);
    reset();
  }
  const onSubmit = async (formData) => {
    const addData = {
      name : formData.name,
      value: formData.value,
      tax: formData.tax.value,
      serviceAmount: formData.serviceFee
    }
    try {
      if (action === "add") {
        const res = await createChargingTariff(addData);
        if (res) {
          const successToastId = toast.success("Charging Tariff created successfully", {
            position: "top-right",
          });
          onIsChange(!isChange);
          toast.update(successToastId);
          reset();
          updateData && updateData()
        }
      } else if (action === "edit") {
        const res = await editChargingTariff(data._id, addData);
        if (res) {
          const successToastId = toast.success("Charging Tariff updated successfully", {
            position: "top-right",
          });
          onIsChange(!isChange);
          toast.update(successToastId);
          reset();
          updateData && updateData()
        }
      }
    } catch (error) {
      console.log(error);
      const errorToastId = toast.error("Something went wrong", {
        position: "top-right",
      });
      toast.update(errorToastId);
    }
  };

  const options = taxListData.map((res) => ({
    value: res._id,
    label: res.name,
  }));

  return (
    <TableContainer>
      <Container fixed>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={4}>
            <Grid item md={12}>
              <Typography sx={{ marginBottom: 1 }}>Name</Typography>
              <InputField placeholder={"Enter Name"} {...register("name")} />
            </Grid>
            <Grid item md={12}>
              <Typography sx={{ marginBottom: 1 }}>Value (per kWH)</Typography>
              <InputField placeholder={"Enter Value"} {...register("value")} />
            </Grid>
            <Grid item md={12}>
              <Typography sx={{ marginBottom: 1 }}>TAX</Typography>
              <Controller
                name="tax"
                control={control}
                render={({ field }) => (
                  <>
                    <StyledSelectField {...field} options={options} placeholder="None" />
                    {errors.tax && (
                      <span style={errorMessageStyle}>{errors.tax.message}</span>
                    )}
                  </>
                )}
                rules={{ required: "Tax is required" }}
              />
            </Grid>
            <Grid item md={12}>
              <Typography sx={{ marginBottom: 1 }}>Service fee</Typography>
              <InputField placeholder={"Enter Amount"} {...register("serviceFee")} />
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
                <StyledButton variant={"secondary"} width="103" onClick={handleCancel}>
                  Cancel
                </StyledButton>
                <StyledButton variant={"primary"} type="submit" width="160">
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

const errorMessageStyle = {
  color: "red",
};
