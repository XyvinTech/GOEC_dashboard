import { Grid, Typography, Container, Stack, Modal, Box, Dialog } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import LastSynced from "../../../layout/LastSynced";
import StyledSelectField from "../../../ui/styledSelectField";
import StyledButton from "../../../ui/styledButton";
import StyledWarning from "../../../ui/styledWarning";
import { ReactComponent as Warn } from "../../../assets/icons/textWarn.svg";
import StyledDivider from "../../../ui/styledDivider";
import Assign from "./assign";
import { ReactComponent as Close } from "../../../assets/icons/close-circle.svg";
import { Controller, useForm } from "react-hook-form";
import { getChargingPointsListOfStation } from "../../../services/stationAPI";
import { getChargerTarrifDetail } from "../../../services/evMachineAPI";

export default function Location({ location }) {
  const [open, setOpen] = useState(false);
  const [chargerList, setChargerList] = useState([])
  const [currentTarrif, setCurrentTarrif] = useState()


  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
    clearErrors,
  } = useForm()

  const onSubmit = (data) => {
    // Handle form submission with data
    getChargerTarrifDetail(data.CPID.label).then((res) => {
      if (res.status) {
        setCurrentTarrif(res.result[0])
        handleOpen()
      }
    })
  };

  // Function to open the modal
  const handleOpen = () => {
    setOpen(true);
  };

  // Function to close the modal
  const handleClose = () => {
    setOpen(false);
  };

  const stationChange = (e) => {
    setValue("location", e)
    getChargingPointsListOfStation(e.value).then((res) => {
      if (res.status) {
        setChargerList(res.result.map((dt) => ({ label: dt.cpid, value: dt._id })))
      }
    })
  }
  return (
    <>
      <Box>
        <LastSynced heading="Location" />
        <Container >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid
              container
              spacing={4}
              sx={{
                alignItems: "center",
                bgcolor: "#1c1d22",
                p: 2,
                mt: 5,
                ml:2,
                width: { md: "50%" },
              }}
            >
              <Grid item md={12}>
                <Typography sx={{ marginBottom: 1 }}>Locations</Typography>
                <Controller
                  name="location"
                  control={control}
                  render={({ field }) => (
                    <>
                      <StyledSelectField {...field} placeholder={"Select Locations"} options={location}
                        onChange={stationChange}
                      />
                      {errors.location && (
                        <StyledWarning icon={<Warn />} value={errors.location.message} />
                      )}
                    </>
                  )}
                  rules={{ required: "Location Name is required" }}
                />

              </Grid>
              <Grid item md={12}>
                <Typography sx={{ marginBottom: 1 }}>CPID</Typography>
                <Controller
                  name="CPID"
                  control={control}
                  render={({ field }) => (
                    <>
                      <StyledSelectField {...field} placeholder={"Select CPID"} options={chargerList} />
                      {errors.CPID && (
                        <StyledWarning icon={<Warn />} value={errors.CPID.message} />
                      )}
                    </>
                  )}
                  rules={{ required: "Location Name is required" }}
                />

              </Grid>
              <Grid
                item
                xs={12}
                md={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Stack direction={"row"} spacing={2} sx={{ mt: 2 }}>
                  <StyledButton variant={"secondary"} width="103">
                    Cancel
                  </StyledButton>
                  <StyledButton variant={"primary"} width="160">
                    Assign
                  </StyledButton>
                </Stack>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Box>
      {/* Modal */}
      <Dialog
        maxWidth="sm"
        fullWidth
        open={open}
        onClose={handleClose}
      >
        <Box sx={{ bgcolor: "#27292F", p: 2 }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={2}
            my={2}
          >
            <Typography
              sx={{
                color: "secondary.greytext",
                fontSize: 18,
                fontWeight: 700,
              }}
            >
              Add Tariff
            </Typography>
            <Close onClick={handleClose} style={{ cursor: "pointer" }} />
          </Stack>
          <StyledDivider />
          <Assign tab={"location"} data={currentTarrif} onClose={handleClose}  />
        </Box>
      </Dialog>
    </>
  );
}

