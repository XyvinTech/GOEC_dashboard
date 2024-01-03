import React, { useState } from "react";
import CommonLayout from "../../../layout/CommonLayout";
import StyledInput from "../../../ui/styledInput";
import { FormControlLabel, FormGroup, Grid, Switch, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CalendarInput from "../../../ui/CalendarInput";
import StyledFooter from "../../../ui/StyledFooter";
import StyledButton from "../../../ui/styledButton";
import StyledSwitch from "../../../ui/styledSwitch";
import { useForm, Controller } from "react-hook-form"

const AddRfidCard = ({Close,Save}) => {
  
  const { control, handleSubmit, setValue, watch, formState: { errors },clearErrors } = useForm({
    defaultValues: {
      activate: false, // Set the default value for "activate"
    },
  });
  const onSubmit = (data) => {
    // Handle form submission with data
    console.log(data);
    // Close your form or perform other actions
    Close();
  };


  const handleDateChangeInParent = (date) => {
    setValue('expiryDate', date); // Assuming you have 'expiryDate' in your form state
    clearErrors('expiryDate');
  };
  const expiryDate = watch('expiryDate', ''); // Watching the value for 'expiryDate'
  
  const handleChange = (event) => {
    setValue('activate',event.target.checked);
  };

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <CommonLayout header="Add RFID Card" onClick={Close}>
        <Typography align="left">RFID tag</Typography>
        <Controller
          name="rfidTag"
          control={control}
          render={({ field }) => (
          <>
            <StyledInput {...field} placeholder="Enter RFID Tag"  />
            {errors.rfidTag && <span style={errorMessageStyle}>{errors.rfidTag.message}</span>}
          </>
        )}
        // Adding 'required' attribute here
        rules={{ required: 'RFID tag is required' }}
        />
        <Typography align="left">Serial number</Typography>
        <Controller
          name="serialno"
          control={control}
          render={({ field }) => (
            <>
              <StyledInput {...field} placeholder="Enter Serial number"  />
              {errors.serialno && <span style={errorMessageStyle}>{errors.serialno.message}</span>}
            </>
          )}
          rules={{ required: 'Serial number is required' }}
        />
        
        <Typography align="left">RFID Expiry date</Typography>
        <Controller
            name="expiryDate"
            control={control}
            render={({ field }) => (
              <>
                <StyledInput
                  {...field}
                  placeholder="Enter RFID Expiry date"
                  iconright={<CalendarInput onDateChange={handleDateChangeInParent} />}
                  value={expiryDate}
                  readOnly
                 
                />
                {errors.expiryDate && <span style={errorMessageStyle}>{errors.expiryDate.message}</span>}
              </>
            )}
            // Adding 'required' attribute here
            rules={{ required: 'RFID Expiry date is required' }}
          />
        
        <Grid container spacing={2} direction="row">
          <Grid item xs={6}>
            <Typography align="left">Activate RFID</Typography>
          </Grid>
          <Grid item xs={6} textAlign={"right"} justifyContent={"flex-end"} display={"flex"}>
              <Controller
                name="activate"
                control={control}
                render={({ field }) => (
                 
                  <StyledSwitch
                    {...field}
                    onChange={(e) => {
                      handleChange(e);
                      // Additional logic if needed
                    }}
                    defaultChecked={field.value}
                    // Adding 'required' attribute
                  />
                 
                  
                )}
                rules={{ required: 'Activate RFID is required' }}
              />
                         
          </Grid>  
          {errors.activate && <span style={{ paddingLeft: '16px',marginTop:'10px', ...errorMessageStyle }}>{errors.activate.message}</span>}
        </Grid>
        </CommonLayout>
        <StyledFooter>
            <StyledButton variant="secondary" width="103" mr="20" onClick={Close}>
              Cancel
            </StyledButton>
            <StyledButton variant="primary" width="160" type="submit">
              Save
            </StyledButton>
          </StyledFooter>
      </form>
      </>
  );
};

const errorMessageStyle = {
  color: 'red',
 // margin: '1px 0',
  // Add any other styles as needed
};

export default AddRfidCard;
