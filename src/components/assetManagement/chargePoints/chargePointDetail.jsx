import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Stack } from '@mui/system'
import { ArrowBackIosNew } from '@mui/icons-material'
import StyledTab from '../../../ui/styledTab'
import CPAction from './chargePointDetail/CPAction'
import CPConfig from './chargePointDetail/CPConfig'
import Transactions from './chargePointDetail/transactions'

import ChargePointDetailsAnalytics from './chargePointDetail/chargePointDetailsAnalytics'
import ChargePointDetailsCard from './chargePointDetail/chargePointDetailsCard'
import ChargePointDetailsAction from './chargePointDetail/chargePointDetailsAction'
import ChargePointDetailsConnectors from './chargePointDetail/chargePointDetailsConnectors'
import ChargerLog from './chargePointDetail/chargerLog'
import Alarm from './chargePointDetail/alarm'
import Tariff from './chargePointDetail/tariff'

import { useLocation, useNavigate } from 'react-router-dom'
import { getEvMachineById } from '../../../services/evMachineAPI'
import StyledBackdropLoader from '../../../ui/styledBackdropLoader'
import { clearCache, reset, unlock } from '../../../services/ocppAPI'
import { toast } from 'react-toastify'


export default function ChargePointDetail() {
    const navigate = useNavigate()
    const { state } = useLocation();
    const [toggleOption, setToggleoption] = useState(0)
    const [loaderOpen, setLoaderOpen] = useState(true)
    const [chargepointData, setChargepointData] = useState()



    const init = () => {
        getEvMachineById(state._id).then((res) => {
            console.log(res.result);
            if (res.status) {
                setChargepointData(res.result)
            }
            setLoaderOpen(false)
        })
    }

    useEffect(() => {
        init()
    }, [])



    const onChangeToggleOption = (e) => {
        setToggleoption(e.index)
    }

    const actionButtonHandle = (button) => {
        if (button === "hard") {
            let formData = new FormData()
            formData.append("type", "Hard")
            reset(chargepointData.CPID, formData).then((res) => {
                if (res.status) {
                    toast.success(res.message)
                } else {
                    toast.error(res.message)
                }
            }).catch((error) => {
                toast.error(error.message)
            })
        } else if (button === "soft") {
            let formData = new FormData()
            formData.append("type", "Soft")
            reset(chargepointData.CPID, formData).then((res) => {
                if (res.status) {
                    toast.success(res.message)
                } else {
                    toast.error(res.message)
                }
            }).catch((error) => {
                toast.error(error.message)
            })
        } else if (button == "cache") {
            clearCache(chargepointData.CPID).then((res) => {
                if (res.status) {
                    toast.success(res.message)
                } else {
                    toast.error(res.message)
                }
            }).catch((error) => {
                toast.error(error.message)
            })
        }
    }

    const connectorUnlock = (connectorId) => {
        unlock(chargepointData.CPID, { connectorId: connectorId }).then((res) => {
            if (res.status) {
                toast.success(res.message)
            }else{
                toast.error(res.message)
            }
        }).catch((error)=>{
            toast.error(error.message)
        })
    }
    return (
        <>
            <StyledBackdropLoader open={loaderOpen} />
            <Stack direction={'row'} sx={{ backgroundColor: 'secondary.main', p: 3 }} spacing={2}>
                <ArrowBackIosNew sx={{ cursor: 'pointer' }} onClick={() => { navigate(-1) }} />
                <Typography variant='h6' color={'secondary.contrastText'}>Charge Point Details</Typography>
            </Stack>
            <Grid container spacing={2} sx={{ p: { xs: 1, md: 4 } }}>
                <Grid item xs={12} md={5} >
                    <ChargePointDetailsCard data={chargepointData} />
                </Grid>
                <Grid item xs={12} md={7} >
                    <Grid container spacing={1.5}>
                        <Grid item xs={12} md={5}>
                            <ChargePointDetailsAction buttonClickHandle={actionButtonHandle} />
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <ChargePointDetailsConnectors data={chargepointData && chargepointData} unlockButtonHandle={connectorUnlock} />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <ChargePointDetailsAnalytics data={chargepointData}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <StyledTab buttons={['CP Action', 'CP config', 'Transaction', 'Charger logs', 'Alarm', 'Tariff']} onChanged={onChangeToggleOption} />
            {toggleOption === 0 ? <CPAction /> : toggleOption === 1 ? <CPConfig /> : toggleOption === 2 ? <Transactions /> : toggleOption === 3 ? <ChargerLog /> : toggleOption === 4 ? <Alarm CPID={chargepointData && chargepointData.CPID}/> : <Tariff />}
        </>
    )
}
