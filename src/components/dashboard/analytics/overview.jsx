import React from 'react'
import LastSynced from '../../../layout/LastSynced'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { Circle } from '@mui/icons-material';
import { Pie } from 'react-chartjs-2';
import { useTheme } from '@emotion/react';
import DashboardDataCard from '../../../ui/dashboardDataCard';





const items = [
    { value: 70, label: 'Available' },
    { value: 20, label: 'Busy' },
    { value: 15, label: 'Faulted' },
    { value: 10, label: 'Finishing' },
    { value: 0, label: 'Preparing' },
    { value: 0, label: 'Unavailable' },
];

const labels = [
    { color: '#3CEE88', label: 'Available' },
    { color: '#E29A5B', label: 'Busy' },
    { color: '#EB7575', label: 'Faulted' },
    { color: '#378EAA', label: 'Finishing' },
    { color: '#BA6ADF', label: 'Preparing' },
    { color: '#39383D', label: 'Unavailable' },
]





export default function Overview() {
    const theme = useTheme();

    const data = {
        datasets: [
            {
                data: items.map((e) => e.value),
                backgroundColor: labels.map((e) => e.color),
                borderWidth: 0,
                borderColor: '#FFFFFF',
                hoverBorderColor: '#FFFFFF'
            },
        ],
        labels: labels.map((e) => e.label)
    };

    const options = {
        animation: true,
        plugins: {
            legend: {
                display: false,
                position: 'right',
                labels: {
                    boxWidth: 10,
                    boxHeight: 10,
                    borderRadius: 5,
                }
            },
        },
        responsive: true,
        tooltips: {
            backgroundColor: theme.palette.background.paper,
            bodyFontColor: theme.palette.text.secondary,
            borderColor: theme.palette.divider,
            borderWidth: 1,
            enabled: true,
            footerFontColor: theme.palette.text.secondary,
            intersect: false,
            mode: 'index',
            titleFontColor: theme.palette.text.primary
        }
    };
    return (
        <><LastSynced heading={'Analytics - Overview'} />
            <Grid container p={{ xs: 1, md: 2 }} spacing={1}>
                <Grid item xs={12} md={5} lg={4}>
                    <Box sx={{ backgroundColor: 'secondary.main', borderRadius: '4px' }}>
                        <Stack direction={'column'} p={{ xs: 1, md: 2 }}>
                            <Typography variant='subtitle2' color={'secondary.contrastText'}>Connector Status</Typography>
                            <Typography variant='subtitle2' color={'secondary.contrastText'}>115 total connectors</Typography>
                            <Grid container spacing={2} mt={2} >
                                <Grid item xs={8}>
                                    <Pie
                                        data={data}
                                        options={options}
                                    />
                                </Grid>
                                <Grid item xs={4} display={"flex"} alignItems={'center'}>
                                    <Stack direction={'column'} pr={2} spacing={1}>
                                        {
                                            labels.map((item) => (
                                                <Stack direction={'row'} alignItems={"center"} spacing={1}>
                                                    <Circle sx={{ color: `${item.color}`, fontSize: '17px' }} />
                                                    <Typography variant='body2' color={'secondary.contrastText'}>{item.label}</Typography>
                                                </Stack>
                                            ))
                                        }
                                    </Stack>

                                </Grid>
                            </Grid>
                        </Stack>
                    </Box>
                </Grid>


                <Grid item xs={12} md={7} lg={8}>
                    <Grid container spacing={2}>
                        <Grid item xs={6} sm={3} md={4}>
                            <DashboardDataCard title={'Charge Stations'} value={'59'} />
                        </Grid>

                        <Grid item xs={6} sm={3} md={4}>
                            <DashboardDataCard title={'Charge points'} value={'128'} />
                        </Grid>

                        <Grid item xs={6} sm={3} md={4}>
                            <DashboardDataCard title={'Active Sessions'} value={'8'} />
                        </Grid>

                        <Grid item xs={6} sm={3} md={4}>
                            <DashboardDataCard title={'Registered User'}  value={'4120'} />
                        </Grid>

                        <Grid item xs={6} sm={3} md={4}>
                            <DashboardDataCard title={'RFID'} value={'280'} />
                        </Grid>

                        <Grid item xs={6} sm={3} md={4}>
                            <DashboardDataCard title={'VID'}  value={'3'} />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={4}>
                            <DashboardDataCard title={'Revenue'} subTitle={'Earned(INR)'} value={'59'} />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DashboardDataCard title={'Energy'} subTitle={'Delivered(kWh)'} value={'128'} />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DashboardDataCard title={'Charging'} subTitle={'Transactions'} value={'59'} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid >

        </>
    )
}
