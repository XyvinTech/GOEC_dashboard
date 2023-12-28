import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { ReactComponent as ReloadIcon } from '../../../assets/icons/reload.svg'
import StyledTable from '../../../ui/styledTable'
import { DummyData } from '../../../assets/json/RfidTableData'
import StyledButton from '../../../ui/styledButton'

const tableHeader = [
    'RFID Tag',
    'User Name',
    'Created On',
    'Expires On',
    'Balance',
    'Status'
  ]


const AllRfidCards = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'primary.grey',
          p: 2,
          m:2
        }}>
        <Stack direction={'column'} sx={{ ml: 2 }}>
          <Typography variant='body1' sx={{ color: 'secondary.contrastText' }}>RFID CArds</Typography>
          <Stack direction={'row'} spacing={1}>
            <Typography sx={{ color: 'secondary.greytext', fontSize: 12 }}>Last synced</Typography>
            <Typography sx={{ color: 'success.main', fontSize: 12 }}>4 minutes ago</Typography>
            <ReloadIcon style={{ cursor: 'pointer' }} />
          </Stack>
        </Stack>
        <Box sx={{ flexGrow: 1 }} />
       
      </Box>
      <Box sx={{p:3}}>
        <Box display="flex" justifyContent="flex-end">
            <StyledButton variant='secondary' width='150' mr='10'>Add</StyledButton><StyledButton variant='primary' width='150' >Add Bulk</StyledButton>
        </Box>
        <StyledTable headers={tableHeader} data={DummyData}/>
      </Box>
    </>
  )
}

export default AllRfidCards
