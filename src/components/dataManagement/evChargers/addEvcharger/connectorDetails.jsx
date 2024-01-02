
import { Box, Dialog, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import StyledDivider from '../../../../ui/styledDivider'
import StyledSelectField from '../../../../ui/styledSelectField'
import StyledInput from '../../../../ui/styledInput'
import { ReactComponent as Close } from "../../../../assets/icons/close-icon-large.svg";
import StyledButton from '../../../../ui/styledButton'

export default function ConnectorDetails({ open, onClose, connectorNumber = 2 }) {
    return (
        <Dialog
            open={open}
            fullWidth

        >
            <Box sx={{ backgroundColor: 'primary.main' }}>
                <Stack direction={'row'} sx={{ justifyContent: 'space-between', px: 2, py: 2, alignItems: 'center' }}>
                    <Typography color={'primary.contrastText'} variant='h6'>Connector Details</Typography>
                    <Close style={{ cursor: 'pointer' }} onClick={() => { onClose && onClose() }} />
                </Stack>
                <StyledDivider />
                {
                    [...Array(connectorNumber)].map((ele,index) =>
                    (
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography sx={{ color: 'primary.contrastText' }} p={2}>
                                    Connector {index +1}
                                </Typography>
                                <Grid container direction={{ xs: "column", md: "row" }} spacing={2} p={2}>
                                    <Grid item xs={12} md={6}>
                                        <Stack spacing={1}>
                                            <Typography variant='subtitle2' sx={{ color: 'secondary.contrastText' }}>Type</Typography>
                                            <StyledSelectField placeholder={"Enter Output type"} />
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Stack spacing={1}>
                                            <Typography variant='subtitle2' sx={{ color: 'secondary.contrastText' }}>Energy(kwh)</Typography>
                                            <StyledInput placeholder={'Enter Value'} />
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <StyledDivider />
                        </Grid>
                    )
                    )
                }
                <Stack direction={'row'} sx={{ justifyContent: 'end', px: 2, py: 2, alignItems: 'center', backgroundColor: 'secondary.main' }} spacing={2}>
                    <StyledButton variant='secondary' style={{ width: '140px', height: '45px' }} onClick={() => { onClose && onClose() }}>Cancel</StyledButton>
                    <StyledButton variant='primary' style={{ width: '140px', height: '45px' }} >Save</StyledButton>
                </Stack>
            </Box>
        </Dialog>
    )
}
