import React, { useEffect, useState } from 'react'
import { Box, Dialog } from '@mui/material'
import StyledButton from '../../../../ui/styledButton'
import StyledTable from '../../../../ui/styledTable'
import AddChargePoint from '../../chargePoints/AddChargePoint'
import LastSynced from '../../../../layout/LastSynced'
import { useNavigate } from 'react-router-dom'

const tableHeader = [
  'CPID',
  'OEM',
  'Model',
  'Tariff',
  'Status',
  'Published'
]


export default function ChargePoints({ data, ...props }) {
  const navigate = useNavigate()

  const [open, setOpen] = useState(false)

  const [allChargePointsData, setAllChargePointsData] = useState([])
  useEffect(() => {
    const dt = data.map((item) => (
      {
        '_id': item._id,
        'CPID': item.CPID,
        'OEM': item.evModelDetails[0].oem,
        'Model': item.evModelDetails[0].model_name,
        'Tariff': item.chargingTariffDetails[0] ? item.chargingTariffDetails[0].tax_name : '',
        'Status': item.cpidStatus,
        'Published': item.published
      }))
    setAllChargePointsData(dt)
  }, [data])
  const actionButtonHandle = (e) => {
    if (e.action === 'View') {
      navigate(`/charge-point-detail`, { state: e.data })
    }
  }


  return (
    <>
      <Dialog
        open={open}
      >
        <AddChargePoint onClose={() => setOpen(false)} />
      </Dialog>
      <LastSynced heading={'Charge-points'}>
        <StyledButton variant='primary' style={{ width: '100%', height: '45px', fontSize: '14px', fontWeight: '400' }} onClick={() => setOpen(true)}> Add Chargepoint</StyledButton>
      </LastSynced>
      <Box sx={{ p: 3 }}>
        {data.length > 0 && <StyledTable headers={tableHeader} data={allChargePointsData} actions={["View", "Edit"]} onActionClick={actionButtonHandle} />}
      </Box>
    </>
  )
}
