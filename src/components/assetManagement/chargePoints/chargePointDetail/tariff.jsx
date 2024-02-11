import React, { useEffect, useState } from 'react'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { ReactComponent as ReloadIcon } from '../../../../assets/icons/reload.svg'
import StyledSearchField from '../../../../ui/styledSearchField'
import { Tune, FileDownloadOutlined } from '@mui/icons-material'
import StyledTable from '../../../../ui/styledTable'
import { chargerLogData } from '../../../../assets/json/chargepoints'
import StyledButton from '../../../../ui/styledButton'
import AssignedTarrif from './tariff/assignedTarrif'
import LastSynced from '../../../../layout/LastSynced'
import AssignTarrif from './tariff/assigntTarrif'
import { getChargerTarrifDetail } from '../../../../services/evMachineAPI'




export default function Tariff({ CPID }) {
    const [addOpen, setAddOpen] = useState(false)
    const [tarrifDetails, setTarrifDetails] = useState([])

    const init = () => {
        getChargerTarrifDetail(CPID).then((res) => {
            console.log(res);
            if (res.status) {
                setTarrifDetails(res.result)
            }
        })
    }

    useEffect(() => {
        init()
    }, [])



    return (
        <>
            <AssignTarrif open={addOpen} onClose={() => setAddOpen(false)} CPID={CPID} updated={init} />
            <LastSynced heading='Tariff'>
                <StyledButton variant={'primary'} style={{ width: '160px' }} onClick={() => setAddOpen(true)}>Assign Tariff</StyledButton>
            </LastSynced>
            <Grid container p={2}>
                {
                    tarrifDetails.map((dt, ind) => (
                        <Grid item xs={12} md={3} xl={2} key={ind}>
                            <AssignedTarrif data={dt} />
                        </Grid>
                    ))
                }

            </Grid>
        </>
    )
}
