import React from 'react'
import { Stack, Typography, createStyles } from "@mui/material";
import { ReactComponent as ReloadIcon } from "../assets/icons/reload.svg";
import ReactTimeAgo from 'react-time-ago'
import { useState } from 'react';



const useStyles = createStyles({
  rotateIcon: {
    animation: "$spin 2s linear infinite"
  },
  "@keyframes spin": {
    "0%": {
      transform: "rotate(360deg)"
    },
    "100%": {
      transform: "rotate(0deg)"
    }
  }
})


export default function LastSynced({ heading, children, reloadHandle, lastSyncVisible = true }) {
  const [date, setDate] = useState(new Date())
  const [rotate, setRotate] = useState(0)
  const [startRotate, setStartRotate] = useState(false)
  setTimeout(() => {
    if (startRotate) {
      if (rotate > 360) {
        setStartRotate(false)
      }
      setRotate(rotate + 5)
    } else {
      setRotate(0)
    }
  }, 10)

  return (
    <Stack direction={{ xs: 'column', md: 'row' }} sx={{ alignItems: { md: 'center' }, justifyContent: 'space-between', backgroundColor: 'primary.grey', p: 2, }}>
      <Stack direction={"column"} sx={{ ml: 2 }}>
        <Typography variant="body1" sx={{ color: "secondary.contrastText" }}>
          {heading}
        </Typography>
        {lastSyncVisible && <Stack direction={"row"} spacing={1}>
          <Typography sx={{ color: "secondary.greytext", fontSize: 12 }}>
            Last synced
          </Typography>
          <Typography sx={{ color: "success.main", fontSize: 12 }}>
            <ReactTimeAgo date={date} locale="en-US" />
          </Typography>
          <ReloadIcon style={{ cursor: "pointer", transform: `rotate(${rotate}deg)` }} onClick={() => { setDate(new Date()); reloadHandle && reloadHandle(); setStartRotate(true) }} />
        </Stack>}
      </Stack>
      <Stack direction={{ sm: 'column', md: 'row' }} spacing={2}>
        {children}
      </Stack>
    </Stack>
  )
}
