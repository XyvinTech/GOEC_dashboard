import { Box } from '@mui/material'
import React, { useState } from 'react'
import StyledTab from '../ui/styledTab'
import Overview from '../components/dashboard/analytics/overview'
import Trends from '../components/dashboard/analytics/trends'
import Utilization from '../components/dashboard/analytics/utilization'
import AlarmsList from '../components/dashboard/alarms/alarmsList'
import AlarmSummary from '../components/dashboard/alarms/alarmSummary'

export default function Alarms() {
  const [tabIndex, setTabIndex] = useState(0)
  const tabOnChange = (e) => {
    setTabIndex(e.index)
  }
  return (
    <Box>
      <StyledTab buttons={['Alarms', 'Alarm Summary']} onChanged={tabOnChange} />
      <Box>
        {tabIndex === 0 ? <AlarmsList /> : <AlarmSummary />}
      </Box>
    </Box>
  )
}
