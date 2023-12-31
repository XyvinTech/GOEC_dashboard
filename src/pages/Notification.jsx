import React, { useState } from 'react'
import StyledTab from '../ui/styledTab';
import { Box, Stack } from '@mui/material';
import EmailNotification from '../components/notification/emailNotification/EmailNotification';
import AppNotification from '../components/notification/appNotification/AppNotification';

export default function Notification() {
    const [togglePage, setTogglePage] = useState(0);
    const buttonChanged = (e) => {
        console.log(e);
        setTogglePage(e.index);
      };
  return (
    <Box>
         <Stack direction={"row"} sx={{ backgroundColor: "secondary.main" }}>
        <StyledTab
          buttons={["Email Notifications", "In-App Notifications"]}
          onChanged={buttonChanged}
        />
      </Stack>
      {togglePage === 0 ? <EmailNotification /> : <AppNotification />}
    </Box>
  )
}
