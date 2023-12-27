import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import StyledSearchField from '../../../ui/styledSearchField'
import StyledTable from '../../../ui/styledTable'
import { ReactComponent as ReloadIcon } from '../../../assets/icons/reload.svg'


import { AllChargePointsData } from '../../../assets/json/chargepoints'

export default function AllChargePoint() {
    const tableHeader = [
        'CPID',
        'OEM',
        'Model',
        'Tariff',
        'Station',
        'Status',
        'Published'
      ]

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'primary.grey',
          p: 2,
        }}>
        <Stack direction={'column'} sx={{ ml: 2 }}>
          <Typography variant='body1' sx={{ color: 'secondary.contrastText' }}>Charge Stations</Typography>
          <Stack direction={'row'} spacing={1}>
            <Typography sx={{ color: 'secondary.greytext', fontSize: 12 }}>Last synced</Typography>
            <Typography sx={{ color: 'success.main', fontSize: 12 }}>4 minutes ago</Typography>
            <ReloadIcon style={{ cursor: 'pointer' }} />
          </Stack>
        </Stack>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ mr: 3 }}>
          <StyledSearchField placeholder={'Search'} />
        </Box>
      </Box>
      <Box sx={{p:3}}>
        <StyledTable headers={tableHeader} data={AllChargePointsData}/>
      </Box>
    </>
  )
}
