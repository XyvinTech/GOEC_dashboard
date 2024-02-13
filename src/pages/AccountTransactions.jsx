import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AccountTrans from '../components/accounts/accountTransaction/AccountTrans'
import { getTransactionList } from '../services/transactionApi'

function AccountTransactions() {

  const [transactData, setTransactData] = useState([]);

  const getTaxData = () => {
    getTransactionList().then((res) => {
      if (res) {
        setTransactData(res.result);
      }
    })
  }

  useEffect(() => {
    getTaxData()
  }, [])

  return (
    <Box>
      {transactData && <AccountTrans data={transactData} updateData={getTaxData} />}
    </Box>
  )
}

export default AccountTransactions