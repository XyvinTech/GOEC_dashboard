import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { ReactComponent as Station } from "../../../../assets/icons/station.svg";
import { ReactComponent as ContentCopy } from "../../../../assets/icons/content_copy.svg";
import StyledDivider from "../../../../ui/styledDivider";
import StyledInput from "../../../../ui/styledInput";
export default function ChargePointDetailsCard() {
  return (
    <Box px={3} pb={2} sx={{ backgroundColor: "secondary.main", borderRadius: "4px" }}>
      <Stack pt={2} spacing={2}>
        <Stack direction={"row"} spacing={2}>
          <Station />
          <Typography
            sx={{ color: "secondary.contrastText", fontWeight: "700" }}
          >
            GO14
          </Typography>
        </Stack>
      </Stack>
      <StyledDivider />

      <Typography sx={{ color: "primary.contrastText", fontWeight: "500", fontSize: '14px' }}>
        Configuration URL
      </Typography>
      <Stack spacing={2}>
        <StyledInput placeholder={"ws://goeccms.numocity.com:9033/ocpp/go1"} disabled iconright={<ContentCopy />} />
      </Stack>


      <Stack my={2} mt={2} sx={{ borderRadius: "10px", fontSize: '14px' }}>

        <Stack direction={"row"} p={1} sx={{ justifyContent: "space-between", backgroundColor: "#211F26" }}>
          <Typography
            sx={{ color: "primary.DimText", fontWeight: "500", fontSize: '14px' }}
          >
            Charge Location
          </Typography>
          <Typography
            sx={{ color: "primary.contrastText", fontWeight: "400", fontSize: '14px' }}
          >
            Oberon Mall, Ernakulam
          </Typography>
        </Stack>

        <Stack direction={"row"} p={1} sx={{ justifyContent: "space-between", backgroundColor: "#2B2930" }}>
          <Typography
            sx={{ color: "primary.DimText", fontWeight: "500", fontSize: '14px' }}
          >
            OEM
          </Typography>
          <Typography
            sx={{ color: "primary.contrastText", fontWeight: "400", fontSize: '14px' }}
          >
            DELTA
          </Typography>
        </Stack>

        <Stack direction={"row"} p={1} sx={{ justifyContent: "space-between", backgroundColor: "#211F26" }}>
          <Typography
            sx={{ color: "primary.DimText", fontWeight: "500", fontSize: '14px' }}
          >
            Model
          </Typography>
          <Typography
            sx={{ color: "primary.contrastText", fontWeight: "400", fontSize: '14px' }}
          >
            DIHEVE50CSCS00
          </Typography>
        </Stack>

        <Stack direction={"row"} p={1} sx={{ justifyContent: "space-between", backgroundColor: "#2B2930" }}>
          <Typography
            sx={{ color: "primary.DimText", fontWeight: "500", fontSize: '14px' }}
          >
            Type
          </Typography>
          <Typography
            sx={{ color: "primary.contrastText", fontWeight: "400", fontSize: '14px' }}
          >
            DC
          </Typography>
        </Stack>

        <Stack direction={"row"} p={1} sx={{ justifyContent: "space-between", backgroundColor: "#211F26" }}>
          <Typography
            sx={{ color: "primary.DimText", fontWeight: "500", fontSize: '14px' }}
          >
            Serial Number
          </Typography>
          <Typography
            sx={{ color: "primary.contrastText", fontWeight: "400", fontSize: '14px' }}
          >
            0651561151
          </Typography>
        </Stack>

        <Stack direction={"row"} p={1} sx={{ justifyContent: "space-between", backgroundColor: "#2B2930" }}>
          <Typography
            sx={{ color: "primary.DimText", fontWeight: "500", fontSize: '14px' }}
          >
            Communication Protocol (Version)
          </Typography>
          <Typography
            sx={{ color: "primary.contrastText", fontWeight: "400", fontSize: '14px' }}
          >
            OCPP(1.6)
          </Typography>
        </Stack>


        <Stack direction={"row"} p={1} sx={{ justifyContent: "space-between", backgroundColor: "#211F26" }}>
          <Typography
            sx={{ color: "primary.DimText", fontWeight: "500", fontSize: '14px' }}
          >
            Commissioned On
          </Typography>
          <Typography
            sx={{ color: "primary.contrastText", fontWeight: "400", fontSize: '14px' }}
          >
            Dec 8, 2021 6:06:42 PM
          </Typography>
        </Stack>

        <Stack direction={"row"} p={1} sx={{ justifyContent: "space-between", backgroundColor: "#2B2930" }}>
          <Typography
            sx={{ color: "primary.DimText", fontWeight: "500", fontSize: '14px' }}
          >
            Published
          </Typography>
          <Typography
            sx={{ color: "primary.contrastText", fontWeight: "400", fontSize: '14px' }}
          >
            YES
          </Typography>
        </Stack>

        <Stack direction={"row"} p={1} sx={{ justifyContent: "space-between", backgroundColor: "#211F26" }}>
          <Typography
            sx={{ color: "primary.DimText", fontWeight: "500", fontSize: '14px' }}
          >
            SuperFast
          </Typography>
          <Typography
            sx={{ color: "primary.contrastText", fontWeight: "400", fontSize: '14px' }}
          >
            false
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
