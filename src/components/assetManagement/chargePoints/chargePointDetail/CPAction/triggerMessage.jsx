import { Box, Grid, Hidden, Stack, Typography } from "@mui/material";
import React from "react";
import StyledSelectField from "../../../../../ui/styledSelectField";
import StyledDivider from "../../../../../ui/styledDivider";
import StyledButton from "../../../../../ui/styledButton";
import { useForm, Controller } from "react-hook-form";
const Toast = ({ title, code, variant = "success", ...props }) => {
  return (
    <Stack
      direction={"row"}
      sx={{
        backgroundColor: "#252525",
        borderRadius: "4px",
        justifyContent: "space-between",
        m: 1,
        p: 1,
        position: "relative",
        width: "98%",
        zIndex: 100,
        mt: "147px",
      }}
    >
      <Typography
        variant="subtitle2"
        color={variant === "success" ? "success.main" : "error.main"}
      >
        {title}
      </Typography>
      <Typography variant="subtitle2" color={"primary.DimText"}>
        {code}
      </Typography>
    </Stack>
  );
};

const PayloadComponent = ({
  title,
  code,
  variant = "success",
  toast = false,
  toastVariant = "success",
  toastTitle,
  toastCode,
  ...props
}) => {
  return (
    <Box sx={{ borderRadius: "4px", overflow: "hidden" }}>
      <Stack sx={{ backgroundColor: "#252525", p: 1 }}>
        <Typography variant="subtitle2" sx={{ color: "primary.DimText" }}>
          {title}
        </Typography>
      </Stack>
      <Box sx={{ backgroundColor: "secondary.contrast", height: "250px" }}>
        <Typography
          variant="body2"
          sx={{
            color: variant === "success" ? "success.main" : "error.main",
            p: 2,
          }}
        >
          {code}
        </Typography>
        {toast && (
          <Toast title={toastTitle} code={toastCode} variant={toastVariant} />
        )}
      </Box>
    </Box>
  );
};

export default function TriggerMessage() {
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    clearErrors,
  } = useForm({
    defaultValues: {
      published: false, // Set the default value for "activate"
    },
  });
  const onSubmit = (data) => {
    // Handle form submission with data
    console.log("Form data submitted:", data);
    // Close your form or perform other actions
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "secondary.main",
          px: 3,
          mt: 1,
          borderRadius: "4px",
          justifyContent: "center",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container sx={{ px: 3 }}>
            <Grid item xs={12} md={6} p={2}>
              <Stack direction={"column"} spacing={2}>
                <Typography>Connector ID</Typography>

                <Controller
                  name="connectorID"
                  control={control}
                  render={({ field }) => (
                    <>
                      <StyledSelectField placeholder={"select Connector ID"} />
                      {errors.connectorID && (
                        <span style={errorMessageStyle}>
                          {errors.connectorID.message}
                        </span>
                      )}
                    </>
                  )}
                  rules={{ required: "Connector ID is required" }}
                />
              </Stack>
            </Grid>
            <Grid item xs={12} md={6} p={2}>
              <Stack direction={"column"} spacing={2}>
                <Typography>Trigger Message</Typography>

                <Controller
                  name="TriggerMessage"
                  control={control}
                  render={({ field }) => (
                    <>
                      <StyledSelectField placeholder={"Meter Values"} />
                      {errors.TriggerMessage && (
                        <span style={errorMessageStyle}>
                          {errors.TriggerMessage.message}
                        </span>
                      )}
                    </>
                  )}
                />
              </Stack>
            </Grid>
          </Grid>
          <StyledDivider />
          <Stack
            direction={"row"}
            sx={{ justifyContent: "center", alignItems: "center" }}
            pb={2}
            pt={1}
          >
            <StyledButton
              variant={"primary"}
              style={{ width: "160px", height: "48px" }}
              type="submit"
            >
              Send
            </StyledButton>
          </Stack>
        </form>
      </Box>
      <Box
        sx={{
          backgroundColor: "secondary.main",
          mt: 2,
          p: 3,
          borderRadius: "4px",
        }}
      >
        <Typography variant="subtitle2" mt={1}>
          Charger log
        </Typography>
        <Grid container spacing={2} mt={2}>
          <Grid item xs={12} md={6}>
            <PayloadComponent
              title={"Payload: TriggerMessage"}
              code={"{hello:seccess}"}
              variant="success"
              toast={true}
              toastVariant={"success"}
              toastTitle={"Payload Sent"}
              toastCode={"1668656494-54311937"}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <PayloadComponent
              title={"Responds: MeterValues"}
              code={"{hello:seccess}"}
              variant="error"
              toast={true}
              toastVariant={"danger"}
              toastTitle={"Charger Not Connected"}
              toastCode={"1668656494-54311937"}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}


const errorMessageStyle = {
    color: "red",
    // margin: '1px 0',
    };
    