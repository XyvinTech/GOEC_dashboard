import { Box } from '@mui/material'
import React, { useState } from 'react'
import StyledTable from '../../../ui/styledTable'
import LastSynced from '../../../layout/LastSynced'
import { ChargeStationData } from '../../../assets/json/chargestations'
import { useNavigate } from 'react-router-dom'
import StyledSearchField from '../../../ui/styledSearchField'
import { searchAndFilter } from '../../../utils/search'

const tableHeader = [
  'Charge Station',
  'Address',
  'Longitude',
  'Latitude',
  'Owner',
  'status'
]

export default function AllChargeStation() {
  const navigate = useNavigate()

  const [filterValue, setFilterValue] = useState('')

  const tableActionClick = (e) => {
    if (e.action === 'View') {
      navigate('/charge-station-detail')
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
        <StyledTable headers={tableHeader} data={searchAndFilter(ChargeStationData, filterValue)} onActionClick={tableActionClick} />
      </Box>
    </>
  )
}
