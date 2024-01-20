import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import InputField from "../../../ui/styledInput";
import StyledSelectField from "../../../ui/styledSelectField";
import StyledButton from "../../../ui/styledButton";
import FileUpload from "../../../utils/FileUpload";

import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getOem } from "../../../services/evMachineAPI";
import { createVehicle, editVehicle, getBrand } from "../../../services/vehicleAPI";

let compactable_ports = [
  { label: "CCS", value: "CCS" },
  { label: "CHAdeMO", value: "CHAdeMO" },
  { label: "Combo 1", value: "Combo 1" },
  { label: "GBT", value: "GBT" },
  { label: "IEC 60309", value: "IEC 60309" },
  { label: "Type 1", value: "Type 1" },
  { label: "Type 2", value: "Type 2" },
];

// StyledTable component
export default function AddVehicles({ vehicleData = {}, formSubmited, editStatus = false, ...props }) {
  const [brands, setBrands] = useState();
  const [selectedFile, setSelectedFile] = useState();
  console.log(vehicleData);
  const { control, handleSubmit, reset, formState: { errors }, clearErrors } = useForm(
    {
      defaultValues: {
        brand: editStatus ? vehicleData["Company Name"] : '',
        modelName: editStatus ? vehicleData["Model name"] : '',
        compactable_port: editStatus ? vehicleData["compactable_port"][0].split(",") : ''
      }
    }
  );
  const getBrandApi = () => {
    getBrand().then((res) => {
      console.log(res.result);
      if (res.status) {
        const formattedBrands = res.result.map((brand) => ({
          label: brand.brandName,
          value: brand._id,
        }));
        setBrands(formattedBrands);
      }
    });
  };
  useEffect(() => {
    getBrandApi();
  }, []);

  const handleFileUpload = (file) => {
    setSelectedFile(file.files[0]);
  };

  const onSubmit = (data) => {
    if (editStatus) {
      console.log(data);
      updateVEHICLE(data)
    }
    else {
      createVEHICLE(data)
    }
  };



  const createVEHICLE = (data) => {

    const formData = new FormData();
    if (!selectedFile) {
      toast.error("Select image");
      return
    }
    formData.append("image", selectedFile);
    formData.append("brand", data.brand.value);
    formData.append("modelName", data.modelName);
    formData.append("compactable_port", data.compactable_port.map((item) => item.value));

    createVehicle(formData).then((res) => {
      if (res.status) {
        console.log(res);
        toast.success("vehicle created successfully");
        reset();
        formSubmited();
      }
    }).catch((error) => {
      toast.error("Failed to create Vehicle");
    })
  }

  const updateVEHICLE = (data) => {

    const formData = new FormData();
    console.log(data.compactable_port);
    if (selectedFile) {
      formData.append("image", selectedFile);
    }
    formData.append("brand", data.brand.value ? data.brand.value : getBrandId());
    formData.append("modelName", data.modelName);
    formData.append("compactable_port", data.compactable_port ? data.compactable_port.map((item) => item.value) : vehicleData["compactable_port"]);
    editVehicle(vehicleData["_id"], formData).then((res) => {
      if (res.status) {
        console.log(res);
        toast.success("vehicle updated successfully");
        reset();
        formSubmited();
      }
    }).catch((error) => {
      toast.error("Failed to update Vehicle");
    })
  }

  const getBrandId = () => {
    for (let index = 0; index < brands.length; index++) {
      if (brands[index].label == vehicleData["Company Name"]) {
        return brands[index].value
      }

    }
  }


  return (
    <Box>
      <Container
        maxWidth="md"
        sx={{
          backgroundColor: editStatus ? "primary.main" : "secondary.main",
          p: 3,
          m: { md: editStatus ? 0 : 4 },
          border: !editStatus && "1px solid #fff6",
          borderRadius: "4px",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container>
            <Grid item xs={12} sx={{ height: "250px" }}>
              <FileUpload onFileSelect={handleFileUpload} image={vehicleData["icon"] && vehicleData["icon"]} />
            </Grid>
          </Grid>

          <Typography sx={{ marginBottom: 2, marginTop: 2, color: 'primary.contrastText' }}>
            Vehicle Manufacturer Name
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Stack direction="column">
                <Controller
                  name="brand"
                  control={control}
                  render={({ field }) => (
                    <>
                      <StyledSelectField
                        {...field}
                        options={brands}
                        placeholder={"Enter Vehicle Manufacturer Name"}
                      />
                      {errors.brand && (
                        <span style={{ color: 'red' }}>
                          {errors.brand.message}
                        </span>
                      )}
                    </>
                  )}
                  rules={{ required: "Select Vehicle Company is required" }}
                />

              </Stack>
            </Grid>
          </Grid>

          <Typography sx={{ marginBottom: 2, marginTop: 2, color: 'primary.contrastText' }}>
            Model Name
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Stack direction="column">
                <Controller
                  name="modelName"
                  control={control}
                  render={({ field }) => (
                    <>
                      <InputField
                        {...field}
                        placeholder={"Enter Model Name"}
                      />
                      {errors.modelName && (
                        <span style={{ color: 'red' }}>
                          {errors.modelName.message}
                        </span>
                      )}
                    </>
                  )}
                  rules={{ required: "Modal name is required" }}
                />
              </Stack>
            </Grid>
          </Grid>

          <Typography sx={{ marginBottom: 2, marginTop: 2, color: 'primary.contrastText' }}>
            Compatable ports
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Stack direction="column">
                <Controller
                  name="compactable_port"
                  control={control}
                  render={({ field }) => (
                    <>
                      <StyledSelectField
                        {...field}
                        options={compactable_ports}
                        placeholder={"Select ports"}
                        isMulti={true}
                      />
                      {errors.compactable_port && (
                        <span style={{ color: 'red' }}>
                          {errors.compactable_port.message}
                        </span>
                      )}
                    </>
                  )}
                  rules={{ required: "Select Vehicle ports is required" }}
                />
              </Stack>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <Stack
                item
                xs={12}
                md={12}
                direction={"row"}
                justifyContent={"end"}
                spacing={2}
                sx={{ mt: 2 }}
              >
                <StyledButton type="reset" variant={"secondary"} width="150">
                  {" "}
                  Cancel{" "}
                </StyledButton>
                <StyledButton type="submit" variant={"primary"} width="180">
                  {" "}
                  Save{" "}
                </StyledButton>
              </Stack>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
}
