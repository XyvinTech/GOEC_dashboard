import { Box } from '@mui/material';
import React from 'react'
import LastSynced from '../../../layout/LastSynced';
import StyledTable from '../../../ui/styledTable';
import { favouritesData } from '../../../assets/json/crm';

const tableHeader = [
    'ChargeStation',
    'Address',
    'Longitude',
    'Latitude',
    'Owner'
]

export default function UserFavourites() {
    return (
        <Box>
            <LastSynced heading={'Charging Transactions'} />
            <Box sx={{ p: { xs: 2, md: 4 } }}>
                <StyledTable headers={tableHeader} data={favouritesData} showActionCell={true} actions={['view']} onActionClick={(e) => { console.log(e); }} />
            </Box>
        </Box>
    )
}
