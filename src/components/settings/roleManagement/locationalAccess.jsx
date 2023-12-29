import { Grid, Typography } from "@mui/material";
import React from "react";
import StyledSelectField from "../../../ui/styledSelectField";

function LocationalAccess() {
  return (
    <>
      <Typography sx={{ marginBottom: 3, marginTop: 3 }}>
        Location Name
      </Typography>
      <Grid item xs={12}>
        <StyledSelectField placeholder={"Select Location"} />
      </Grid>
    </>
  );
}

export default LocationalAccess;
