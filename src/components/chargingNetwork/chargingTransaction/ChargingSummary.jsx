import React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Paper,
  Rating,
  List,
  ListItem,
  ListItemText,
  useTheme ,
  Card,
  CardMedia,
} from "@mui/material";
import { styled } from '@mui/material/styles';

import Pump from "../../../assets/images/pump.jpg";
const data = [
  { label: "Customer name", value: "ws://geoecms.numocity.com:9033/ocpp/g01" },
  { label: "Vehicle number", value: "CPID" },
  { label: "Vehicle model", value: "Oberon Mall, Ernakulam" },
  // ... add other data entries here
];

export default function ChargingSummary() {
  return (
    <>
      <Container maxWidth="sm">
        <Grid container spacing={4} marginY={1} direction="row">
          <Grid item xs={4}>
            <Box sx={{ display: "flex", justifyContent: "start" }}>
              <Card sx={{ maxWidth: 100 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="100"
                  image={Pump}
                />
              </Card>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Grid
              container
              direction="column"
              spacing={2}
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item xs={4}>
                <Typography
                  sx={{ flexGrow: 1, textAlign: "start" }}
                  variant="subtitle1"
                >
                  4.5
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="subtitle1">
                  Oberon Mall, Ernakulam
                </Typography>
                <Typography variant="caption">
                  NH Bypass, Oberon Mall
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {data.map((item, index) => (
        <StyledGridItem key={index} container wrap="nowrap" iseven={index % 2 === 0 ? 1 : 0}>
          <Grid item xs={4}>
            <Typography variant="caption" align="left">{item.label}</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="caption" align="center">{item.value}</Typography>
          </Grid>
        </StyledGridItem>
      ))}
      </Container>
    </>
  );
}

const StyledGridItem = styled(Grid)(({ theme, iseven }) => ({
    backgroundColor: iseven ? '#7a7676f' : '#7a7676f',
    padding: theme.spacing(1),
  }));