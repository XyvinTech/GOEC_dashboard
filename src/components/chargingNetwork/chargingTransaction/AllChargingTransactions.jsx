import React, { useState } from "react";
import LastSynced from "../../../layout/LastSynced";
import StyledTable from "../../../ui/styledTable";
import { Box, Modal, Stack, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
import StyledDivider from "../../../ui/styledDivider";
import ChargingSummary from "./ChargingSummary";
import FilterNetwork from "../FilterNetwork";
import { tableHeaderReplace } from "../../../utils/tableHeaderReplace";
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

export default function AllChargingTransactions({ data }) {
  const [open, setOpen] = useState(false);
  const [action, setAction] = useState("");

  const AllOcppTransactionData = tableHeaderReplace(data, ['transactionId', 'startTime', 'user', 'transactionMode', 'totalUnits','cpid','endTime','cpid','connectorId','totalAmount','closureReason','closeBy'], tableHeader)


  // Function to close the modal
  const handleClose = () => {
    setOpen(false);
  };
  const tableActionClick = (e) => {
    if (e.action === "View") {
      setAction("view");
      setOpen(true);
    }
  };

  return (
    <>
      <LastSynced heading="Charging Transactions" showSearchField showFilterButton  />
      <Box sx={{ p: 3 }}>
        <StyledTable
          headers={tableHeader}
          data={AllOcppTransactionData}
          actions={newActions}
          onActionClick={tableActionClick}
        />
      </Box>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="charging-transaction"
        aria-describedby="summary"
      >
        <Box sx={modalStyle}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={2}
            my={2}
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
          <StyledDivider />
          <ChargingSummary />
        </Box>
      </Modal>
    </>
  );
}

// Modal style
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto", // Adjust width to fit your content or screen
  bgcolor: "#27292F", // Dark background color
  boxShadow: 10,
  p: 4,
  color: "#fff", // White text for better visibility on dark background
  outline: "none", // Remove the focus ring
};
