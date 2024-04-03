import React, { useState } from 'react'
import StyledTable from "../../../ui/styledTable";
import LastSynced from "../../../layout/LastSynced";
import { Box } from "@mui/material";
import { DummyVehicle } from '../../../assets/json/DummyVehicle';
import StyledSearchField from '../../../ui/styledSearchField';
import StyledButton from '../../../ui/styledButton';
import { searchAndFilter } from '../../../utils/search';
import { toast } from "react-toastify";
import AddOEM from './addOEM/AddOEM';
import { tableHeaderReplace } from '../../../utils/tableHeaderReplace';
import ConfirmDialog from '../../../ui/confirmDialog';
import { deleteOem } from '../../../services/evMachineAPI';
import { useAuth } from '../../../core/auth/AuthContext';
import { permissions } from '../../../core/routes/permissions';


const tableHeader = [
  "Company Name",
  "Created On"
];





export default function OEM({ data, updateData, setPageNo, totalCount }) {
  const [open, setOpen] = useState(false)
  const [filterValue, setFilterValue] = useState('')
  const [editStatus, setEditStatus] = useState(false)
  const [selectData, setSelectedData] = useState()
  const [confirmOpen, setConfirmOpen] = useState(false)
  const { userCan } = useAuth()

  const oemData = tableHeaderReplace(data, ['name', 'createdAt'], tableHeader)


  const tableActionClick = (e) => {
    if (e.action === "Edit") {
      setSelectedData(e.data)
      setEditStatus(true)
      setOpen(true)
    }
    else {
      setSelectedData(e.data)
      setConfirmOpen(true)
    }
  }

  const deleteOEM = () => {
    deleteOem(selectData._id).then((res) => {
      toast.success("OEM Deleted successfully");
      updateData && updateData()

    }).catch((error) => {
      toast.error(`${error}`);
      updateData && updateData()
    })
  }

  return (
    <>
      <AddOEM open={open} onClose={() => { setOpen(false); setEditStatus(false); updateData() }} editStatus={editStatus} editData={selectData} />
      <ConfirmDialog title='OEM Delete' subtitle='Do you want to Delete OEM?' open={confirmOpen} onClose={() => { setConfirmOpen(false) }} confirmButtonHandle={deleteOEM} />
      <LastSynced heading="OEM" reloadHandle={updateData}  >
        <StyledSearchField placeholder={"Search"} onChange={(e) => {
          setFilterValue(e.target.value)
        }} />
        <StyledButton variant={'primary'} style={{ width: '100%', minWidth: '160px' }} onClick={() => { setSelectedData({}); setEditStatus(false); setOpen(true) }}>Add</StyledButton>
      </LastSynced>

      <Box sx={{ p: 3 }}>
        <StyledTable headers={tableHeader} 
        data={oemData} 
        setPageNo={setPageNo}
        totalCount={totalCount}
        actions={["Edit", "Delete"]} 
        showActionCell={userCan(permissions.manufacture.modify)}
        onActionClick={tableActionClick} />
      </Box>
    </>)
}
