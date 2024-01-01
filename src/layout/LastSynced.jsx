import React from 'react'
import { Box, Stack, Typography } from "@mui/material";
import StyledSearchField from "../ui/styledSearchField.jsx";
import { ReactComponent as ReloadIcon } from "../assets/icons/reload.svg";
import StyledButton from '../ui/styledButton.jsx';
import StyledDropdown from '../ui/StyledDropdown.jsx';




export default function LastSynced({ heading, children }) {
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} sx={{ alignItems: {md:'center'}, justifyContent: 'space-between', backgroundColor: 'primary.grey', p: 2, }}>
      <Stack direction={"column"} sx={{ ml: 2 }}>
        <Typography variant="body1" sx={{ color: "secondary.contrastText" }}>
          {heading}
        </Typography>
        <Stack direction={"row"} spacing={1}>
          <Typography sx={{ color: "secondary.greytext", fontSize: 12 }}>
            Last synced
          </Typography>
          <Typography sx={{ color: "success.main", fontSize: 12 }}>
            4 minutes ago
          </Typography>
          <ReloadIcon style={{ cursor: "pointer" }} />
        </Stack>
      </Stack>
      <Stack direction={{ sm: 'column', md: 'row' }} spacing={2}>
        {children}
      </Stack>
    </Stack>
  )
}
