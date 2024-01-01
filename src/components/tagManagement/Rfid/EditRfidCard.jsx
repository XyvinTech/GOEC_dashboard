import React, { useState } from "react";
import CommonLayout from "../../../layout/CommonLayout";
import StyledInput from "../../../ui/styledInput";
import { FormControlLabel, Grid, Switch, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CalendarInput from "../../../ui/CalendarInput";
import StyledFooter from "../../../ui/StyledFooter";
import StyledButton from "../../../ui/styledButton";
import StyledSwitch from "../../../ui/styledSwitch";

const EditRfidCard = ({Close,Save}) => {

  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  // date update
  const [parentDateValue, setParentDateValue] = useState('15-02-2024');

  const handleDateChangeInParent = (formattedDate) => {
    setParentDateValue(formattedDate);
  };

  return (
    <>
      <CommonLayout header="Edit RFID Card"  onClick={Close}>
        <Typography align="left">RFID tag</Typography>
        <StyledInput placeholder="Enter RFID Tag" value="2324235345" />
        <Typography align="left">Serial number</Typography>
        <StyledInput placeholder="Enter Serial number" value="2324235345" />
        <Typography align="left">RFID Expiry date</Typography>
        <StyledInput
          placeholder="Enter RFID Expiry date"
          iconright={<CalendarInput dateValue={parentDateValue} onDateChange={handleDateChangeInParent} />}
          value={parentDateValue}
        />
        <Grid container spacing={2} direction="row">
          <Grid item xs={6}>
            <Typography align="left">Activate RFID</Typography>
          </Grid>
          <Grid item xs={6} textAlign={"right"} justifyContent={"flex-end"} display={"flex"}>
            <StyledSwitch/>
          </Grid>
        </Grid>
      </CommonLayout>
      <StyledFooter>
        <StyledButton variant="secondary" width="103" mr="20" onClick={Close}>
          Cancel
        </StyledButton>
        <StyledButton variant="primary" width="160" onClick={Save}>
          Save
        </StyledButton>
      </StyledFooter>
    </>
  );
};



export default EditRfidCard;
