import React from 'react'
import { Box, Grid, Pagination, PaginationItem, Stack, Typography } from '@mui/material'
import { ReactComponent as ReloadIcon } from '../../../assets/icons/reload.svg'
import { Star, DeleteOutline, ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
import LastSynced from '../../../layout/LastSynced'


const ReviewComponent = () => {
    return (
        <Box sx={{ p: 1 }}>
            <Stack direction={'column'} spacing={1}>
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <Stack direction={'row'} alignItems={'center'} spacing={1}>
                        <Typography color={'primary.contrastText'}>Name</Typography>
                        <Stack direction={'row'}>
                            {[1, 2, 3, 4, 5].map((item) => (
                                <Star fontSize='14px' sx={{ color: '#F2C94C' }} />
                            ))}
                        </Stack>
                    </Stack>
                    <DeleteOutline sx={{ cursor: 'pointer', color: 'rgba(255,255,255,0.5)', fontSize: '22px' }} />
                </Stack>
                <Typography variant='subtitle2' sx={{ fontWeight: 300, color: 'secondary.contrastText' }}>
                    Lorem ipsum dolor sit amet consectetur. Adipiscing mauris urna nisl aliquam nibh. Et elementum dignissim dictum nunc quis consequat tristique vulputate. A et odio varius et viverra dis risus.
                </Typography>
                <Typography variant='subtitle2' sx={{ color: 'rgba(255, 255, 255, 0.50)', fontSize: '12px', fontWeight: 300 }}>22.03.22</Typography>
            </Stack>
        </Box>
    )
}

export default function UserReview() {
    return (
        <>
            <LastSynced heading={'Reviews'} />
            <Box sx={{ backgroundColor: '#1D1B20', /*maxHeight: {xs:'1000px',md:'500px'},*/ borderRadius: '4px', m: { xs: 1, md: 4 }, p: 2 }}>
                <Grid container spacing={{ xs: 1, md: 3 }}>
                    {
                        [1, 2, 3, 4, 5].map((item) => (
                            <Grid item XS={12} md={4}>
                                <ReviewComponent />
                            </Grid>
                        ))
                    }
                </Grid>
                <Box p={2} sx={{display:'flex',justifyContent:'center'}}>
                    <Pagination sx={{color:'#fff'}} count={10} size="small"
                    renderItem={(item) => ( 
                        <PaginationItem
                            components={{  
                                previous: ArrowBackIos,  
                                next: ArrowForwardIos  
                            }} 
                            {...item} 
                            sx={{backgroundColor:'secondary.button',color:'#fff'}}
                        /> 
                    )} 
                    />
                </Box>
            </Box>
        </>
    )
}
