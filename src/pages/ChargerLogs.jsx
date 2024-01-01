import React from 'react'
import AllChargerLogs from '../components/chargingNetwork/chargerLogs/AllChargerLogs'
import  {ChargerLogsData}  from '../assets/json/ChargerLogsData'
export default function ChargerLogs() {
  return (
    <div>
      <AllChargerLogs ChargerLogsData={ChargerLogsData}  />

    </div>
  )
}
