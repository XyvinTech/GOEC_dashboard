import React, { useState } from "react";
import LastSynced from "../../../layout/LastSynced";
import StyledTable from "../../../ui/styledTable";
import { Box, Dialog, Modal, Stack, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
import StyledDivider from "../../../ui/styledDivider";
import ChargingSummary from "./ChargingSummary";
import { tableHeaderReplace } from "../../../utils/tableHeaderReplace";
import StyledSearchField from "../../../ui/styledSearchField";
import Filter from "../filter";
import RightDrawer from "../../../ui/RightDrawer";
import { searchAndFilter } from "../../../utils/search";
const tableHeader = [
  "Transaction ID",
  "Date",
  "Username",
  "Transaction Mode",
  "Units Consumed",
  "Location Name",
  "Duration (hh:mm:ss)",
  "Chargepoint ID",
  "Connector ID",
  "Total Amount",
  "CP Stop txn reason",
  "Closed by",
];

const newActions = ["View", "Download Invoice", "Resend Email"];

export default function AllChargingTransactions({ data, updateData, setPageNo, totalCount, setSearchQuery }) {
  const [open, setOpen] = useState(false);
  const [action, setAction] = useState("");
  const [selectedData,setSelectData] = useState()

  const AllOcppTransactionData = tableHeaderReplace(data, ['transactionId', 'date', 'username', 'transactionMode', 'unitConsumed', 'location', 'duration', 'chargePointId', 'connectorId', 'totalAmount', 'closureReason', 'closeBy', 'vehicleNum', 'currentSoc', 'startSoc', 'id', 'meterStart', 'meterStop', 'startTime', 'endTime'], tableHeader)


  // Function to close the modal
  const handleClose = () => {
    setOpen(false);
  };
  const tableActionClick = (e) => {
    if (e.action === "View") {
      setAction("view");
      setSelectData(e.data)
      setOpen(true);
    }
  };

  const handleSearch = (value)=>{
    setSearchQuery(value)
}

  return (
    <>
      <LastSynced heading="Charging Transactions" reloadHandle={updateData}  >
        <StyledSearchField placeholder={'Search'} onChange={(e) => {
          handleSearch(e.target.value)
        }} />
        <RightDrawer>
          <Filter onSubmited={updateData} />
        </RightDrawer>
      </LastSynced>
      <Box sx={{ p: 3 }}>
        <StyledTable
          headers={tableHeader}
          data={AllOcppTransactionData}
          actions={newActions}
          onActionClick={tableActionClick}
          setPageNo={setPageNo}
          totalCount={totalCount}
        />
      </Box>

      {/* Modal */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="xs"
        fullWidth
      >
        <Box sx={modalStyle}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            p={2}
          >
            <Typography
              sx={{
                color: "secondary.greytext",
                fontSize: 18,
                fontWeight: 700,
              }}
            >
              Charging Summary
            </Typography>
            <Close onClick={handleClose} style={{ cursor: "pointer" }} />
          </Stack>
          <ChargingSummary datas={selectedData}/>
        </Box>
      </Dialog>
    </>
  );
}

// Modal style
const modalStyle = {
  width: "auto", // Adjust width to fit your content or screen
  bgcolor: "#1D1B20", // Dark background color
  boxShadow: 10,
  color: "#fff", // White text for better visibility on dark background
  outline: "none", // Remove the focus ring
};
