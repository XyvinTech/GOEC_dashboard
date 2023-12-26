import React, { useState } from 'react'
import CommonLayout from '../../layout/CommonLayout'
import StyledInput from '../../ui/styledInput'
import { FormControlLabel, Grid, Switch, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import CalendarInput from '../../ui/CalendarInput';


const AddRfidCard = () => {

  const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#18492D' : '#18492D ',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#87898E' : '#39383D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));
  

  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  
 

  return (
    <div id='layout'>
   
    <CommonLayout  header='Add RFID Card' button='Save' onClose='layout' >
      <Typography align="left">RFID tag</Typography>
      <StyledInput placeholder='Enter RFID Tag' />
      <Typography align="left">Serial number</Typography>
      <StyledInput placeholder='Enter Serial number'/>
      <Typography align="left">RFID Expiry date</Typography>
      <StyledInput id='expiry' 
        placeholder='Enter RFID Expiry date' 
        iconright={<CalendarInput inputid='expiry'/>    }
      />
      <Grid container spacing={2} direction="row">
        <Grid item xs={6}>
          <Typography align="left">Activate RFID</Typography>
        </Grid>
        <Grid item xs={6} textAlign={'right'}>
          <FormControlLabel
              control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
              label=""  />
        </Grid>
      </Grid>
    </CommonLayout>
    </div>
  )
}

export default AddRfidCard
