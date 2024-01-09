import { Skeleton } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { TableCell } from './styledTable'

export default function TableSkeleton({ tableHeader }) {
    return (
        [...Array(5)].map((dt, ind) => (
            <tr key={ind} style={{padding:0}}>
                {tableHeader.map((_data, index) => (
                    <TableCell
                        key={index}
                        
                    >
                        <Skeleton sx={{ bgcolor: 'grey.900' }} animation="pulse" variant="rounded" width={'100%'} height={20} />
                    </TableCell>
                ))
                }
            </tr>
        ))
    )
}
