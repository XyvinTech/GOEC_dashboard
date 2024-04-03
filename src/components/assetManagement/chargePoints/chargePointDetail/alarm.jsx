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
import RightDrawer from '../../../../ui/RightDrawer'
import Filter from './alarm/filter'

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
    const [pageNo, setPageNo] = useState(1);
    const [totalCount, setTotalCount] = useState(1);

    useEffect(() => {
        init()
    }, [pageNo])
    const init = (dt={pageNo}) => {
        getAlarmsById(CPID,dt).then((res) => {
            if (res.status) {
                setAlarmList(tableHeaderReplace(res.result, ['cpid', 'date', 'summary', 'connectorId', 'status', 'errorCode'], tableHeader))
                setTotalCount(res.totalCount);
            }
        })
    }

    return (
        <>
            <LastSynced heading="Alarms" reloadHandle={init}>
                <StyledSearchField placeholder={'Search'} onChange={(e) => {
                    setFilterValue(e.target.value)
                }} />
                <RightDrawer>
                    <Filter onSubmited={init} />
                </RightDrawer>
            </LastSynced>
            <Box sx={{ p: 3, overflow: 'scroll' }}>
                <StyledTable headers={tableHeader} setPageNo={setPageNo} totalCount={totalCount} data={alarmList} showActionCell={false} />
            </Box>
        </>
    )
}
