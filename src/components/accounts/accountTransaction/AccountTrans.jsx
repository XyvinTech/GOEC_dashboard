import React, { useState } from "react";
import LastSynced from "../../../layout/LastSynced";
import StyledSearchField from "../../../ui/styledSearchField";
import { Box } from "@mui/material";
import StyledTable from "../../../ui/styledTable";
import { searchAndFilter } from "../../../utils/search";
import { DummyData } from "../../../assets/json/AccountTransactions";
import RightDrawer from "../../../ui/RightDrawer";

export default function AccountTrans() {
  const [filterValue, setFilterValue] = useState("");

  const tableActionClick = (e) => {
    console.log(e);
  };

  const tableHeader = [
    'User name',
    'Date',
    'Invoice Type',
    'Invoice ID',
    'Total Amount',
    'Status',
    'Transaction',
    'Order ID',
    'External Payment reference',
  ]

  return (
    <>
      <LastSynced heading="Charge Points">
        <StyledSearchField
          placeholder={"Search"}
          onChange={(e) => {
            setFilterValue(e.target.value);
          }}
        />
        <RightDrawer />
      </LastSynced>
      <Box sx={{ p: 3 }}>
        <StyledTable
          headers={tableHeader}
          data={searchAndFilter(DummyData, filterValue)}
          onActionClick={tableActionClick}
        />
      </Box>
    </>
  );
}
