import React, { useState } from "react";
import StyledTable from "../../../ui/styledTable";
import LastSynced from "../../../layout/LastSynced";
import { Box, Dialog, Stack, Typography } from "@mui/material";
import { tableHeaderReplace } from "../../../utils/tableHeaderReplace";
import { useNavigate } from "react-router-dom";
import AddEvCharger from "./AddEvCharger";
import { ReactComponent as Close } from "../../../assets/icons/close-icon-large.svg";
import ConfirmDialog from "../../../ui/confirmDialog";
import { toast } from "react-toastify";
import { deleteEvModel } from "../../../services/evMachineAPI";
import { searchAndFilter } from "../../../utils/search";
import StyledSearchField from "../../../ui/styledSearchField";

const tableHeader = [
  "Company Name",
  "Model name",
  "Output Type",
  "OCPP Version",
  "Charger Type",
  "Capacity (kW)",
  "Number of Ports",
];

const EditCharger = ({ data, open, onClose, ...props }) => {
  return (
    <Dialog open={open} maxWidth='md' fullWidth>
      <Stack direction={'row'} sx={{ p: 2, backgroundColor: 'primary.main', justifyContent: 'space-between', borderBottom: 'solid 1px #fff3' }}>
        <Typography sx={{ color: 'secondary.contrastText' }}>Edit Vehicle</Typography>
        <Close style={{ cursor: 'pointer' }} onClick={onClose} />
      </Stack>
      <AddEvCharger editStatus={true} chargerData={data} formSubmitted={onClose} />
    </Dialog>
  )
}


export default function AllEvChargers({ data, updateData }) {
  const [editOpen, setEditOpen] = useState(false)
  const [filterValue, setFilterValue] = useState("");
  const [selectData, setSelectedData] = useState();
  const [dialogOpen, setDialogOpen] = useState(false)


  const evChargerData = tableHeaderReplace(data, ['oem', 'model_name', 'output_type', 'ocpp_version', 'charger_type', 'capacity', 'no_of_ports'], tableHeader)

  const tableActionClick = (e) => {
    setSelectedData(e.data)
    if (e.action === 'Edit') {
      setEditOpen(true);
    } else {
      setDialogOpen(true);
    }
  }

  const deleteData = () => {
    deleteEvModel(selectData._id).then((res) => {
      console.log(res);
      toast.success("EV charger Deleted successfull")
      updateData && updateData()
    }).catch((error) => {
      toast.error("could not delete EV Charger")
    })
  }

  return (
    <>
      <LastSynced heading="EV Chargers" >
        <StyledSearchField placeholder={'Search'} onChange={(e) => {
          setFilterValue(e.target.value)
        }} />
      </LastSynced>
      <EditCharger open={editOpen} data={selectData} onClose={(() => { setEditOpen(false); updateData(); })} />
      <ConfirmDialog
        open={dialogOpen}
        title={"Confirm Delete"}
        subtitle={"Do you want to Delete"}
        buttonText={"Delete"}
        onClose={() => { setDialogOpen(false) }}
        confirmButtonHandle={deleteData} />
      <Box sx={{ p: 3 }}>
        <StyledTable headers={tableHeader} data={searchAndFilter(evChargerData, filterValue)} onActionClick={tableActionClick} actions={["Edit", "Delete"]} />
      </Box>
    </>
  );
}
