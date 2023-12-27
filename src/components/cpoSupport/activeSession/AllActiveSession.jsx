import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import StyledSearchField from '../../../ui/styledSearchField'
import StyledTable from '../../../ui/styledTable'
import { ReactComponent as ReloadIcon } from '../../../assets/icons/reload.svg'
import { DummyData } from '../../../assets/json/ActiveSessionsData'
const tableHeader = [
  'OCPP Txn ID',
  'User Name',
  'Charge Station Name',
  'Date',
  'CPID',
  'Connector ID',
  'Start Soc',
  'Current Soc',
  'Duration(Min)',
  'Units Consumed(kWh)',
  'Charge Speed(kW)',
  'Last Meter Received',
  'Transaction Mode',
  'Terminate Session'

]
export default function ActiveSession() {
  return (
    <>

<Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'primary.grey',
          p: 2,
          m:2,
        }}>
        <Stack direction={'column'} sx={{ mb: 2 }}>
          <Typography variant='body1' sx={{ color: 'secondary.contrastText' }}>Active Sessions</Typography>
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
        <StyledTable headers={tableHeader} data={DummyData}/>
      </Box>

    </>
  )
}
