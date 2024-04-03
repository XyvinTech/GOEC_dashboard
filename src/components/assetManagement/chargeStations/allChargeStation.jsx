import { Box } from '@mui/material'
import React, { useState } from 'react'
import StyledTable from '../../../ui/styledTable'
import LastSynced from '../../../layout/LastSynced'
import { useNavigate } from 'react-router-dom'
import StyledSearchField from '../../../ui/styledSearchField'
import { searchAndFilter } from '../../../utils/search'
import { tableHeaderReplace } from '../../../utils/tableHeaderReplace'
import { deleteChargingStation } from '../../../services/stationAPI'
import { permissions } from '../../../core/routes/permissions'
import { useAuth } from '../../../core/auth/AuthContext'


const tableHeader = [
  'Charge Station',
  'Address',
  'Longitude',
  'Latitude',
  'Owner'
]

export default function AllChargeStation({ data, setPageNo, totalCount, deleteData, editData, reloadData, ...props }) {
  const navigate = useNavigate()
  const { userCan } = useAuth()

  const [filterValue, setFilterValue] = useState('')

  const chargeStationData = tableHeaderReplace(data, ['name', 'address', 'longitude', 'latitude', 'owner', 'status'], tableHeader)
  const tableActionClick = (e) => {
    if (e.action === 'View') {
      navigate(`/charge-station-detail/${e.data._id}`)
    } else if (e.action === 'Delete') {
      deleteData(e.data)
    } else if (e.action === 'Edit') {
      editData(e.data)
    }
  }
  return (
    <>

      <LastSynced heading="Charge Stations" reloadHandle={reloadData} >
        <StyledSearchField placeholder={'Search'} onChange={(e) => {
          setFilterValue(e.target.value)
        }} />
      </LastSynced>
      <Box sx={{ p: 3 }}>
        <StyledTable headers={tableHeader} 
        setPageNo={setPageNo}
        totalCount={totalCount}
        data={chargeStationData}
        actions={userCan(permissions.chargingStations.modify) ? ["Edit","View","Delete"] : ["View"]} 
        onActionClick={tableActionClick} />
      </Box>
    </>
  )
}
