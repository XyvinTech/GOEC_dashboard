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
import RightDrawer from '../../../../ui/RightDrawer'
import Filter from './chargerLog/filter'
import { exportExcelData } from '../../../../utils/excelExport'


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
    const [pageNo, setPageNo] = useState(1);
    const [totalCount, setTotalCount] = useState(1);

    useEffect(() => {
        init()
    }, [pageNo])
    const init = (filter={pageNo}) => {
        getMachineLog(CPID,filter).then((res) => {
            if (res.status) {
                setLogList(tableHeaderReplace(res.result, ['connectorId', 'date', 'command', 'payload', 'uniqueId'], tableHeader))
                setTotalCount(res.totalCount);
            }
        })
    }
    return (
        <><LastSynced heading={'Charger logs'} reloadHandle={init}>
            <StyledSearchField placeholder={'Search'} onChange={(e) => {
                setFilterValue(e.target.value)
            }} />
            <RightDrawer>
                <Filter onSubmited={init}/>
            </RightDrawer>
            <StyledIconButton icon={<FileDownloadOutlined sx={{ color: 'secondary.contrastText',cursor:'pointer' }} />}
            onClick = {()=>{exportExcelData(logList,"Charger Log")}}
            />
        </LastSynced>
            <Box sx={{ p: 3, overflow: 'scroll' }}>
                <StyledTable headers={tableHeader} setPageNo={setPageNo} totalCount={totalCount} data={searchAndFilter(logList, filterValue)} showActionCell={false} />
            </Box>
        </>
    )
}
