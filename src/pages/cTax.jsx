import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Tax from "../components/tariff/tax/Tax";
import { getTaxList } from "../services/taxAPI";

export default function CTax() {
  const [taxListData, setTaxListData] = useState([]);
  const [isChange, setIsChange] = useState(false);

  const headers = [
    "Name",
    "Description",
    "Created on",
  ];

  const getTaxData = ()=>{
    getTaxList().then((res)=>{
      if(res){
        setTaxListData(res);
      }
    })
  }

  useEffect(() => {
    getTaxData()
  }, [isChange])
  

  return (
    <Box>
      <Tax data={taxListData} headers={headers} onIsChange={setIsChange} isChange={isChange}/>
    </Box>
  );
}
