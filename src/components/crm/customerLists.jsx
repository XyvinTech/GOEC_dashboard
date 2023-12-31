 import { Box } from '@mui/material'
import React from 'react'
import LastSynced from '../../layout/LastSynced'
import StyledTable from '../../ui/styledTable'
import { customerListData } from '../../assets/json/crm'

const tableHeader = [
  'Name',
  'Phone Number',
  'Email',
  'RFID',
  'VID',
  'Tariff',  
]
 
 export default function CustomerLists() {
  return (
     <Box>
        <LastSynced heading={'Customers List'} showSearchField={true} />
        <Box sx={{p:{xs:2,md:4}}}>
        <StyledTable  headers={tableHeader} data={customerListData} showActionCell={true} actions={['view']} onActionClick={(e)=>{console.log(e);}} />
        </Box>
     </Box>
   )
 }
 