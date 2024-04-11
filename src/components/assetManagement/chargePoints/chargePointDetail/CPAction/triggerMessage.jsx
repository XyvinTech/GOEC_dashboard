import { Box, Grid, Hidden, Stack, Typography } from "@mui/material";
import React from "react";
import StyledSelectField from "../../../../../ui/styledSelectField";
import StyledDivider from "../../../../../ui/styledDivider";
import StyledButton from "../../../../../ui/styledButton";
import { useForm, Controller } from "react-hook-form";
import { Trigger } from "../../../../../services/ocppAPI";
import { toast } from "react-toastify";


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
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      connectorId: "",
      triggerMessage: "",
    },
  });

  let connectiorId = [
    { label: "1", value: 1 },
    { label: "2", value: 2 },
  ];

  let message = [
    {"label":"BootNotification","value":"BootNotification"},
    {"label":"DiagnosticsStatusNotification","value":"DiagnosticsStatusNotification"},
    {"label":"FirmwareStatusNotification","value":"FirmwareStatusNotification"},
    {"label":"Heartbeat","value":"Heartbeat"},
    {"label":"MeterValues","value":"MeterValues"},
    {"label":"StatusNotification","value":"StatusNotification"}
];

  const onSubmit = async (formData) => {
    const data = {
      connectorId: formData.connectorId.value,
      requestedMessage: formData.triggerMessage.value,
    };
    const cpid = sessionStorage.getItem("cpid");
    try {
      const res = await Trigger(cpid, data);
      if (res) {
        const successToastId = toast.success(
          "Triggered successfully",
          {
            position: "top-right",
          }
        );
        toast.update(successToastId);
        reset();
      }
    } catch (error) {
      const errorToastId = toast.error(error.response.data.error, {
        position: "top-right",
      });
      toast.update(errorToastId);
    }
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
                  name="connectorId"
                  control={control}
                  render={({ field }) => (
                    <>
                      <StyledSelectField
                       {...field}
                       options={connectiorId}
                        placeholder={"select Connector ID"} />
                      {errors.connectorId && (
                        <span style={errorMessageStyle}>
                          {errors.connectorId.message}
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
                  name="triggerMessage"
                  control={control}
                  render={({ field }) => (
                    <>
                      <StyledSelectField 
                       {...field}
                       options={message}
                       placeholder={"Message"} />
                      {errors.triggerMessage && (
                        <span style={errorMessageStyle}>
                          {errors.triggerMessage.message}
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
    