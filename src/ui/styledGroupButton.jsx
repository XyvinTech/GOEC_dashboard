import { Button, ButtonGroup } from '@mui/material'
import React from 'react'

export default function StyledGroupButton({buttons, ...props}) {
  return (
    <ButtonGroup variant="text" aria-label="outlined primary button group">
        {buttons.map((item)=>{
            return(
            <Button
            sx={{}}
            >{item}</Button>
            )
        })
}
    </ButtonGroup>
  )
}
