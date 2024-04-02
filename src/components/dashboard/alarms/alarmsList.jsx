import React, { useState } from 'react'
import LastSynced from '../../../layout/LastSynced'
import StyledSearchField from '../../../ui/styledSearchField'
import { Box, IconButton } from '@mui/material'
import { Tune } from '@mui/icons-material'
import StyledTable from '../../../ui/styledTable'
import { searchAndFilter } from '../../../utils/search'
import { tableHeaderReplace } from '../../../utils/tableHeaderReplace'
import RightDrawer from '../../../ui/RightDrawer'
import Filter from './filter'


const tableHeader = [
  'CPID',
  'Generated on',
  'Summary',
  'Connector ID',
  'Connector status',
  'Error code'
]

export default function AlarmsList({data, dataReload, setPageNo, totalCount }) {

  const [filterValue, setFilterValue] = useState('')

  const tabledata = tableHeaderReplace(data,['cpid','date','summary','connectorId','status','errorCode'],tableHeader)

  return (
    <>
      <LastSynced heading="Charge Points" reloadHandle={dataReload}>
        <StyledSearchField placeholder={'Search'} onChange={(e) => {
          setFilterValue(e.target.value)
        }} />
        <RightDrawer>
          <Filter onSubmited={dataReload}/>
        </RightDrawer>
      </LastSynced>
      <Box sx={{ p: 3 }}>
        <StyledTable headers={tableHeader} data={tabledata} setPageNo={setPageNo} totalCount={totalCount} showActionCell={false} />
      </Box>
    </>
  )
}
