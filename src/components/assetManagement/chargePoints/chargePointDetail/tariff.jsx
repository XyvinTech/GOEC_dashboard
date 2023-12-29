import React from 'react'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { ReactComponent as ReloadIcon } from '../../../../assets/icons/reload.svg'
import StyledSearchField from '../../../../ui/styledSearchField'
import { Tune, FileDownloadOutlined } from '@mui/icons-material'
import StyledTable from '../../../../ui/styledTable'
import { chargerLogData } from '../../../../assets/json/chargepoints'
import StyledButton from '../../../../ui/styledButton'
import AssignTarrif from './tariff/assignTarrif'




export default function Tariff() {
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
            <StyledButton variant={'primary'} style={{ width: '160px' }}>Assign Tariff</StyledButton>
        </Box>
            <Grid container p={2}>
                <Grid item xs={12} md={2}>
                    <AssignTarrif />
                </Grid>
            </Grid>
        </>
    )
}
