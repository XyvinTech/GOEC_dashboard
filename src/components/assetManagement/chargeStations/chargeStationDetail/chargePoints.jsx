import React,{useState} from 'react'
import { Box, Dialog, Stack, Typography } from '@mui/material'
import { ReactComponent as ReloadIcon } from '../../../../assets/icons/reload.svg'
import StyledButton from '../../../../ui/styledButton'
import StyledTable from '../../../../ui/styledTable'
import { chargePointsData } from '../../../../assets/json/chargepoints'
import AddChargePoint from '../../chargePoints/AddChargePoint'
export default function ChargePoints() {
  const tableHeader = [
    'CPID',
    'OEM',
    'Model',
    'Tariff',
    'Status',
    'Published'
  ]

  const [open,setOpen] = useState(false)
  return (
    <>
          <Dialog
      open={open}
    >
         <AddChargePoint/>
    </Dialog>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'primary.grey',
          p: 2,
        }}>
        <Stack direction={'column'} sx={{ ml: 2 }}>
          <Typography variant='body1' sx={{ color: 'secondary.contrastText' }}>Charge-points</Typography>
          <Stack direction={'row'} spacing={1}>
            <Typography sx={{ color: 'secondary.greytext', fontSize: 12 }}>Last synced</Typography>
            <Typography sx={{ color: 'success.main', fontSize: 12 }}>4 minutes ago</Typography>
            <ReloadIcon style={{ cursor: 'pointer' }} />
          </Stack>
        </Stack>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ mr: 3 }}>
          <StyledButton variant='primary' style={{width:'200px',height:'45px',fontSize:'17px',fontWeight:'300'}} onClick={()=>setOpen(true)}> Add Chargepoint</StyledButton>
        </Box>
      </Box>
      <Box sx={{p:3}}>
        <StyledTable headers={tableHeader} data={chargePointsData} />
      </Box>
    </>
  )
}
