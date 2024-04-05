import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AccountTrans from '../components/accounts/accountTransaction/AccountTrans'
import { getTransactionList } from '../services/transactionApi'

function AccountTransactions() {

  const [transactData, setTransactData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [totalCount, setTotalCount] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const getTaxData = (filter = {pageNo}) => {
    if(searchQuery){
      filter.searchQuery = searchQuery;
    }
    getTransactionList(filter).then((res) => {
      if (res) {
        setTransactData(res.result);
        setTotalCount(res.totalCount);
      }
    })
  }

  useEffect(() => {
    getTaxData()
  }, [pageNo, searchQuery])

  return (
    <Box>
      {transactData && <AccountTrans data={transactData} setPageNo={setPageNo} totalCount={totalCount} setSearchQuery={setSearchQuery} updateData={getTaxData} />}
    </Box>
  )
}

export default AccountTransactions