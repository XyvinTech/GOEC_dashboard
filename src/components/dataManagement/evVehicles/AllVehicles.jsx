import React, { useState } from "react";
import StyledTable from "../../../ui/styledTable";
import LastSynced from "../../../layout/LastSynced";
import { Box, Dialog, Stack, Typography } from "@mui/material";
import StyledSearchField from "../../../ui/styledSearchField";
import { useNavigate } from 'react-router-dom'
import { tableHeaderReplace } from "../../../utils/tableHeaderReplace";
import { searchAndFilter } from "../../../utils/search";
import { deleteVehicle } from "../../../services/vehicleAPI";
import { toast } from "react-toastify";
import AddVehicles from "./AddVehicles";
import { ReactComponent as Close } from "../../../assets/icons/close-icon-large.svg";

const tableHeader = [
  "Company Name",
  "Model name",
  "Charger Type",
  "Number of Ports",
];

const EditVehicle = ({data, open, onClose, ...props }) => {
  return (
    <Dialog open={open} maxWidth='md' fullWidth>
      <Stack direction={'row'} sx={{ p: 2, backgroundColor: 'primary.main', justifyContent: 'space-between', borderBottom: 'solid 1px #fff3' }}>
        <Typography sx={{ color: 'secondary.contrastText' }}>Edit Vehicle</Typography>
        <Close style={{ cursor: 'pointer' }} onClick={onClose} />
      </Stack>
      <AddVehicles editStatus={true} vehicleData={data} />
    </Dialog>
  )
}

export default function AllVehicles({ data, updateData, ...props }) {
console.log(data);
  const navigate = useNavigate()
  const [filterValue, setFilterValue] = useState("");
  const [selectData, setSelectedData] = useState();
  const [editOpen, setEditOpen] = useState(false)
  const VehicleData = tableHeaderReplace(data, ['brand', 'modelName', 'charger_types', 'number_of_ports'], tableHeader)

  const tableActionClick = (e) => {
    if (e.action === "Edit") {
      setSelectedData(e.data)
      setEditOpen(true);
    }
    else if (e.action === "Delete") {
      // console.log(e.data);
      deleteVEHICLE(e.data)
    }
  }

  const deleteVEHICLE = (data) => {
    deleteVehicle(data._id).then((res) => {
      toast.success("vehicle Deleted successfully");
      updateData && updateData()
    }).catch((error) => {
      toast.error("Unable to Delete");
    })
  }

  return (
    <>
      <EditVehicle open={editOpen} data={selectData} onClose={(() => { setEditOpen(false); updateData && updateData() })} />
      <LastSynced heading="EV Vehicles" >
        <StyledSearchField
          placeholder={"Search"}
          onChange={(e) => {
            setFilterValue(e.target.value);
          }}
        />
      </LastSynced>
      <Box sx={{ p: 3 }}>
        <StyledTable headers={tableHeader} data={searchAndFilter(VehicleData,filterValue)} onActionClick={tableActionClick} actions={["Edit", "Delete"]} />
      </Box>
    </>
  );
}
