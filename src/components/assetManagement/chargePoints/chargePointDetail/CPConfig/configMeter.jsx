import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import StyledButton from '../../../../../ui/styledButton'
import StyledSelectField from '../../../../../ui/styledSelectField'
import { Clear } from '@mui/icons-material'


const ChipBox = ({ lable, ...props }) => {
    return (
        <Stack direction={'row'} sx={{backgroundColor:'secondary.lightGray',alignItems:'center',px:2,py:1,borderRadius:'20px',justifyContent:'space-between'}}>
            <Typography>{lable}</Typography>
            <Clear sx={{fontSize:'20px'}}/>
        </Stack>
    )
}

export default function ConfigMeter({ title, selectData, chipData, ...props }) {
    return (
        <Box sx={{ backgroundColor: 'primary.grey', p: 2 }}>
            <Stack direction={"column"} spacing={1}>
                <Typography>{title}</Typography>
                <Stack direction={'row'} spacing={3} sx={{ p: 3 }}>
                    <StyledSelectField placeholder={'Select'} />
                    <StyledButton style={{ backgroundColor: '#0047C2', color: '#fffc', width: '150px' }}>save</StyledButton>
                </Stack>
                <Grid container spacing={2}>
                    {
                        chipData.map((item) => (
                            <Grid item md={1.7}>
                                <ChipBox lable={item} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Stack>
        </Box>
    )
}
