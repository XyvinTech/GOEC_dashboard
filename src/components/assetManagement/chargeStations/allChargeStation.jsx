import { Box } from '@mui/material'
import React, { useState } from 'react'
import StyledTable from '../../../ui/styledTable'
import LastSynced from '../../../layout/LastSynced'
import { useNavigate } from 'react-router-dom'
import StyledSearchField from '../../../ui/styledSearchField'
import { searchAndFilter } from '../../../utils/search'
import { tableHeaderReplace } from '../../../utils/tableHeaderReplace'

const tableHeader = [
  'Charge Station',
  'Address',
  'Longitude',
  'Latitude',
  'Owner',
  'status'
]

export default function AllChargeStation({data, ...props}) {
  const navigate = useNavigate()
  

  const [filterValue, setFilterValue] = useState('')
  
  const chargeStationData = tableHeaderReplace(data,['name','address','longitude','latitude','owner','status'],tableHeader) 
  const tableActionClick = (e) => {
    if (e.action === 'View') {
      navigate('/charge-station-detail',{state:e.data})
    }
  }
  return (
    <>

      <LastSynced heading="Charge Stations">
        <StyledSearchField placeholder={'Search'} onChange={(e) => {
          setFilterValue(e.target.value)
        }} />
      </LastSynced>
      <Box sx={{ p: 3 }}>
        <StyledTable headers={tableHeader} data={searchAndFilter(chargeStationData, filterValue)} onActionClick={tableActionClick} />
      </Box>
    </>
  )
}
