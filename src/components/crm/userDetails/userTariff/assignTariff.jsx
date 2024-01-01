import { Box, Dialog, Stack, Typography } from '@mui/material'
import React from 'react'
import StyledInput from '../../../../ui/styledInput'
import StyledWarning from '../../../../ui/styledWarning'
import { ReactComponent as Close } from "../../../../assets/icons/close-icon-large.svg";
import { AccountCircle, Autorenew, ErrorOutlineOutlined, Phone, WarehouseOutlined, Warning } from '@mui/icons-material'
import StyledDivider from '../../../../ui/styledDivider';
import StyledButton from '../../../../ui/styledButton';
import StyledSelectField from '../../../../ui/styledSelectField';


const UserNameComponent = ({ isuser = false }) => {
    return (
        <Stack direction={'row'} sx={{ p: 2, justifyContent: 'space-between', backgroundColor: 'secondary.lightGray', borderRadius: '4px', border: '1px solid #fff3' }} >
            {isuser ?
                <Stack direction={'row'} spacing={2}>
                    <AccountCircle sx={{ color: 'secondary.contrastText' }} />
                    <Typography variant='h6' color={'secondary.contrastText'}>Anish Vikende</Typography>
                </Stack> :
                <Typography variant='h6' color={'secondary.contrastText'}>No user Found</Typography>
            }
            <Autorenew sx={{ color: 'secondary.contrastText' }} />
        </Stack>
    )
}


export default function AssignTariff({ open, onClose, ...props }) {
    return (
        <Dialog open={open} maxWidth={'sm'} fullWidth onClose={onClose && onClose}>
            <Box sx={{ backgroundColor: 'secondary.main' }}>
                <Stack sx={{ p: 4 }} spacing={1}>
                    <Stack direction={'column'} spacing={2} >
                        <Typography variant='subtitle2' sx={{ color: 'secondary.contrastText' }}>Person</Typography>
                        <StyledInput icon={<Phone />} placeholder={'Enter Person Phone number'} value={250} />
                        <StyledWarning icon={<ErrorOutlineOutlined sx={{ color: 'error.main' }} />} value={'Please enter the Amount'} />
                    </Stack>

                    <UserNameComponent isuser={true} />

                    <Stack direction={'column'} spacing={2} >
                        <Typography variant='subtitle2' sx={{ color: 'secondary.contrastText' }}>Charger Location </Typography>
                        <StyledSelectField placeholder={'Select Location'} />
                    </Stack>

                    <Stack direction={'column'} spacing={2} >
                        <Typography variant='subtitle2' sx={{ color: 'secondary.contrastText' }}>CPID </Typography>
                        <StyledSelectField placeholder={'Select Location'} />
                    </Stack>

                </Stack>
                <Stack direction={'row'} sx={{ backgroundColor: 'secondary.main', px: 3, py: 2 }} spacing={2} justifyContent={'center'}>
                    <StyledButton variant={'secondary'} style={{ width: '130px', height: '48px' }} onClick={() => { onClose && onClose() }}>Cancel</StyledButton>
                    <StyledButton variant={'primary'} style={{ width: '180px', height: '48px' }}>Assign</StyledButton>
                </Stack>
            </Box>
        </Dialog>
    )
}
