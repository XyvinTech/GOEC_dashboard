import React, { useState } from 'react'
import LastSynced from '../../../layout/LastSynced'
import StyledSearchField from '../../../ui/styledSearchField'
import { Box, IconButton } from '@mui/material'
import { Tune } from '@mui/icons-material'
import StyledTable from '../../../ui/styledTable'
import { AlarmListData } from '../../../assets/json/dashboard'
import { searchAndFilter } from '../../../utils/search'



const tableHeader = [
  'CPID',
  'Generated on',
  'Summary',
  'Connector ID',
  'Connector status',
  'Error code'
]

export default function AlarmsList() {

  const [filterValue, setFilterValue] = useState('')
  return (
    <>
      <LastSynced heading="Charge Points">
        <StyledSearchField placeholder={'Search'} onChange={(e) => {
          setFilterValue(e.target.value)
        }} />
        <IconButton sx={{ backgroundColor: 'secondary.button', borderRadius: '4px', px: 2 }}><Tune /></IconButton>
      </LastSynced>
      <Box sx={{ p: 3 }}>
        <StyledTable headers={tableHeader} data={searchAndFilter(AlarmListData, filterValue)} showActionCell={false} />
      </Box>
    </>
  )
}
