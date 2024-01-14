import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import StyledSelectField from '../../../../../ui/styledSelectField'
import StyledDivider from '../../../../../ui/styledDivider'
import StyledButton from '../../../../../ui/styledButton'
import { useForm, Controller } from "react-hook-form";
export default function SendLocalList() {

    const {
        control,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
        clearErrors,
      } = useForm({
        defaultValues: {
          published: false, // Set the default value for "activate"
        },
      });
      const onSubmit = (data) => {
        // Handle form submission with data
        console.log("Form data submitted:", data);
        // Close your form or perform other actions
      };

    return (
        <Box sx={{ mx: { xs: 2, md: 25 }, backgroundColor: 'secondary.main', borderRadius: '4px' }}>
             <form onSubmit={handleSubmit(onSubmit)}>
            <Stack direction={'column'} spacing={5} sx={{ px: { xs: 2, md: 5 }, py: { xs: 2, md: 5 }, }}>
                <Stack direction={'column'} spacing={1}>
                    <Typography>Version</Typography>

                    <Controller
                name="updateFirmware"
                control={control}
                render={({ field }) => (
                  <>
                     <StyledSelectField placeholder={'Update Firmware'} />
                    {errors.updateFirmware && (
                      <span style={errorMessageStyle}>
                        {errors.updateFirmware.message}
                      </span>
                    )}
                  </>
                )}
               
              />
                   
                </Stack>
                <Stack direction={'column'} spacing={1}>
                    <Typography>Update Type</Typography>

                    <Controller
                name="updType"
                control={control}
                render={({ field }) => (
                  <>
                     <StyledSelectField placeholder={'Select'} />
                    {errors.updType && (
                      <span style={errorMessageStyle}>
                        {errors.updType.message}
                      </span>
                    )}
                  </>
                )}
               
              />
                  
                </Stack>
            </Stack>
            <StyledDivider />
            <Stack direction={'row'} sx={{ p: 2 }}><Box sx={{ flexGrow: 1 }} /><StyledButton variant={'primary'} style={{ width: '160px' }} type="submit">Send</StyledButton></Stack>
      </form>
        </Box>
    )
}


const errorMessageStyle = {
    color: "red",
    // margin: '1px 0',
    };
    