import React, { useEffect } from 'react'
import { Box, IconButton, Stack, Typography } from '@mui/material'
import { ReactComponent as ReloadIcon } from '../../../../assets/icons/reload.svg'
import StyledSearchField from '../../../../ui/styledSearchField'
import { Tune, FileDownloadOutlined } from '@mui/icons-material'
import StyledTable, { TableHeader } from '../../../../ui/styledTable'
import { alarmData } from '../../../../assets/json/chargepoints'
import { useState } from 'react'
import { getAlarmsById } from '../../../../services/ocppAPI'
import LastSynced from '../../../../layout/LastSynced'
import { tableHeaderReplace } from '../../../../utils/tableHeaderReplace'
import { searchAndFilter } from '../../../../utils/search'

const StyledIconButton = ({ icon, ...props }) => {
    return (
        <Stack sx={{ backgroundColor: '#322F3B', px: 2, justifyContent: 'center', alignItems: 'center', borderRadius: '4px' }} props>
            {icon && icon}
        </Stack>
    )
}

const tableHeader = [
    'CPID',
    'Generated on',
    'Summary',
    'Connector ID',
    'Connector status',
    'Error code'
]


export default function Alarm({ CPID }) {
    const [filterValue, setFilterValue] = useState('')

    const [alarmList, setAlarmList] = useState([])
    useEffect(() => {
        init()
    }, [])
    const init = ()=>{
        getAlarmsById(CPID).then((res) => {
            if (res.status) {
                setAlarmList(tableHeaderReplace(res.result,['cpid','date','summary','connectorId','status','errorCode'],tableHeader) )
            }
        })
    }

    return (
        <>
            <LastSynced heading="Alarms" reloadHandle={init}>
                <StyledSearchField placeholder={'Search'} onChange={(e) => {
                    setFilterValue(e.target.value)
                }} />
                <IconButton sx={{ backgroundColor: 'secondary.button', borderRadius: '4px', px: 2 }}><Tune /></IconButton>
            </LastSynced>
            <Box sx={{ p: 3, overflow: 'scroll' }}>
                <StyledTable headers={tableHeader} data={searchAndFilter(alarmList, filterValue)} showActionCell={false} />
            </Box>
        </>
    )
}
