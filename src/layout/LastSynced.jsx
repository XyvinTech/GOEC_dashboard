import React from 'react'
import { Box, Stack, Typography } from "@mui/material";
import StyledSearchField from "../ui/styledSearchField.jsx";
import { ReactComponent as ReloadIcon } from "../assets/icons/reload.svg";
import StyledButton from '../ui/styledButton.jsx';
import StyledDropdown from '../ui/StyledDropdown.jsx';
import ReactTimeAgo from 'react-time-ago'
import { useState } from 'react';




export default function LastSynced({ heading, children,reloadHandle }) {
  const [date, setDate] = useState(new Date())
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
            <ReactTimeAgo date={date} locale="en-US" />
          </Typography>
          <ReloadIcon style={{ cursor: "pointer" }} onClick={()=>{setDate(new Date()); reloadHandle && reloadHandle()}}/>
        </Stack>
      </Stack>
      <Stack direction={{ sm: 'column', md: 'row' }} spacing={2}>
        {children}
      </Stack>
    </Stack>
  )
}
