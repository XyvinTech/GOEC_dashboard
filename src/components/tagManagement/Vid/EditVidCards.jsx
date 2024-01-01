import React, { useState } from "react";
import CommonLayout from "../../../layout/CommonLayout";
import StyledInput from "../../../ui/styledInput";
import { FormControlLabel, Grid, Switch, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CalendarInput from "../../../ui/CalendarInput";
import StyledFooter from "../../../ui/StyledFooter";
import StyledButton from "../../../ui/styledButton";
import StyledSwitch from "../../../ui/styledSwitch";

const EditVidCards = ({Close,Save}) => {
    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
  
    // date update
    const [parentDateValue, setParentDateValue] = useState('15-11-2024');
  
    const handleDateChangeInParent = (formattedDate) => {
      setParentDateValue(formattedDate);
    };

  return (
    <>
      <CommonLayout header="Edit VID Tag"  onClick={Close}>
        <Typography align="left">VID </Typography>
        <StyledInput placeholder="Enter VID " value="2324235345" />
        <Typography align="left">Serial number</Typography>
        <StyledInput placeholder="Enter Serial number" value="2324235345" />
        <Typography align="left">VID Expiry date</Typography>
        <StyledInput
          placeholder="Enter VID Expiry date"
          iconright={<CalendarInput dateValue={parentDateValue} onDateChange={handleDateChangeInParent} />}
          value={parentDateValue}
        />
        <Grid container spacing={2} direction="row">
          <Grid item xs={6}>
            <Typography align="left">Activate VID</Typography>
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
  )
}

export default EditVidCards
