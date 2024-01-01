import { Box, Grid } from '@mui/material';
import React, { useState } from 'react'
import LastSynced from '../../../layout/LastSynced';
import TariffCard from './userTariff/tariffCard';
import AssignTariff from './userTariff/assignTariff';


const tariffData = [
  {
    'tarrifName': 'Default',
    'Location': 'Oberon Mall',
    'CPID': 'GOEC1',
    'Value': 15,
    'Tax': 'GST Kerala',
    'ServiceFee': '-'
  },
  {
    'tarrifName': 'Default',
    'Location': 'Oberon Mall',
    'CPID': 'GOEC1',
    'Value': 15,
    'Tax': 'GST Kerala',
    'ServiceFee': '-'
  },
  {
    'tarrifName': 'Default',
    'Location': 'Oberon Mall',
    'CPID': 'GOEC1',
    'Value': 15,
    'Tax': 'GST Kerala',
    'ServiceFee': '-'
  },
  {
    'tarrifName': 'Default',
    'Location': 'Oberon Mall',
    'CPID': 'GOEC1',
    'Value': 15,
    'Tax': 'GST Kerala',
    'ServiceFee': '-'
  }
]

export default function UserTariff() {
  const [open,setOpen] = useState(false)
  return (
    <Box>
      <AssignTariff open={open} onClose={()=>{setOpen(false)}}/>
      <LastSynced heading={'Tarrif'} showButton={true} handleClick={()=>{setOpen(true)}}/>
      <Grid container sx={{ p: { xs: 2, md: 4 } }} spacing={2}>
        {
          tariffData.map((item) => (
            <Grid item xs={12} md={3} lg={3} xl={2}>
              <TariffCard data={item} />
            </Grid>
          ))
        }
      </Grid>
    </Box>
  )
}
