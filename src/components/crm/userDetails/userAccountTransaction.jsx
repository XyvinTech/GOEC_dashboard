import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import LastSynced from "../../../layout/LastSynced";
import StyledTable from "../../../ui/styledTable";
import { accountTransactionData } from "../../../assets/json/crm";
import { getWalletTransaction } from "../../../services/transactionApi";
import { useLocation, useParams } from "react-router-dom";
import { tableHeaderReplace } from "../../../utils/tableHeaderReplace";

function restructureData(dataArray) {
    return dataArray.map(item => ({
      _id: item._id,
      date: item.createdAt,
      type: item.type,
      transactionId: item.transactionId,
      amount: item.amount,
      status: item.status,
      paymentMode: "Online",
    }));
  }

const tableHeader = [
  "Date",
  "InvoiceType",
  "Transaction ID",
  "Total Amount",
  "Status",
  "Payment mode",
];

export default function UserAccountTransactiomn() {
  const { id } = useParams();
  const [transactionData, setTransactionData] = useState([])

  const getData = async () => {
    const postData = {
      user: id,
     
    };
    const res = await getWalletTransaction(postData);
    console.log(res);
    setTransactionData(res.result);
  };

  useEffect(() => {
    getData();
  }, [id]);

  const transData = tableHeaderReplace(transactionData, ["date","type", "transactionId", "amount", "status", "paymentMode"], tableHeader);

  return (
    <Box>
      <LastSynced heading={"Account Transactions"} />
      <Box sx={{ p: { xs: 2, md: 4 } }}>
        <StyledTable
          headers={tableHeader}
          data={transData}
          showActionCell={true}
          actions={["view"]}
          onActionClick={(e) => {
            console.log(e);
          }}
        />
      </Box>
    </Box>
  );
}
