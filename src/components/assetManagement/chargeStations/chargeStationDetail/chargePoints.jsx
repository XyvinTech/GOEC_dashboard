import React, { useEffect, useState } from 'react'
import { Box, Dialog, Stack, Typography } from '@mui/material'
import { ReactComponent as ReloadIcon } from '../../../../assets/icons/reload.svg'
import StyledButton from '../../../../ui/styledButton'
import StyledTable from '../../../../ui/styledTable'
import { chargePointsData } from '../../../../assets/json/chargepoints'
import AddChargePoint from '../../chargePoints/AddChargePoint'
import { tableHeaderReplace } from '../../../../utils/tableHeaderReplace'

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
    setAllChargePointsData(tableHeaderReplace(data, ['CPID', 'name', 'type', 'charger_tariff', 'cpidStatus', 'cpidStatus', 'type'], tableHeader))
  }, [data])



  return (
    <>
      <Dialog
        open={open}
      >
        <AddChargePoint />
      </Dialog>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'primary.grey',
          p: { sx: 1, md: 2 },
        }}>
        <Stack direction={'column'} sx={{ ml: 2 }}>
          <Typography variant='body1' sx={{ color: 'secondary.contrastText' }}>Charge-points</Typography>
          <Stack direction={'row'} spacing={1}>
            <Typography sx={{ color: 'secondary.greytext', fontSize: 12 }}>Last synced</Typography>
            <Typography sx={{ color: 'success.main', fontSize: 12 }}>4 minutes ago</Typography>
            <ReloadIcon style={{ cursor: 'pointer' }} />
          </Stack>
        </Stack>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ px: 1 }}>
          <StyledButton variant='primary' style={{ width: '100%', height: '45px', fontSize: '14px', fontWeight: '400' }} onClick={() => setOpen(true)}> Add Chargepoint</StyledButton>
        </Box>
      </Box>
      <Box sx={{ p: 3 }}>
        <StyledTable headers={tableHeader} data={allChargePointsData} />
      </Box>
    </>
  )
}
