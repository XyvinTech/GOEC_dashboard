import React, { useEffect, useState } from 'react'
import { Box, Dialog, Stack, Typography } from '@mui/material'
import { ReactComponent as ReloadIcon } from '../../../../assets/icons/reload.svg'
import StyledButton from '../../../../ui/styledButton'
import StyledTable from '../../../../ui/styledTable'
import AddChargePoint from '../../chargePoints/AddChargePoint'
import LastSynced from '../../../../layout/LastSynced'

const tableHeader = [
  'CPID',
  'OEM',
  'Model',
  'Tariff',
  'Status',
  'Published'
]


export default function ChargePoints({ data, ...props }) {


  const [open, setOpen] = useState(false)

  const [allChargePointsData, setAllChargePointsData] = useState([])
  useEffect(() => {
    const dt = data.map((item) => (
      {
        '_id': item._id,
        'CPID': item.CPID,
        'OEM': item.evModelDetails[0].oem,
        'Model': item.evModelDetails[0].model_name,
        'Tariff': item.chargingTariffDetails[0].tax_name,
        'Status': item.cpidStatus,
        'Published': item.published
      }))
    setAllChargePointsData(dt)
  }, [data])



  return (
    <>
      <Dialog
        open={open}
      >
        <AddChargePoint />
      </Dialog>
      <LastSynced heading={'Charge-points'}>
        <StyledButton variant='primary' style={{ width: '100%', height: '45px', fontSize: '14px', fontWeight: '400' }} onClick={() => setOpen(true)}> Add Chargepoint</StyledButton>
      </LastSynced>
      <Box sx={{ p: 3 }}>
        {data.lenght > 0 && <StyledTable headers={tableHeader} data={allChargePointsData} />}
      </Box>
    </>
  )
}
