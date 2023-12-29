import { Box} from '@mui/material'
import React from 'react'
import StyledTable from '../../../ui/styledTable'
import LastSynced from '../../../layout/LastSynced'
import { ChargeStationData } from '../../../assets/json/chargestations'
import { useNavigate } from 'react-router-dom'

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
  const tableActionClick = (e)=>{
    if(e.action==='View'){
      navigate('/charge-station-detail')
    }
  }
  return (
    <>

<LastSynced heading="Charge Stations" showSearchField={true} />

      <Box sx={{p:3}}>
        <StyledTable headers={tableHeader} data={ChargeStationData} onActionClick={tableActionClick}/>
      </Box>
    </>
  )
}
