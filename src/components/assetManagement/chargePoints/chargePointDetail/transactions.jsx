import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { ReactComponent as ReloadIcon } from '../../../../assets/icons/reload.svg'
import StyledSearchField from '../../../../ui/styledSearchField'
import { Tune, FileDownloadOutlined } from '@mui/icons-material'
import StyledTable from '../../../../ui/styledTable'
import { transactionData } from '../../../../assets/json/chargepoints'

const StyledIconButton = ({icon, ...props}) => {
    return (
        <Stack sx={{ backgroundColor: '#322F3B',px:2, justifyContent: 'center', alignItems: 'center', borderRadius: '4px' }} props>
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
    return (
        <><Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'primary.grey',
                justifyContent: 'space-between',
                p: 2
            }}>
            <Stack direction={'column'} sx={{ ml: 2 }}>
                <Typography variant='body1' sx={{ color: 'secondary.contrastText' }}>Transactions</Typography>
                <Stack direction={'row'} sx={{ alignItems: 'center' }} spacing={1}>
                    <Typography sx={{ color: 'secondary.greytext', fontSize: 12 }}>Last synced</Typography>
                    <Typography sx={{ color: 'success.main', fontSize: 12 }}>4 minutes ago</Typography>
                    <ReloadIcon style={{ cursor: 'pointer' }} />
                </Stack>

            </Stack>
            <Stack direction={'row'} spacing={2}>
                <StyledSearchField placeholder={'Search'} />
                <StyledIconButton icon={<Tune sx={{ color: 'secondary.contrastText' }} />} />
                <StyledIconButton icon={<FileDownloadOutlined sx={{ color: 'secondary.contrastText' }} />} />
            </Stack>
        </Box>
        <Box sx={{p:3,overflow:'scroll'}}>
        <StyledTable headers={tableHeader} data={transactionData} />
        </Box>
        </>
    )
}
