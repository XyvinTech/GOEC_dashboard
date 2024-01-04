import React from 'react'
import LastSynced from '../../../layout/LastSynced'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { PieChart } from '@mui/x-charts'
import { Circle } from '@mui/icons-material';

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
    return (
        <><LastSynced heading={'Analytics - Overview'} /><Box>
            <Grid container p={2}>
                <Grid item xs={12} md={4}>
                    <Box sx={{ backgroundColor: 'secondary.main', borderRadius: '4px' }}>
                        <Stack direction={'column'} p={2}>
                            <Typography variant='subtitle2' color={'secondary.contrastText'}>Connector Status</Typography>
                            <Typography variant='subtitle2' color={'secondary.contrastText'}>115 total connectors</Typography>
                            <Grid container >
                                <Grid item xs={8}>
                                    <PieChart
                                        colors={['#3CEE88', '#E29A5B', '#EB7575', '#378EAA', '#BA6ADF', '#39383D']}
                                        series={[
                                            {
                                                data: items,
                                                highlightScope: { faded: 'global', highlighted: 'item' },
                                                faded: { innerRadius: 20, additionalRadius: -20, color: 'gray' },
                                            },
                                        ]}
                                        width={370}
                                        height={370}
                                        slotProps={{
                                            legend: {
                                                hidden: true
                                            },

                                        }
                                        }
                                    />
                                </Grid>
                                <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Stack direction={'column'} sx={{ alignItems: 'start' }} spacing={2}>
                                        {
                                            labels.map((item) => (
                                                <Stack direction={'row'} spacing={1}>
                                                    <Circle sx={{color:`${item.color}`}} />
                                                    <Typography color={'secondary.contrastText'}>{item.label}</Typography>
                                                </Stack>
                                            )

                                            )
                                        }
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
        </Box></>
    )
}
