import { Box} from '@mui/material'
import React from 'react'
import StyledTable from '../../../ui/styledTable'
import LastSynced from '../../../layout/LastSynced'
import { ChargeStationData } from '../../../assets/json/chargestations'

const tableHeader = [
  'Charge Station',
  'Address',
  'Longitude',
  'Latitude',
  'Owner'
]

export default function AllChargeStation() {
  return (
    <>

<LastSynced heading="Charge Stations" showSearchField={true} />

      <Box sx={{p:3}}>
        <StyledTable headers={tableHeader} data={ChargeStationData}/>
      </Box>
    </>
  )
}
