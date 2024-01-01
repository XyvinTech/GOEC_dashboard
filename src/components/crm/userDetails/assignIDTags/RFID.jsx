import { Box, Dialog } from '@mui/material';
import React, { useState } from 'react'
import LastSynced from '../../../../layout/LastSynced';
import StyledTable from '../../../../ui/styledTable';
import { RFIDData } from '../../../../assets/json/crm';
import AssignRFID from './assignRFID';

const tableHeader = [
    'RFID tag',
    'Created on',
    'Expires on',
    'Validity',
    'Status'
]

export default function RFID() {

    const [open,setopen] = useState(false)
    return (
        <Box>
            <Dialog fullWidth maxWidth={'md'} open={open} onClose={()=>{setopen(false)}}>
                <AssignRFID />
            </Dialog>
            <LastSynced heading={'Assigned RFID'} showButton={true}  handleClick={()=>{setopen(true)}}/>
            <Box sx={{ p: { xs: 2, md: 4 } }}>
                <StyledTable headers={tableHeader} data={RFIDData} showActionCell={true} actions={['Unassign', 'view', 'Delete']} onActionClick={(e) => { console.log(e); }} />
            </Box>
        </Box>
    )
}