import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import ChargingTariff from "../components/tariff/chargingTariff/ChargingTariff.jsx";
import { getChargingTariffList } from "../services/chargingTariffAPI.js";

export default function CTariff() {

  const [tariffListData, setTariffListData] = useState([]);
  const [isChange, setIsChange] = useState(false);
  const [pageNo, setPageNo] = useState(1);
  const [totalCount, setTotalCount] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const headers = [
    "Name",
    "Value",
    "Service fee(INR)",
    "Created on",
    "Last updated",
    "Tax",
  ];

  const getTariffData = (filter={pageNo})=>{
    if(searchQuery){
      filter.searchQuery = searchQuery;
    }
    getChargingTariffList(filter).then((res)=>{
      if(res){
        setTariffListData(res.result);
        setTotalCount(res.totalCount);
      }
    })
  }

  useEffect(() => {
    getTariffData()
  }, [isChange, pageNo, searchQuery])

  return (
    <Box>
      <ChargingTariff data={tariffListData} setSearchQuery={setSearchQuery} setPageNo={setPageNo} totalCount={totalCount} headers={headers} onIsChange={setIsChange} isChange={isChange} updateData={getTariffData}/>
    </Box>
  );
}
