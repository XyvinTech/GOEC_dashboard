import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Tax from "../components/tariff/tax/Tax";
import { getTaxList } from "../services/taxAPI";

export default function CTax() {
  const [taxListData, setTaxListData] = useState([]);
  const [isChange, setIsChange] = useState(false);
  const [pageNo, setPageNo] = useState(1);
  const [totalCount, setTotalCount] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const headers = [
    "Name",
    "Description",
    "Created on",
  ];

  const getTaxData = (filter={pageNo})=>{
    if(searchQuery){
      filter.searchQuery = searchQuery;
    }
    getTaxList(filter).then((res)=>{
      if(res){
        setTaxListData(res.taxs);
        setTotalCount(res.totalCount);
      }
    })
  }

  useEffect(() => {
    getTaxData()
  }, [isChange, pageNo, searchQuery])
  

  return (
    <Box>
      <Tax data={taxListData} setPageNo={setPageNo} totalCount={totalCount} headers={headers} onIsChange={setIsChange} isChange={isChange} updateData={getTaxData} setSearchQuery={setSearchQuery}/>
    </Box>
  );
}
