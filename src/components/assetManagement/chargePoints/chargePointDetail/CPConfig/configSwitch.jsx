import { Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import StyledSwitch from '../../../../../ui/styledSwitch';
import { toast } from 'react-toastify';
import { changeConfiguration } from '../../../../../services/ocppAPI';

export default function ConfigSwitch({ label, value }) {
  const [checked, setChecked] = useState(value === 'true'); // Convert 'true'/'false' string to boolean
  const [loading, setLoading] = useState(false);

  const handleChange = async (event) => {
    const isChecked = event.target.checked;
    setChecked(isChecked);

    setLoading(true);
    try {
      const cpid = sessionStorage.getItem("cpid");
      const res = await changeConfiguration(cpid, {
        key: label,
        value: isChecked.toString(),
      });
      if (res.status) {
        toast.success("Configuration updated successfully!");
      }
    } catch (error) {
      toast.error("Failed to update configuration.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Stack direction="row" sx={{ backgroundColor: 'secondary.lightGray', justifyContent: 'space-between', p: 3, borderRadius: '4px', pr: 0 }}>
      <Typography>{label}</Typography>
      <StyledSwitch checked={checked} onChange={handleChange} disabled={loading} />
    </Stack>
  );
}
