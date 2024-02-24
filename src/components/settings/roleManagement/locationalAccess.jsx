import { Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import StyledSelectField from "../../../ui/styledSelectField";
import { useState } from "react";
import { getListOfChargingStation } from "../../../services/stationAPI";

function LocationalAccess() {

  const [locationList, setLocationList] = useState([]);

  useEffect(() => {
    getListOfChargingStation().then((res) => {
      if (res.status) {
        setLocationList(
          res.result.map((dt) => ({ label: dt.name, value: dt._id }))
        );
      }
    });
  }, []);

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
