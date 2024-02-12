import { Box } from '@mui/material'
import React, { useState } from 'react'
import StyledTable from '../../../ui/styledTable'
import LastSynced from '../../../layout/LastSynced'
import { useNavigate } from 'react-router-dom'
import StyledSearchField from '../../../ui/styledSearchField'
import { searchAndFilter } from '../../../utils/search'
import { tableHeaderReplace } from '../../../utils/tableHeaderReplace'
import { deleteChargingStation } from '../../../services/stationAPI'

const tableHeader = [
  'Charge Station',
  'Address',
  'Longitude',
  'Latitude',
  'Owner'
]

export default function AllChargeStation({ data, deleteData,editData, ...props }) {
  const navigate = useNavigate()


  const [filterValue, setFilterValue] = useState('')

  const chargeStationData = tableHeaderReplace(data, ['name', 'address', 'longitude', 'latitude', 'owner', 'status'], tableHeader)
  const tableActionClick = (e) => {
    if (e.action === 'View') {
      navigate(`/charge-station-detail/${e.data._id}`)
    } else if (e.action === 'Delete') {
      deleteData(e.data)
    }else if (e.action === 'Edit') {
      editData(e.data)
    }
  }
  return (
    <>

      <LastSynced heading="Charge Stations" >
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
