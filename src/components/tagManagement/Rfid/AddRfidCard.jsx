import React, { useState } from "react";
import CommonLayout from "../../../layout/CommonLayout";
import StyledInput from "../../../ui/styledInput";
import { Box, FormControlLabel, FormGroup, Grid, Stack, Typography } from "@mui/material";
import CalendarInput from "../../../ui/CalendarInput";
import StyledFooter from "../../../ui/StyledFooter";
import StyledButton from "../../../ui/styledButton";
import StyledSwitch from "../../../ui/styledSwitch";
import { useForm, Controller } from "react-hook-form"
import { createRfid, editRfid } from "../../../services/rfidAPI";
import { toast } from "react-toastify";

const AddRfidCard = ({ Close, editStatus = false, rfidData }) => {
  const { control, handleSubmit, setValue, watch, formState: { errors }, clearErrors } = useForm({
    defaultValues: {
      activate: editStatus && rfidData["Status"] == "active" ? true : false, // Set the default value for "activate"
      expiry: editStatus ? rfidData["expiryDate"] : '',
      rfidTag: editStatus ? rfidData["RFID Tag"] : '',
      serialNumber: editStatus ? rfidData["RFID Tag"] : '',
    },
  });
  const onSubmit = (data) => {
    console.log('Form data submitted:', data);
    if (editStatus) {
      updateRFID(data)
    } else {
      createRFID(data)
    }
  };

  const createRFID = (data) => {
    let dt = {
      expiry: data.expiryDate,
      rfidTag: data.rfidTag,
      serialNumber: data.serialNumber,
      status: data.activate ? 'active' : 'unassigned'
    }
    createRfid(dt).then((res) => {
      console.log('---->',res);
      toast.success("RFID added successfully")
      Close();
    }).catch((error) => {
      console.log(error.response.data);
      toast.error(error.response.data.error)
    })
  }

  const updateRFID = (data) => {
    let dt = {
      expiry: data.expiryDate,
      rfidTag: data.rfidTag,
      serialNumber: data.serialNumber,
      status: data.activate ? 'active' : 'inactive'
    }
    editRfid(rfidData._id,dt).then((res) => {
      console.log(res);
      toast.success("RFID updated successfully")
      Close();
    }).catch((error) => {
      toast.error(error.response.data.error)
    })
  }

  const handleDateChangeInParent = (date) => {
    setValue('expiryDate', date); // Assuming you have 'expiryDate' in your form state
    clearErrors('expiryDate');
  };
  const expiryDate = watch('expiryDate', ''); // Watching the value for 'expiryDate'

  const handleChange = (event) => {
    setValue('activate', event.target.checked);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CommonLayout header="Add RFID Card" onClick={Close}>
          <Typography variant="subtitle2" align="left" sx={{ color: 'primary.contrastText' }}>RFID tag</Typography>
          <Controller
            name="rfidTag"
            control={control}
            render={({ field }) => (
              <>
                <StyledInput {...field} placeholder="Enter RFID Tag" />
                {errors.rfidTag && <span style={errorMessageStyle}>{errors.rfidTag.message}</span>}
              </>
            )}
            // Adding 'required' attribute here
            rules={{ required: 'RFID tag is required' }}
          />
          <Typography variant="subtitle2" align="left" sx={{ color: 'primary.contrastText' }}>Serial number</Typography>
          <Controller
            name="serialNumber"
            control={control}
            render={({ field }) => (
              <>
                <StyledInput {...field} placeholder="Enter Serial number" />
                {errors.serialNumber && <span style={errorMessageStyle}>{errors.serialNumber.message}</span>}
              </>
            )}
            rules={{ required: 'Serial number is required' }}
          />

          <Typography variant="subtitle2" align="left" sx={{ color: 'primary.contrastText' }}>RFID Expiry date</Typography>
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
              <Typography variant="subtitle2" align="left" sx={{ color: 'primary.contrastText' }}>Activate RFID</Typography>
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
              />
            </Grid>
          </Grid>
        </CommonLayout>
        <StyledFooter width={'100'}>
          <Stack direction={"row"} spacing={2}>
            <StyledButton variant="secondary" width="120" style={{ height: '45px' }} type="reset" onClick={Close}>
              Cancel
            </StyledButton>
            <StyledButton variant="primary" width="150" style={{ height: '45px' }} type="submit">
              Save
            </StyledButton>
          </Stack>
        </StyledFooter>
      </form>
    </Box>
  );
};

const errorMessageStyle = {
  color: 'red',
  // margin: '1px 0',
};

export default AddRfidCard;
