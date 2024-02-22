import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import StyledTab from '../ui/styledTab'
import AlarmsList from '../components/dashboard/alarms/alarmsList'
import AlarmSummary from '../components/dashboard/alarms/alarmSummary'
import { getAlarmSummary, getAlarms } from '../services/ocppAPI'

export default function Alarms() {
  const [tabIndex, setTabIndex] = useState(0)
  const [alarmList,setAlarmList] = useState([])
  const [summaryData,setSummaryData] = useState()
  const tabOnChange = (e) => {
    setTabIndex(e.index)
  }


  useEffect(() => {
    init()
  }, [])
  const init= ()=>{
    getAlarmsList()
    getAlarmSummaryData()
  }

  const getAlarmsList = (dt={})=>{
    getAlarms(dt).then((res)=>{
      if (res.status) {
        setAlarmList(res.result)
      }
    })
  }

  const getAlarmSummaryData = () =>{
    getAlarmSummary().then(res=>{
      console.log(res);
      if (res.status) {
        setSummaryData(res.result)
      }
    })
  }
  
  return (
    <Box>
      <StyledTab buttons={['Alarms', 'Alarm Summary']} onChanged={tabOnChange} />
      <Box>
        {tabIndex === 0 ? <AlarmsList data={alarmList} dataReload={getAlarmsList} /> : (summaryData && <AlarmSummary data={summaryData} dataReload={getAlarmSummaryData} />)}
      </Box>
    </Box>
  )
}
