import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import LastSynced from "../../../layout/LastSynced";
import StyledTable from "../../../ui/styledTable";
// import { favouritesData } from "../../../assets/json/crm";
import {  useParams } from "react-router-dom";
import { userFavourites } from "../../../services/userApi";
import { tableHeaderReplace } from "../../../utils/tableHeaderReplace";

const tableHeader = ["ChargeStation", "Address", "Longitude", "Latitude", "Owner"];

export default function UserFavourites() {
  const { id } = useParams();
  const [favourites, setFavourites] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [totalCount, setTotalCount] = useState(1);

  const getData = async (filter={pageNo}) => {
    const res = await userFavourites(id, filter);
    setFavourites(res.result);
    setTotalCount(res.totalCount);
  };

  useEffect(() => {
    getData();
  }, [id,pageNo]);

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
          }}
          setPageNo={setPageNo} 
          totalCount={totalCount}
        />
      </Box>
    </Box>
  );
}
