import React, { useState } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { ReactComponent as ReloadIcon } from '../../../../assets/icons/reload.svg'
import StyledSearchField from '../../../../ui/styledSearchField'
import { Tune, FileDownloadOutlined } from '@mui/icons-material'
import StyledTable from '../../../../ui/styledTable'
import { transactionData } from '../../../../assets/json/chargepoints'
import LastSynced from '../../../../layout/LastSynced'
import { searchAndFilter } from '../../../../utils/search'

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
    'Closed by'

]


export default function Transactions() {
    const [filterValue, setFilterValue] = useState('')
    return (
        <>
            <LastSynced heading={'Transactions'}>
                <StyledSearchField placeholder={'Search'} onChange={(e) => {
                    setFilterValue(e.target.value)
                }} />
                <StyledIconButton icon={<Tune sx={{ color: 'secondary.contrastText' }} />} />
                <StyledIconButton icon={<FileDownloadOutlined sx={{ color: 'secondary.contrastText' }} />} />
            </LastSynced>
            <Box sx={{ p: 3 }}>
                <StyledTable headers={tableHeader} data={searchAndFilter(transactionData, filterValue)} />
            </Box>
        </>
    )
}
