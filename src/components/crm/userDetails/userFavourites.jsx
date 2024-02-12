import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import LastSynced from "../../../layout/LastSynced";
import StyledTable from "../../../ui/styledTable";
// import { favouritesData } from "../../../assets/json/crm";
import { useLocation } from "react-router-dom";
import { userFavourites } from "../../../services/userApi";
import { tableHeaderReplace } from "../../../utils/tableHeaderReplace";

const tableHeader = ["ChargeStation", "Address", "Longitude", "Latitude", "Owner"];

export default function UserFavourites() {
  const { state } = useLocation();
  const [favourites, setFavourites] = useState([]);

  const getData = async () => {
    const res = await userFavourites(state);
    setFavourites(res.result);
  };

  useEffect(() => {
    getData();
  }, [state]);

  const favouritesData = tableHeaderReplace(
    favourites,
    ["chargingStationName", "address", "longitude", "latitude", "owner"],
    tableHeader
  );

  return (
    <Box>
      <LastSynced heading={"Favourites"} />
      <Box sx={{ p: { xs: 2, md: 4 } }}>
        <StyledTable
          headers={tableHeader}
          data={favouritesData}
          showActionCell={true}
          actions={["view"]}
          onActionClick={(e) => {
            console.log(e);
          }}
        />
      </Box>
    </Box>
  );
}
