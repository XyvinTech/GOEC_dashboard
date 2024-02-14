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
import { createVehicle, editVehicle, getBrand, vehicleImageUpload } from "../../../services/vehicleAPI";

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

// image has bug it is clear in phase 2 commented sessions are for image 

export default function AddVehicles({ vehicleData = {},onClose, formSubmited, editStatus = false, ...props }) {
  const [brands, setBrands] = useState();
  const [selectedFile, setSelectedFile] = useState();
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
    setSelectedFile(file);
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
    
    if (!selectedFile) {
      toast.error("Select image");
      return
    }
    const formData = new FormData()
    formData.append("image",selectedFile)
    vehicleImageUpload(formData).then((res)=>{
      console.log(res);
    })
    let dt = {
      "image": selectedFile,
      "brand": data.brand.value,
      "modelName": data.modelName,
      "compactable_port": data.compactable_port.map((item) => item.value)
    }

    createVehicle(dt).then((res) => {
      if (res.status) {
        toast.success("vehicle created successfully");
        reset();
        formSubmited()
      }
    }).catch((error) => {
      toast.error("Failed to create Vehicle");
    })
  }

  const updateVEHICLE = (data) => {
    let dt = {}
    if (selectedFile) {
      dt = {
        "image": selectedFile
      }
    }
    dt = {
      ...dt,
      "brand": data.brand.value ? data.brand.value : getBrandId(),
      "modelName": data.modelName,
      "compactable_port": typeof(data.compactable_port[0]) === "object" ? data.compactable_port.map((item) => item.value) : vehicleData["compactable_port"]
    }
    editVehicle(vehicleData["_id"], dt).then((res) => {
      console.log(res);
      if (res.status) {
        toast.success("vehicle updated successfully");
        reset();
        onClose()
      }
    }).catch((error) => {
      console.log(error);
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
              <FileUpload getBase64Data={handleFileUpload} image={vehicleData["icon"] && vehicleData["icon"]} />
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
