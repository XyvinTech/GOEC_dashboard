import { Box, Dialog, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import StyledDivider from "../../../../../ui/styledDivider";
import StyledSelectField from "../../../../../ui/styledSelectField";
import { ReactComponent as Close } from "../../../../../assets/icons/close-icon-large.svg";
import StyledButton from "../../../../../ui/styledButton";

import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Transition } from "../../../../../utils/DialogAnimation";
import { getChargingTariffList } from "../../../../../services/chargingTariffAPI";
import { changeEVTarrif } from "../../../../../services/evMachineAPI";

export default function AssignTarrif({ open, onClose, CPID, updated }) {
  const { handleSubmit, setValue, reset, formState: { errors }, control } = useForm();
  const [tarrifList, setTarrifList] = useState([])
  useEffect(() => {
    getChargingTariffList().then((res) => {
      if (res) {
        setTarrifList(res.result.map((dt) => ({ label: dt.name, value: dt._id })));
      }
    })
  }, [])

  const onSubmit = (data) => {
    console.log(data);
    let dt = {
      chargingTariff: data.chargingTariff.value
    }
    console.log(dt);
    changeEVTarrif(CPID, dt).then((res) => {
      console.log(res);
      toast.success("successfully assigned")
      updated && updated()
      onClose && onClose()
    }).catch((err) => {
      toast.error(err.response.data.error)
    })

  };


  return (
    <Dialog open={open} fullWidth TransitionComponent={Transition} PaperProps={{ sx: { backgroundColor: "secondary.main" } }}>
      <Box sx={{ backgroundColor: "secondary.main" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack
            direction={"row"}
            sx={{
              justifyContent: "space-between",
              px: 2,
              py: 2,
              alignItems: "center",
            }}
          >
            <Typography sx={{ color: "secondary.contrastText" }} variant="h6">
              Assign Tariff
            </Typography>
            <Close
              style={{ cursor: "pointer" }}
              onClick={() => {
                onClose && onClose();
                reset()
              }}
            />
          </Stack>
          <StyledDivider />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Stack spacing={1} p={2}>
                <Typography variant="subtitle2" color={"primary.contrastText"}>
                  Assign New Tariff Name
                </Typography>
                <Controller
                  name="chargingTariff"
                  control={control}
                  render={({ field }) => (
                    <>
                      <StyledSelectField {...field} placeholder="select Tarrif" options={tarrifList} maxMenuHeight={100} />
                      {errors.chargingTariff && (
                        <span style={{ color: 'red' }}>
                          {errors.chargingTariff.message}
                        </span>
                      )}
                    </>
                  )}
                  rules={{ required: "Select Charging tarrif" }}
                />
              </Stack>
            </Grid>
          </Grid>
          <Stack
            direction={"row"}
            sx={{
              justifyContent: "end",
              px: 2,
              pt: 6,
              pb: 2,
              alignItems: "center",
            }}
            spacing={2}
          >
            <StyledButton
              type="submit"
              variant="primary"
              style={{ width: "140px", height: "45px" }}
            >
              Save
            </StyledButton>
          </Stack>
        </form>
      </Box>
    </Dialog>
  );
}
