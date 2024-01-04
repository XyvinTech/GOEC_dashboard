import { Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function DashboardDataCard({title,subTitle,value}) {
    return (
        <Stack direction={"column"} sx={{backgroundColor:'secondary.main',borderRadius:'4px',p:2}} >
            <Typography
                variant="caption"
                sx={{
                    color: "primary.DimText",
                    fontSize: "14px",
                    fontWeight: "400",
                }}
            >
                {title}
            </Typography>
            <Typography
                variant="caption"
                sx={{
                    color: "primary.DimText",
                    fontSize: "14px",
                    fontWeight: "400",
                }}
            >
                {subTitle}
            </Typography>
            <Box sx={{ height: "91 px" }}>
                <Box
                    direction={"column"}
                    spacing={"5px"}
                    sx={{
                        mt: 2,
                        borderLeft: "3px solid ",
                        borderImage:
                            "linear-gradient(100deg, #ED5DCD -2.24%, rgba(95, 93, 215, 0.71) 98.06%) 10",
                        borderRadius: 8,
                        pl: 2,
                        py: 0,
                    }}
                >
                    <Typography variant="h5">{value}</Typography>
                </Box>
            </Box>
        </Stack>
    )
}
