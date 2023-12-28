import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import StyledTable from '../../../ui/styledTable'
import { DummyData } from '../../../assets/json/VidTableData'
import StyledButton from '../../../ui/styledButton'
import LastSynced from '../../../layout/LastSynced'

const tableHeader = [
  'VID Tag',
  'User Name',
  'Created On',
  'Expires On',
  'Balance',
  'Status'
]

export default function AllVidCards() {
  return (
    <>
      <LastSynced heading="VID Cards"/>
      <Box sx={{p:3}}>
        <Box display="flex" justifyContent="flex-end">
            <StyledButton variant='secondary' width='150' mr='10'>Add</StyledButton>
        </Box>
        <StyledTable headers={tableHeader} data={DummyData}/>
      </Box>
    </>
  )
}
