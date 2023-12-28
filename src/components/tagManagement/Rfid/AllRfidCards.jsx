import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { ReactComponent as ReloadIcon } from '../../../assets/icons/reload.svg'
import StyledTable from '../../../ui/styledTable'
import { DummyData } from '../../../assets/json/RfidTableData'
import StyledButton from '../../../ui/styledButton'
import LastSynced from '../../../layout/LastSynced'


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
     <LastSynced heading="RFID Cards"/>
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
