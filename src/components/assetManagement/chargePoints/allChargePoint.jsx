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
  const navigate = useNavigate()

  const [filterValue, setFilterValue] = useState('')
  const tableActionClick = (e) => {
    if (e.action === 'View') {
      navigate(`/charge-point-detail`)
    }
  }

  const AllChargePointsData = tableHeaderReplace(data, ['CPID', 'name', 'type', 'charger_tariff', 'power', 'cpidStatus','type'], tableHeader)
  console.log(data);
  console.log(AllChargePointsData);
  return (
    <>
      <LastSynced heading="Charge Points" >
        <StyledSearchField placeholder={'Search'} onChange={(e) => {
          setFilterValue(e.target.value)
        }} />
        <StyledButton variant={'primary'} style={{ width: '100%' }}>Add Chargpoint</StyledButton>
      </LastSynced>
      <Box sx={{ p: 3 }}>
        <StyledTable headers={tableHeader} data={searchAndFilter(AllChargePointsData, filterValue)} onActionClick={tableActionClick} />
      </Box>
    </>
  )
}
