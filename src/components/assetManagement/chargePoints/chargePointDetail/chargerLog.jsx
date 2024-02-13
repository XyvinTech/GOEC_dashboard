import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { ReactComponent as ReloadIcon } from '../../../../assets/icons/reload.svg'
import StyledSearchField from '../../../../ui/styledSearchField'
import { Tune, FileDownloadOutlined } from '@mui/icons-material'
import StyledTable from '../../../../ui/styledTable'
import { chargerLogData } from '../../../../assets/json/chargepoints'
import LastSynced from '../../../../layout/LastSynced'
import StyledIconButton from '../../../../ui/stylediconButton'
import { getMachineLog } from '../../../../services/ocppAPI'
import { tableHeaderReplace } from '../../../../utils/tableHeaderReplace'
import { searchAndFilter } from '../../../../utils/search'


const tableHeader = [
    'Connector Id',
    'Time',
    'Command',
    'Payload Data',
    'Unique ID'
]


export default function ChargerLog({ CPID }) {
    const [filterValue, setFilterValue] = useState('')
    const [logList, setLogList] = useState([])
    useEffect(() => {
        init()
    }, [])
    const init = () => {
        getMachineLog(CPID).then((res) => {
            if (res.status) {
                setLogList(tableHeaderReplace(res.result, ['connectorId', 'date', 'command', 'payload', 'uniqueId'], tableHeader))
            }
        })
    }
    return (
        <><LastSynced heading={'Charger logs'} reloadHandle={init}>
            <StyledSearchField placeholder={'Search'} onChange={(e) => {
                setFilterValue(e.target.value)
            }} />
            <StyledIconButton icon={<Tune sx={{ color: 'secondary.contrastText' }} />} />
            <StyledIconButton icon={<FileDownloadOutlined sx={{ color: 'secondary.contrastText' }} />} />
        </LastSynced>
            <Box sx={{ p: 3, overflow: 'scroll' }}>
                <StyledTable headers={tableHeader} data={searchAndFilter(logList, filterValue)} showActionCell={false} />
            </Box>
        </>
    )
}
