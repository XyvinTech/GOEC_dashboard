import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import ChargingTariff from "../components/tariff/chargingTariff/ChargingTariff.jsx";
import { getChargingTariffList } from "../services/chargingTariffAPI.js";

export default function CTariff() {

  const [tariffListData, setTariffListData] = useState([]);
  const [isChange, setIsChange] = useState(false);

  const headers = [
    "Name",
    "Value",
    "Service fee(INR)",
    "Created on",
    "Last updated",
    "Tax",
  ];

  const getTariffData = ()=>{
    getChargingTariffList().then((res)=>{
      if(res){
        setTariffListData(res.result);
      }
    })
  }

  useEffect(() => {
    getTariffData()
  }, [isChange])

  return (
    <Box>
      <ChargingTariff data={tariffListData} headers={headers} onIsChange={setIsChange} isChange={isChange} updateData={getTariffData}/>
    </Box>
  );
}
