import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import LastSynced from "../../layout/LastSynced";
import StyledTable from "../../ui/styledTable";
import { customerListData } from "../../assets/json/crm";
import { useNavigate } from "react-router-dom";
import { getUsersListforAdmin } from "../../services/userApi";
import { tableHeaderReplace } from "../../utils/tableHeaderReplace";

const tableHeader = ["Name", "Phone Number", "Email", "RFID", "Tariff"];

function restructureData(dataArray) {
  return dataArray.map(item => ({
    _id: item._id,
    name: item.username,
    email: item.email,
    mobile: item.mobile,
    rfid: item.rfidValues.map((res, i)=> (i===item.rfidValues.length -1 ? res.serialNumber : res.serialNumber+",")),
    tariff: item.length > 0 ? item.tariffValues.map((res)=>res._id) : "Basic",
  }));
}

export default function CustomerLists() {
  const [userListData, setUserListData] = useState([]);

  const getTariffData = () => {
    getUsersListforAdmin().then((res) => {
      if (res.status) {
        setUserListData(res.result);
      }
    });
  };

  useEffect(() => {
    getTariffData();
  }, []);

  const navigate = useNavigate();

  const actionClick = (e) => {
    navigate("/user-details", {state:e.data._id});
  };


  const restructuredData = restructureData(userListData);

  const customersList = tableHeaderReplace(restructuredData, ["name", "mobile", "email", "rfid", "tariff"], tableHeader);

  return (
    <Box>
      <LastSynced heading="Customers List" showSearchField={true} />
      <Box sx={{ p: { xs: 2, md: 4 } }}>
        <StyledTable
          headers={tableHeader}
          data={customersList}
          showActionCell={true}
          actions={["view"]}
          onActionClick={actionClick}
        />
      </Box>
    </Box>
  );
}
