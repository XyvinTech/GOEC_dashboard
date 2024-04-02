import React, { useState } from "react";
import LastSynced from "../../../layout/LastSynced";
import StyledSearchField from "../../../ui/styledSearchField";
import { Box } from "@mui/material";
import StyledTable from "../../../ui/styledTable";
import { searchAndFilter } from "../../../utils/search";
import { DummyData } from "../../../assets/json/AccountTransactions";
import RightDrawer from "../../../ui/RightDrawer";
import { tableHeaderReplace } from "../../../utils/tableHeaderReplace";
import Filter from "../filter";


const tableHeader = [
  'User name',
  'Date',
  'Invoice Type',
  'Invoice ID',
  'Total Amount',
  'Status',
  'Initiated By',
  'Order ID',
  'Reference',
]


export default function AccountTrans({ data,updateData }) {
  const [filterValue, setFilterValue] = useState("");
  const accData = tableHeaderReplace(data, ["user", "createdAt", "type", "invoice_id", "amount", "status", "initiated_by", "transactionId", "reference"], tableHeader);
  const tableActionClick = (e) => {
    console.log(e);
  };


  return (
    <>
      <LastSynced heading="Account Transactions"reloadHandle={updateData} >
        <StyledSearchField
          placeholder={"Search"}
          onChange={(e) => {
            setFilterValue(e.target.value);
          }}
        />
        {/* <RightDrawer>
          <Filter onSubmited={updateData} />
        </RightDrawer> */}
      </LastSynced>
      <Box sx={{ p: 3 }}>
        <StyledTable
          headers={tableHeader}
          data={searchAndFilter(accData, filterValue)}
          onActionClick={tableActionClick}
          actions={["Download Invoice","Resend Mail"]}
        />
      </Box>
    </>
  );
}
