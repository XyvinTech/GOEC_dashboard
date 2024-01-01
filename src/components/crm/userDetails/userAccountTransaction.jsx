import { Box } from '@mui/material';
import React from 'react'
import LastSynced from '../../../layout/LastSynced';
import StyledTable from '../../../ui/styledTable';
import { accountTransactionData } from '../../../assets/json/crm';

const tableHeader = [
    'Date',
    'InvoiceType',
    'Invoice ID',
    'Total Amount',
    'Status',
    'Tranaction',
    'Payment mode',
    'Order ID',
    'External Payment reference',
]

export default function UserAccountTransactiomn() {
    return (
        <Box>
            <LastSynced heading={'Charging Transactions'} />
            <Box sx={{ p: { xs: 2, md: 4 } }}>
                <StyledTable headers={tableHeader} data={accountTransactionData} showActionCell={true} actions={['view']} onActionClick={(e) => { console.log(e); }} />
            </Box>
        </Box>
    )
}
