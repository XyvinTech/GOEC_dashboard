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
import RightDrawer from '../../../../ui/RightDrawer'
import Filter from './chargerLog/filter'
import { exportExcelData } from '../../../../utils/excelExport'
import StyledIconButton from '../../../../ui/stylediconButton'

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
    const [detailOpen, setDetailOpen] = useState(false)
    const [pageNo, setPageNo] = useState(1);
    const [totalCount, setTotalCount] = useState(1);

    useEffect(() => {
        init()
    }, [pageNo])
    const init = (filter={pageNo}) => {
        getTransactionById(CPID,filter).then((res) => {
            if (res.success) {
                setTransactionList(tableHeaderReplace(res.result, ['transactionId', 'date', 'username', 'transactionMode', 'unitConsumed', 'location', 'duration', 'chargePointId', 'totalAmount', 'closureReason'], tableHeader))
                setTotalCount(res.totalCount);
            }
        })
    }

    const actionclickHandle = (e) => {
        if (e.action === 'View') {
            setDetailOpen(true)
        }
    }
    return (
        <>
            <TransactionDetails open={detailOpen} onClose={() => { setDetailOpen(false) }} />
            <LastSynced heading={'Transactions'} reloadHandle={init}>
                <StyledSearchField placeholder={'Search'} onChange={(e) => {
                    setFilterValue(e.target.value)
                }} />
                <RightDrawer>
                    <Filter onSubmited={init} />
                </RightDrawer>
                <StyledIconButton icon={<FileDownloadOutlined sx={{ color: 'secondary.contrastText', cursor: 'pointer' }} />}
                    onClick={() => { exportExcelData(transactionList, "Transaction") }}
                />
            </LastSynced>
            <Box sx={{ p: 3 }}>
                <StyledTable headers={tableHeader} data={transactionList} setPageNo={setPageNo} totalCount={totalCount} actions={['Resend email', 'Download Invoice ', 'View']} onActionClick={actionclickHandle} />
            </Box>
        </>
    )
}
