import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import StyledSearchField from '../../../ui/styledSearchField'
import StyledTable from '../../../ui/styledTable'
import { ReactComponent as ReloadIcon } from '../../../assets/icons/reload.svg'


import { AllChargePointsData } from '../../../assets/json/chargepoints'
import LastSynced from '../../../layout/LastSynced'
import { useNavigate } from 'react-router-dom'

export default function AllChargePoint() {
  const navigate = useNavigate()
  const tableActionClick = (e)=>{
    console.log(e);
    if(e.action==='View'){
      navigate('/charge-point-detail')
    }
  }
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
     <LastSynced heading="Charge Points" showSearchField={true} />
      <Box sx={{p:3}}>
        <StyledTable headers={tableHeader} data={AllChargePointsData} onActionClick={tableActionClick}/>
      </Box>
    </>
  )
}
