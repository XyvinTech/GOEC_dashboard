import React from 'react'
import StyledTable from '../../../ui/styledTable'

const tableHeader = [
    'Charge Station',
    'Address',
    'Owner',
    'status'
]

export default function TableContainer({data}) {
    return (
        <StyledTable headers={tableHeader} data={data} showActionCell={false}/>
    )
}
