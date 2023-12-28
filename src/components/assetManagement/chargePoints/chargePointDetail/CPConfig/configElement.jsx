import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import StyledInput from '../../../../../ui/styledInput'
import StyledButton from '../../../../../ui/styledButton'


export default function ConfigElement({ label, data, ...props }) {
    return (
        <Stack direction={'row'} sx={{justifyContent:'space-between',alignItems:'center'}} props>
            <Typography>{label}</Typography>
            <Stack direction={'row'} spacing={1}>
                <Button sx={{backgroundColor:'secondary.button',color:'primary.DimText',width:'150px'}}>{data}</Button>
                <StyledInput defaultValue={data} style={{width:'150px',textAlign:'center'}}/>
                <StyledButton style={{backgroundColor:'#0047C2',color:'#fffc',width:'150px'}}>Save</StyledButton>
            </Stack>
        </Stack>
    )
}
