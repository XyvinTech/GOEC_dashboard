import React from "react";
import { Box, Typography, Stack, Grid, Button } from "@mui/material";
import StyledDivider from "../../../../ui/styledDivider";
import { ReactComponent as Qr_evplug } from "../../../../assets/icons/material-symbols_qr-code.svg";
import { ReactComponent as Mdi_unlocked } from "../../../../assets/icons/mdi_unlocked.svg"
import { getConnectorIcon } from "../../../../utils/connectorIcons";
import { unlock } from "../../../../services/ocppAPI";


export default function ChargePointDetailsConnectors({ data,unlockButtonHandle }) {
  console.log(data);
  return (
    <Box

      sx={{ backgroundColor: "secondary.main", borderRadius: "4px" }}
    >
      <Box container spacing={2} px={6}>
        <Stack direction={"row"} spacing={2} pt={2}>
          <Typography
            sx={{ color: "secondary.contrastText", fontWeight: "700" }}
          >
            Connectors
          </Typography>
        </Stack>
      </Box>
      <StyledDivider />


      <Grid container spacing={3}
        sx={{ alignItems: "center", justifyContent: "center", py: 2, px: 2 }}
      >
        {
          data && data.map((item) => (
            <Grid item xs={6} sm={4} md={6}>
              <Stack direction={"column"}
                sx={{ backgroundColor: "#2B2930", borderRadius: "4px", justifyContent: 'flex-end' }}
              >
                <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
                  <Qr_evplug />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  {getConnectorIcon(item.type,item.status)}
                </Box>
                <Button m={1} p={1} mt={3}
                  sx={{
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    backgroundColor: "#4A4458",
                    borderRadius: "4px",
                    cursor: 'pointer',
                    m: 2,
                    '&:hover': {
                      cursor: 'pointer',
                      backgroundColor: 'secondary.main'
                    }
                  }}
                  onClick={()=>{unlockButtonHandle(item.connectorId)}}
                >
                  <Mdi_unlocked />
                  <Typography
                    sx={{ textAlign: 'center', color: "white", fontWeight: "500", fontSize: "14px" }}
                  >
                    Unlock
                  </Typography>

                </Button>
              </Stack>
            </Grid>
          ))
        }

      </Grid>



    </Box>
  );
}
