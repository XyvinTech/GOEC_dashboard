import { Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import StyledSwitch from '../../../../../ui/styledSwitch';

export default function ConfigSwitch({ label, value }) {
  const [checked, setChecked] = useState(value === 'true'); // Convert 'true'/'false' string to boolean

  const handleChange = (event) => {
    const isChecked = event.target.checked;
    setChecked(isChecked);

    // You can perform any logic here based on the new state (isChecked)
    console.log(`Switch changed for ${label}:`, isChecked);
  };

  return (
    <Stack direction="row" sx={{ backgroundColor: 'secondary.lightGray', justifyContent: 'space-between', p: 3, borderRadius: '4px', pr: 0 }}>
      <Typography>{label}</Typography>
      <StyledSwitch defaultChecked={checked} onChange={handleChange} />
    </Stack>
  );
}
