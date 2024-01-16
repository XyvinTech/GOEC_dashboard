import { Box, Dialog, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import StyledDivider from "../../../../ui/styledDivider";
import StyledSelectField from "../../../../ui/styledSelectField";
import StyledInput from "../../../../ui/styledInput";
import { ReactComponent as Close } from "../../../../assets/icons/close-icon-large.svg";
import StyledButton from "../../../../ui/styledButton";
import { useForm } from "react-hook-form";

export default function AddOEM({ open, onClose, editStatus = false }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    onClose && onClose();
  };

  return (
    <Dialog open={open} fullWidth>
      <Box sx={{ backgroundColor: "primary.main" }}>
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
              {editStatus ? "Edit" : "Add"} OEM
            </Typography>
            <Close
              style={{ cursor: "pointer" }}
              onClick={() => {
                onClose && onClose();
              }}
            />
          </Stack>
          <StyledDivider />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Stack spacing={1} p={2}>
                <Typography variant="subtitle2" color={"primary.contrastText"}>
                  Add Charger OEM
                </Typography>
                <StyledInput {...register('chargerOEM')} />
              </Stack>
            </Grid>
          </Grid>
          <Stack
            direction={"row"}
            sx={{
              justifyContent: "end",
              px: 2,
              py: 2,
              alignItems: "center",
              backgroundColor: "secondary.main",
            }}
            spacing={2}
          >
            <StyledButton
              variant="secondary"
              style={{ width: "140px", height: "45px" }}
              onClick={() => {
                onClose && onClose();
              }}
            >
              Cancel
            </StyledButton>
            <StyledButton
              variant="primary"
              type='submit'
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
