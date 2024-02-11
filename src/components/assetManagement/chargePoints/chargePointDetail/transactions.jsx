import React, { useState } from 'react'
import { Box, Stack } from '@mui/material'
import StyledSearchField from '../../../../ui/styledSearchField'
import { Tune, FileDownloadOutlined } from '@mui/icons-material'
import StyledTable from '../../../../ui/styledTable'
import LastSynced from '../../../../layout/LastSynced'
import { searchAndFilter } from '../../../../utils/search'
import { useEffect } from 'react'
import { getTransactionById } from '../../../../services/ocppAPI'
import { tableHeaderReplace } from '../../../../utils/tableHeaderReplace'
import TransactionDetails from './transaction/transactionDetails'

const StyledIconButton = ({ icon, ...props }) => {
    return (
        <Stack sx={{ backgroundColor: '#322F3B', px: 2, justifyContent: 'center', alignItems: 'center', borderRadius: '4px' }} props>
            {icon && icon}
        </Stack>
    )
}

const tableHeader = [
    'Transaction ID',
    'Date',
    'Username',
    'Transaction Mode',
    'Units Consumed',
    'Location Name',
    'Duration(hh:mm:ss)',
    'Chargepoint ID',
    'Total Amount',
    'CP Stop txn reason',
    // 'Closed by'

]


export default function Transactions({ CPID }) {
    const [filterValue, setFilterValue] = useState('')
    const [transactionList, setTransactionList] = useState([])
    const [detailOpen,setDetailOpen] = useState(false)
    useEffect(() => {
        getTransactionById(CPID).then((res) => {
            console.log(res);
            if (res.success) {
                console.log(res.result);
                setTransactionList(tableHeaderReplace(res.result, ['transactionId', 'date', 'username', 'transactionMode', 'unitConsumed', 'location', 'duration', 'chargePointId', 'totalAmount', 'closureReason'], tableHeader))
            }
        })
    }, [])


    const actionclickHandle = (e) => {
        if (e.action === 'View') {
            setDetailOpen(true)
        }
    }
    return (
        <>
        <TransactionDetails open={detailOpen} onClose={()=>{setDetailOpen(false)}}/>
            <LastSynced heading={'Transactions'}>
                <StyledSearchField placeholder={'Search'} onChange={(e) => {
                    setFilterValue(e.target.value)
                }} />
                <StyledIconButton icon={<Tune sx={{ color: 'secondary.contrastText' }} />} />
                <StyledIconButton icon={<FileDownloadOutlined sx={{ color: 'secondary.contrastText' }} />} />
            </LastSynced>
            <Box sx={{ p: 3 }}>
                <StyledTable headers={tableHeader} data={searchAndFilter(transactionList, filterValue)} actions={['Resend email', 'Download Invoice ', 'View']} onActionClick={actionclickHandle } />
            </Box>
        </>
    )
}
