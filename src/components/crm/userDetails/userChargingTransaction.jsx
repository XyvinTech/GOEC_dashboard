import { Box } from '@mui/material';
import React from 'react'
import LastSynced from '../../../layout/LastSynced';
import StyledTable from '../../../ui/styledTable';
import { chargingTransactionData } from '../../../assets/json/crm';

const tableHeader = [
    'Transaction ID',
    'Date',
    'Transaction Mode',
    'Units Consumed',
    'Location Name',
    'Duration(hh:mm:ss)',
    'chargepoint ID',
    'Connector ID',
    'Total Amount',
    'CP Stop txn reason',
    'Close by'     
  ] 

export default function userChargingTransaction() {
  return (
    <Box>
        <LastSynced heading={'Charging Transactions'} showSearchField={true} />
        <Box sx={{p:{xs:2,md:4}}}>
        <StyledTable  headers={tableHeader} data={chargingTransactionData} showActionCell={true} actions={['view']} onActionClick={(e)=>{console.log(e);}} />
        </Box>
     </Box>
  )
}
