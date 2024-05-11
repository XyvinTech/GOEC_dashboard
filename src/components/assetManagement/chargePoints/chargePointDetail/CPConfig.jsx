import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { ReactComponent as ReloadIcon } from "../../../../assets/icons/reload.svg";
import StyledSelectField from "../../../../ui/styledSelectField";
import StyledButton from "../../../../ui/styledButton";
import ConfigElement from "./CPConfig/configElement";
import ConfigSwitch from "./CPConfig/configSwitch";
import ConfigMeter from "./CPConfig/configMeter";
import ConfigCP from "./CPConfig/configCP";
import { toast } from "react-toastify";
import { getConfiguration } from "../../../../services/ocppAPI";

const configList = [
  {
    label: "Blink repeat",
    data: "100",
  },
  {
    label: "Heart beat interval",
    data: "100",
  },
  {
    label: "Connection timeout",
    data: "100",
  },
  {
    label: "Max energy on invalid ID",
    data: "100",
  },
  {
    label: "Clock aligned data interval",
    data: "100",
  },
  {
    label: "Light intensity",
    data: "100",
  },
  {
    label: "Max value sample interval",
    data: "100",
  },
  {
    label: "Max energy on invalid ID",
    data: "100",
  },
  {
    label: "Minimum status duration",
    data: "100",
  },
  {
    label: "Reset retires",
    data: "100",
  },
  {
    label: "Transaction message attempts",
    data: "100",
  },
  {
    label: "Transaction message retry interval",
    data: "100",
  },
  {
    label: "Web socket ping interval",
    data: "100",
  },
];

const switchList = [
  "Allow offline transaction for unknown ID",
  "",
  "Authorization remote transaction requests",
  "Local authorize offline",
  "Local pre-authorize",
  "Stop transaction on EV side disconnect",
  "Stop transaction on invalid ID",
  "Unlock connector on EV side disconnect",
  "Open charge mode enable",
];

const meterList = [
  {
    title: "Metre value aligned data",
    selectData: [],
    chipData: ["Measurand", "Measurand", "Measurand", "Measurand"],
  },
  {
    title: "Meter value Sample data",
    selectData: [],
    chipData: ["Measurand", "Measurand", "Measurand", "Measurand", "Measurand", "Measurand"],
  },
  {
    title: "Stop Transaction Sample data",
    selectData: [],
    chipData: ["Measurand", "Measurand", "Measurand", "Measurand", "Measurand"],
  },
  {
    title: "Stop Transaction aligned data",
    selectData: [],
    chipData: ["Measurand", "Measurand", "Measurand", "Measurand"],
  },
  {
    title: "Connector Phase rotation",
    selectData: [],
    chipData: ["Value", "Value", "Value", "Value", "Value"],
  },
];

const configCPList = [
  {
    label: "Get configuration keys",
    value: "24",
  },
  {
    label: "Meter value aligned data max length",
    value: "",
  },
  {
    label: "Number of connectors",
    value: "",
  },
  {
    label: "Connector phase rotation max length",
    value: "",
  },
  {
    label: "Stop transaction aligned data max length",
    value: "",
  },
  {
    label: "Supported feature profiles",
    value: "",
  },
  {
    label: "Supported feature profiles max length",
    value: "",
  },
  {
    label: "Supported feature profiles",
    value: "",
  },
];

const handleConfiguration = async (data = {}) => {
  try {
    const cpid = sessionStorage.getItem("cpid");
    const res = await getConfiguration(cpid, data);
    console.log("🚀 ~ getConfiguration ~ res:", res);
  } catch (error) {
    const errorToastId = toast.error(error.response.data.error, {
      position: "top-right",
    });
    toast.update(errorToastId);
  }
};

export default function CPConfig() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "primary.grey",
          p: 2,
        }}
      >
        <Stack direction={"column"} sx={{ ml: 2 }}>
          <Typography variant="body1" sx={{ color: "secondary.contrastText" }}>
            CP Config
          </Typography>
          <Stack direction={"row"} sx={{ alignItems: "center" }} spacing={1}>
            <Typography sx={{ color: "secondary.greytext", fontSize: 12 }}>Last synced</Typography>
            <Typography sx={{ color: "success.main", fontSize: 12 }}>4 minutes ago</Typography>
            <ReloadIcon style={{ cursor: "pointer" }} />
          </Stack>
        </Stack>
      </Box>
      <Box
        sx={{
          backgroundColor: "secondary.main",
          borderRadius: "4px",
          mx: { xs: 2, md: 30 },
          mt: { xs: 2, md: 3 },
        }}
      >
        <Stack direction={"column"} sx={{ px: { xs: 3, md: 8 } }}>
          <Stack direction={"row"} sx={{ alignItems: "center", my: 5 }} spacing={{ xs: 2, md: 5 }}>
            <Typography
              variant="subtitle2"
              sx={{ color: "primary.contrastText", fontSize: "14px", fontWeight: 400 }}
            >
              Configuration
            </Typography>
            <StyledSelectField placeholder={"Core profile"} />
            <StyledButton variant="primary" onClick={handleConfiguration}>
              Get Configuration
            </StyledButton>
          </Stack>
          <configureElement label={"dff"} data={"dfsg"} />
          <Stack direction={"column"} spacing={2} my={2}>
            {configList.map((item) => {
              return <ConfigElement label={item.label} data={item.data} />;
            })}
          </Stack>
          <Grid container spacing={3} my={2}>
            {switchList.map((item) => (
              <Grid item md={6} xs={12}>
                <ConfigSwitch label={item} />
              </Grid>
            ))}
          </Grid>
          <Stack direction={"column"} spacing={3}>
            {meterList.map((item) => (
              <ConfigMeter title={item.title} chipData={item.chipData} />
            ))}
          </Stack>
          <Grid container spacing={3} my={3}>
            {configCPList.map((item) => (
              <Grid item md={6} xs={12}>
                <ConfigCP label={item.label} value={item.value} />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Box>
    </>
  );
}
