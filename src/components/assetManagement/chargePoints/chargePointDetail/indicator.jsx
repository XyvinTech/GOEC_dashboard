import { Box, Stack, Typography } from "@mui/material";

function Indicator() {
  return (
    <Stack spacing={2} bgcolor={"#121212"} p={2}>
      <Stack direction={"row"} alignItems={"center"} spacing={2}>
        <Box borderRadius={"50%"} width={25} height={25} bgcolor={"#EB5757"}></Box>
        <Typography variant="body" color={"secondary.contrastText"}>
          CMS to CP
        </Typography>
      </Stack>
      <Stack direction={"row"} alignItems={"center"} spacing={2}>
        <Box borderRadius={"50%"} width={25} height={25} bgcolor={"#219653"}></Box>
        <Typography variant="body" color={"secondary.contrastText"}>
          CP to CMS 
        </Typography>
      </Stack>
    </Stack>
  );
}

export default Indicator;
