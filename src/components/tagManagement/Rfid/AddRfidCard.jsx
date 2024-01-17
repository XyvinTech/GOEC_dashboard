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
import {createRfid} from "../../../services/rfidAPI"

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddRfidCard = ({Close,Save}) => {
  
  const { control, handleSubmit, setValue, watch, formState: { errors },clearErrors,reset } = useForm({
    defaultValues: {
      status: "inactive", // Set the default value for "status"
    },
    
  });
  // const onSubmit = (data) => {
  //   // Handle form submission with data
  //   console.log('Form data submitted:',data);
  //   createRfid(data);
  //   // Close your form or perform other actions
  //   Close();
  // };

  const onSubmit = async (data) => {
    try {
      console.log('Form data submitted:',data);
      let res = await createRfid(data);
      console.log("status :"+res.status)
      if (res.status) {
        const successToastId = toast.success(
          "Rfid cards created successfully",
          {
            position: "bottom-right",
          }
        );
        const onCloseCallback = () => {
          //onClose && onClose();
          Close();
          reset();
        };

        toast.update(successToastId, { onClose: onCloseCallback });
      }
    } catch (error) {
      console.log(error);
      const errorToastId = toast.error("Failed to create rfid cards", {
        position: "bottom-right",
      });
      const onCloseCallback = () => {
        //onClose && onClose();
        Close();
        reset();
      };

      toast.update(errorToastId, { onClose: onCloseCallback });
    }
  };



  const handleDateChangeInParent = (date) => {
    setValue('expiry', date); // Assuming you have 'expiry' in your form state
    clearErrors('expiry');
  };
  const expiry = watch('expiry', ''); // Watching the value for 'expiry'
  
  const handleChange = (event) => {
    const isChecked = event.target.checked;
    const statusValue = isChecked ? 'active' : 'inactive'; // Set to 'active' if checked, otherwise empty string

    setValue('status',statusValue);
   // setValue('status',event.target.checked);
  };

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <CommonLayout header="Add RFID Card" onClick={Close}>
        <Typography align="left">RFID tag</Typography>
        <StyledInput placeholder="Enter RFID Tag"  />
        {/* <Controller
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
        /> */}
        <Typography align="left">Serial number</Typography>
        <Controller
          name="serialNumber"
          control={control}
          render={({ field }) => (
            <>
              <StyledInput {...field} placeholder="Enter Serial number"  />
              {errors.serialNumber && <span style={errorMessageStyle}>{errors.serialNumber.message}</span>}
            </>
          )}
          rules={{ required: 'Serial number is required' }}
        />
        
        <Typography align="left">RFID Expiry date</Typography>
        <Controller
            name="expiry"
            control={control}
            render={({ field }) => (
              <>
                <StyledInput
                  {...field}
                  placeholder="Enter RFID Expiry date"
                  iconright={<CalendarInput onDateChange={handleDateChangeInParent} />}
                  value={expiry}
                  readOnly
                 
                />
                {errors.expiry && <span style={errorMessageStyle}>{errors.expiry.message}</span>}
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
                name="status"
                control={control}
                render={({ field }) => (
                 
                  <StyledSwitch
                    {...field}
                    onChange={(e) => {
                      handleChange(e);
                      // Additional logic if needed
                    }}
                    defaultChecked={false}
                    // Adding 'required' attribute
                  />
                )}
                rules={{ required: 'Activate RFID is required' }}
              />
          </Grid>  
          {errors.status && <span style={{ paddingLeft: '16px',marginTop:'10px', ...errorMessageStyle }}>{errors.status.message}</span>}
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
      <ToastContainer />
      </>
  );
};

const errorMessageStyle = {
  color: 'red',
 // margin: '1px 0',
};

export default AddRfidCard;
