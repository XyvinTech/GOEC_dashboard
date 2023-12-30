import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import LastSynced from '../../layout/LastSynced'
import StyledInput from '../../ui/styledInput'
import StyledSelectField from '../../ui/styledSelectField'
import StyledButton from '../../ui/styledButton'
import CustomerCard from './searchCustomer/customerCard'

const selectOptions = [
    { value: 'number', label: 'Phone Number' },
    { value: 'email', label: 'Email' }
]

const customerData = [
    {
        name: 'Avinash Vekende'
    },
    {
        name: 'Avinash'
    },
    {
        name: 'Avinash Vekende'
    },
    {
        name: 'Avinash'
    },
]
export default function SearchCustomers() {
    return (
        <Box>
            <LastSynced heading={'Search Customer'} />
            <Stack direction={'column'} spacing={1} sx={{ backgroundColor: 'secondary.main', m: 4, py: 4, px: 4, borderRadius: 2 }}>
                <Typography>Search by</Typography>
                <Stack spacing={2} direction={{ xs: 'column', md: 'row' }}>
                    <StyledSelectField options={selectOptions} placeholder={'select Search Option'} />
                    <StyledInput placeholder={'Phone Number'} />
                    <StyledButton variant='primary' style={{ width: { sx: '250px', md: '100%' } }}>Search</StyledButton>
                </Stack>
            </Stack>
            <Grid container spacing={1} px={4}>
                {
                    customerData.map((item) => (
                        <Grid item xs={12} md={4} lg={3} xl={2}>
                            <CustomerCard data={item} />
                        </Grid>
                    )
                    )

                }
            </Grid>
        </Box>
    )
}
