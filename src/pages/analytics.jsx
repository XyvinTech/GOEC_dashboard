import { Box } from '@mui/material'
import React, { useState } from 'react'
import StyledTab from '../ui/styledTab'
import Overview from '../components/dashboard/analytics/overview'
import Trends from '../components/dashboard/analytics/trends'
import Utilization from '../components/dashboard/analytics/utilization'

export default function Analytics() {
  const [tabIndex, setTabIndex] = useState(0)
  const tabOnChange = (e) => {
    setTabIndex(e.index)
  }
  return (
    <Box>
      <StyledTab buttons={['Overview', 'Trends', 'Utilization']} onChanged={tabOnChange} />
      <Box>
        {tabIndex === 0 ? <Overview /> : tabIndex === 1 ? <Trends /> : <Utilization/>}
      </Box>
    </Box>
  )
}
