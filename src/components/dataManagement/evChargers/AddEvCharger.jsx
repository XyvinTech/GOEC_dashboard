import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import InputField from "../../../ui/styledInput";
import StyledSelectField from "../../../ui/styledSelectField";
import StyledInput from "../../../ui/styledInput";
import StyledButton from "../../../ui/styledButton";
import { Add } from "@mui/icons-material";
import ConnectorDetails from "./addEvcharger/connectorDetails";
import LastSynced from "../../../layout/LastSynced";
import { Controller, useForm } from "react-hook-form";
import { getOem } from "../../../services/evMachineAPI";
import { useEffect } from "react";
// StyledTable component

const outputTypeData = [
  {
    label: 'AC',
    value: 'AC'
  },
  {
    label: 'DC',
    value: 'DC'
  }
]

const OCCPVersionData = [
  {
    label: '1.6',
    value: '1.6'
  },
  {
    label: '2.0',
    value: '2.0'
  }
]

const numberOfPorts = [
  {
    label: '1',
    value: '1'
  },
  {
    label: '2',
    value: '2'
  },
  {
    label: '3',
    value: '3'
  },
  {
    label: '4',
    value: '4'
  }
]



export default function AddEvCharger() {
  const [connectorDetailOpen, setConnectorDetailOpen] = useState(false)
  const [oemData, setOemData] = useState([])
  const { control, handleSubmit, setValue, reset, formState: { errors }, clearErrors } = useForm();

  const getOEMApi = () => {
    getOem().then((res) => {
      console.log(res.result);
      if (res.status) {
        const formattedOEM = res.result.map((brand) => ({
          label: brand.name,
          value: brand._id,
        }));
        setOemData(formattedOEM);
      }
    });
  };
  useEffect(() => {
    getOEMApi()
  }, [])

  const onSubmit = (data)=>{

  }


  return (
    <Box>
      <LastSynced heading={'EV Charger'} />
      <Container maxWidth="md" sx={{ backgroundColor: 'secondary.main', p: 2, m: { md: 4 }, border: '1px solid #fff6', borderRadius: '4px' }}>
        <ConnectorDetails open={connectorDetailOpen} onClose={() => { setConnectorDetailOpen(false) }} />
        <Typography sx={{ marginBottom: 3, marginTop: 3, color: 'primary.contrastText' }}>
          Add Charger OEM
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                name="oem"
                control={control}
                render={({ field }) => (
                  <>
                    <StyledSelectField options={oemData} {...field} placeholder={"Select Charger OEM"} />
                    {errors.oem && (
                      <span style={{ color: 'red' }}>
                        {errors.oem.message}
                      </span>
                    )}
                  </>
                )}
                rules={{ required: "Select oem is required" }}
              />
            </Grid>
          </Grid>


          <Typography sx={{ marginBottom: 3, marginTop: 3, color: 'primary.contrastText' }}>
            Model Name
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                name="model_name"
                control={control}
                render={({ field }) => (
                  <>
                    <StyledInput {...field} placeholder={"Select Model Name"} />
                    {errors.model_name && (
                      <span style={{ color: 'red' }}>
                        {errors.model_name.message}
                      </span>
                    )}
                  </>
                )}
                rules={{ required: "Enter model name is required" }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography sx={{ marginBottom: 3, marginTop: 3, color: 'primary.contrastText' }}>
                Output type
              </Typography>
              <Stack direction="column">
                <Controller
                  name="output_type"
                  control={control}
                  render={({ field }) => (
                    <>
                      <StyledSelectField options={outputTypeData} {...field} placeholder={"Enter Output type"} />
                      {errors.output_type && (
                        <span style={{ color: 'red' }}>
                          {errors.output_type.message}
                        </span>
                      )}
                    </>
                  )}
                  rules={{ required: "Select Output type" }}
                />
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography sx={{ marginBottom: 3, marginTop: 3, color: 'primary.contrastText' }}>OCPP version</Typography>
              <Stack direction="column">
                <Controller
                  name="ocpp_version"
                  control={control}
                  render={({ field }) => (
                    <>
                      <StyledSelectField options={OCCPVersionData} {...field} placeholder={"select OCCP version"} />
                      {errors.ocpp_version && (
                        <span style={{ color: 'red' }}>
                          {errors.ocpp_version.message}
                        </span>
                      )}
                    </>
                  )}
                  rules={{ required: "Select OCCP Version" }}
                />
              </Stack>
            </Grid>
          </Grid>
          <Typography sx={{ marginBottom: 3, marginTop: 3, color: 'primary.contrastText' }}>
            Capacity(kW)
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <Controller
                name="capacity"
                control={control}
                render={({ field }) => (
                  <>
                    <InputField {...field} placeholder={"Enter capacity"} />
                    {errors.capacity && (
                      <span style={{ color: 'red' }}>
                        {errors.capacity.message}
                      </span>
                    )}
                  </>
                )}
                rules={{ required: "Enter capacity" }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography sx={{ marginBottom: 3, marginTop: 3, color: 'primary.contrastText' }}>
                Number of Ports
              </Typography>
              <Grid container direction={{ xs: "column", md: "row" }} spacing={2}>
                <Grid item xs={12} md={7}>
                  <Controller
                    name="no_of_ports"
                    control={control}
                    render={({ field }) => (
                      <>
                        <StyledSelectField options={numberOfPorts} {...field} placeholder={"Enter Output type"} />
                        {errors.no_of_ports && (
                          <span style={{ color: 'red' }}>
                            {errors.no_of_ports.message}
                          </span>
                        )}
                      </>
                    )}
                    rules={{ required: "Select no. of ports" }}
                  />
                </Grid>
                <Grid item xs={12} md={5}>
                  <StyledButton style={{ width: '100%' }} onClick={() => { setConnectorDetailOpen(true) }}><Add /> Connector details</StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Stack direction={"row"} sx={{ justifyContent: 'end' }} p={2} spacing={2}>
            <StyledButton style={{ width: '150px' }} variant={'secondary'}>Cancel</StyledButton>
            <StyledButton style={{ width: '200px' }} variant={'primary'} type="submit">Save</StyledButton>
          </Stack>
        </form>
      </Container>
    </Box>
  );
};