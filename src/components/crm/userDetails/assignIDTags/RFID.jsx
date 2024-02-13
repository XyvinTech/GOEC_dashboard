import { Box, Dialog } from "@mui/material";
import React, { useEffect, useState } from "react";
import LastSynced from "../../../../layout/LastSynced";
import StyledTable from "../../../../ui/styledTable";
import { RFIDData } from "../../../../assets/json/crm";
import AssignRFID from "./assignRFID";
import { Transition } from "../../../../utils/DialogAnimation";
import { removeRfidTag, userRfidList } from "../../../../services/userApi";
import { useParams } from "react-router-dom";
import { tableHeaderReplace } from "../../../../utils/tableHeaderReplace";
import { toast } from "react-toastify";


const tableHeader = [
  "RFID tag",
  "Created on",
  "Expires on",
  "Serial No",
  "Status",
];

export default function RFID() {

    const { id } = useParams();

  const [data, setData] = useState([]);

  const init = async () => {
    try {
      const res = await userRfidList(id)
      setData(res.result)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    init();
  }, []);

  const tableActionClick = async (e) => {
    
       let rfid = {"rfidTagId": e.data.id}
       try {
         await removeRfidTag(id,rfid)
         init();
        toast.success("Unassigned successfully!");

       } catch (error) {
        toast.error("Some error");
        console.log(error);
       }
  }

  const [open, setopen] = useState(false);
  const rfidData = tableHeaderReplace(data, ['rfidTag', 'createdOn', 'expiry', 'serialNumber', 'status'], tableHeader)

  return (
    <Box>
      <Dialog
        fullWidth
        maxWidth={"md"}
        open={open}
        onClose={() => {
          setopen(false);
        }}
        TransitionComponent={Transition}
      >
        <AssignRFID />
      </Dialog>
      <LastSynced
        heading={"Assigned RFID"}
        showButton={true}
        handleClick={() => {
          setopen(true);
        }}
      />
      <Box sx={{ p: { xs: 2, md: 4 } }}>
        <StyledTable
          headers={tableHeader}
          data={rfidData}
          showActionCell={true}
          actions={["Unassign"]}
          onActionClick={tableActionClick}
        />
      </Box>
    </Box>
  );
}
