import { useState } from "react";
import { Box, Grid, IconButton, Stack, Typography, Avatar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

import { styled } from "@mui/material";
import { ReactComponent as ReloadIcon } from '../../../assets/icons/reload.svg'
import { ReactComponent as Notification } from '../../../assets/icons/notification.svg'
import { ArrowBackIosNew } from '@mui/icons-material'
import UserSidebar from "../userDetails/userSidebar";
import { useNavigate } from "react-router-dom";

export default function UserDetailsLayout({children,onOptionChanged, ...props}) {
    const navigate = useNavigate()
    const [open,setOpen] = useState(false)
    return (
        <>
            <Stack direction={'row'} sx={{position:"sticky",top:0,left:0,width:'100vw',height:'70px', backgroundColor: 'secondary.main', p: 3, alignItems: 'center' }} spacing={2}>
                <IconButton
                    onClick={()=>{setOpen(true)}}
                    sx={{
                        display: {
                            xs: 'inline-flex',
                            lg: 'none'
                        }
                    }}
                >
                    <MenuIcon fontSize="small" />
                </IconButton>
                <ArrowBackIosNew sx={{ cursor: 'pointer',display: {xs: 'none',lg: 'inline-flex'} }} onClick={() => { navigate(-1) }} />
                <Typography variant='h6' color={'secondary.contrastText'}>CRM / User Details</Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ paddingRight: '25px' }}>
                    <Notification />
                </Box>
                <Typography sx={{
                    color: 'primary.DimText',
                    display: { xs: 'none', md: 'inline-flex' }
                }} variant='subtitle2'>Jackie Chan</Typography>

                <Avatar
                    sx={{
                        cursor: 'pointer',
                        height: 40,
                        width: 40,
                        ml: 1,
                        bgcolor: 'secondary.button'
                    }}

                >
                </Avatar>
            </Stack>
            <UserSidebar open={open} onClose={()=>{setOpen(false)}} onChanged={onOptionChanged} />               
                <Box pl={{lg:32}}>
                    {children}
                </Box>   
        </>
    )
}