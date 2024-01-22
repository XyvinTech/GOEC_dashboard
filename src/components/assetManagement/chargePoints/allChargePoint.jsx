import { Box, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import StyledSearchField from '../../../ui/styledSearchField'
import StyledTable from '../../../ui/styledTable'
import { ReactComponent as ReloadIcon } from '../../../assets/icons/reload.svg'


// import { AllChargePointsData } from '../../../assets/json/chargepoints'
import LastSynced from '../../../layout/LastSynced'
import { useNavigate } from 'react-router-dom'
import StyledButton from '../../../ui/styledButton'
import { searchAndFilter } from '../../../utils/search'
import { tableHeaderReplace } from '../../../utils/tableHeaderReplace'

const tableHeader = [
  'CPID',
  'OEM',
  'Model',
  'Tariff',
  'Station',
  'Status',
  'Published'
]

export default function AllChargePoint({ data, ...props }) {
  console.log(data);
  const navigate = useNavigate()

  const [filterValue, setFilterValue] = useState('')
  const tableActionClick = (e) => {
    if (e.action === 'View') {
      navigate(`/charge-point-detail`)
    }
  }
  const AllChargePointsData = tableHeaderReplace(data, ['CPID', 'oem', 'evModel', 'chargingTariff', 'chargingStation', 'cpidStatus','published'], tableHeader)
  
  return (
    <>
      <LastSynced heading="Charge Points" >
        <StyledSearchField placeholder={'Search'} onChange={(e) => {
          setFilterValue(e.target.value)
        }} />
      </LastSynced>
      <Box sx={{ p: 3 }}>
        <StyledTable headers={tableHeader} data={searchAndFilter(AllChargePointsData, filterValue)} showActionCell={true} onActionClick={tableActionClick} />
      </Box>
    </>
  )
}
