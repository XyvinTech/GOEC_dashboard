import React, { useState } from "react";
import { Box, Modal, Stack, Typography } from "@mui/material";
import StyledTable from "../../../ui/styledTable";
import LastSynced from "../../../layout/LastSynced";
import { ReactComponent as Close } from "../../../assets/icons/close-circle.svg";
import StyledDivider from "../../../ui/styledDivider";
import AddTariff from "./addTariff";
import StyledButton from "../../../ui/styledButton";
import { deleteChargingTariff } from "../../../services/chargingTariffAPI";
import { ToastContainer, toast } from "react-toastify";
import { tableHeaderReplace } from "../../../utils/tableHeaderReplace";
import StyledSearchField from "../../../ui/styledSearchField";
import { searchAndFilter } from "../../../utils/search";

function restructureData(dataArray) {
  return dataArray.map(item => ({
    _id: item._id,
    name: item.name,
    serviceAmount: item.serviceAmount,
    value: item.value,
    createdAt: item.createdAt,
    updatedAt: item.updatedAt,
    taxDataName: item.taxData?.name
  }));
}

function ChargingTariff({ data, headers, onIsChange, isChange, updateData }) {
  const [open, setOpen] = useState(false);
  const [action, setAction] = useState("add");
  const [tableData, setTableData] = useState();
  const [filterValue, setFilterValue] = useState('')
  // Function to open the modal
  const handleOpen = () => {
    setOpen(true);
    setAction("add");
  };

  // Function to close the modal
  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (e) => {
    if (e.action === "Edit") {
      setAction("edit");
      setOpen(true);
      setTableData(e.data);
    } else if (e.action === "Delete") {
      setAction("delete");
      const res = deleteChargingTariff(e.data._id);
      if (res) {
        const successToastId = toast.success("Tax deleted successfully", {
          position: "top-right",
        });
        onIsChange(!isChange);
        toast.update(successToastId);
      }
    }
  };

  const restructuredData = restructureData(data);

  const chargingTariffData = tableHeaderReplace(restructuredData, ["name", "value", "serviceAmount", "createdAt", "updatedAt", "taxDataName"], headers);


  return (
    <>
      <LastSynced heading="Charge Tariff" reloadHandle={updateData}>
      <StyledSearchField placeholder={'Search'} onChange={(e) => {
          setFilterValue(e.target.value)
        }} />
      </LastSynced>
      <Box sx={{ p: 3 }}>
        <Box display="flex" justifyContent="flex-end">
          <StyledButton
            variant="primary"
            width="150"
            mr="10"
            onClick={handleOpen}
          >
            Add
          </StyledButton>
        </Box>
        <StyledTable
          headers={headers}
          data={searchAndFilter(chargingTariffData,filterValue)}
          onActionClick={handleClick}
        />
      </Box>
      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
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
              Add Tariff
            </Typography>
            <Close onClick={handleClose} style={{ cursor: "pointer" }} />
          </Stack>
          <StyledDivider />
          <AddTariff action={action} data={tableData} onIsChange={onIsChange} isChange={isChange}/>
        </Box>
      </Modal>
    </>
  );
}

export default ChargingTariff;

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
