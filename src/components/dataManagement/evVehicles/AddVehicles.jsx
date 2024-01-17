import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import InputField from "../../../ui/styledInput";
import StyledSelectField from "../../../ui/styledSelectField";
import StyledButton from "../../../ui/styledButton";
import FileUpload from "../../../utils/FileUpload";
import LastSynced from "../../../layout/LastSynced";

import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getOem } from "../../../services/evMachineAPI";
import { createVehicle, getBrand } from "../../../services/vehicleAPI";

let Amenities = [
  "Mall",
  "Cafe",
  "Restaurant",
  "Restroom",
  "Waitingroom",
  "BAR",
];

let compactable_ports = [
  { label: "AC", value: "AC" },
  { label: "DC", value: "DC" },
  { label: "AC/DC", value: "AC/DC" },
];

// StyledTable component
export default function AddVehicles() {
  const { register, handleSubmit, setValue } = useForm();
  const [brand, setBrand] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const getBrandApi = () => {
    getBrand().then((res) => {
      if (res.status) {
        const formattedBrands = res.result.map((brand) => ({
          label: brand.brandName,
          value: brand._id,
        }));
        setBrand(formattedBrands);
        console.log(formattedBrands);
      }
    });
  };
  useEffect(() => {
    getBrandApi();
  }, []);

  const handleFileUpload = (file) => {
    setSelectedFile(file[0]);
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("image", selectedFile);

    // Append other form data to the formData
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    try {
      let res = await createVehicle(data);
      if (res.status) {
        toast.success("vehicle created successfully", {
          position: "bottom-right",
        });
           
      }
    } catch (error) {
      console.log(error);
       toast.error("Failed to create OEM", {
        position: "bottom-right",
      });
     
    }
  };

  return (
    <Box>
      <LastSynced heading={"EV Vehicles"} />
      <Container
        maxWidth="md"
        sx={{
          backgroundColor: "secondary.main",
          p: 3,
          m: { md: 4 },
          border: "1px solid #fff6",
          borderRadius: "4px",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container>
            <Grid item xs={12} sx={{ height: "250px" }}>
              <FileUpload onFileSelect={handleFileUpload} />
            </Grid>
          </Grid>

          <Typography sx={{ marginBottom: 2, marginTop: 2 }}>
            Vehicle Manufacturer Name
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Stack direction="column">
                <StyledSelectField
                  {...register("brand")}
                  options={brand}
                  placeholder={"Enter Vehicle Manufacturer Name"}
                />
              </Stack>
            </Grid>
          </Grid>

          <Typography sx={{ marginBottom: 2, marginTop: 2 }}>
            Model Name
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Stack direction="column">
                <InputField
                  {...register("modelName")}
                  placeholder={"Enter Model Name"}
                />
              </Stack>
            </Grid>
          </Grid>

          <Typography sx={{ marginBottom: 2, marginTop: 2 }}>
            Compatable ports
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Stack direction="column">
                <StyledSelectField
                  {...register("compactable_port")}
                  options={compactable_ports}
                  placeholder={"Select ports"}
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
                <StyledButton variant={"secondary"} width="150">
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
