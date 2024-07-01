import { Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import StyledInput from "../../../../../ui/styledInput";
import StyledButton from "../../../../../ui/styledButton";
import { toast } from "react-toastify";
import { changeConfiguration } from "../../../../../services/ocppAPI";

export default function ConfigElement({ label, data, ...props }) {
  const [inputValue, setInputValue] = useState(data);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      const cpid = sessionStorage.getItem("cpid");
      const res = await changeConfiguration(cpid, {
        key: label,
        value: inputValue,
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
    <Stack
      direction={"row"}
      sx={{ justifyContent: "space-between", alignItems: "center" }}
      {...props}
    >
      <Typography>{label}</Typography>
      <Stack direction={"row"} spacing={1}>
        <Button
          sx={{
            backgroundColor: "secondary.button",
            color: "primary.DimText",
            width: "150px",
          }}
        >
          {data && data}
        </Button>
        <StyledInput
          value={inputValue}
          onChange={handleInputChange}
          style={{ width: "150px", textAlign: "center" }}
        />
        <StyledButton
          onClick={handleSave}
          style={{ backgroundColor: "#0047C2", color: "#fffc", width: "150px" }}
          disabled={loading}
        >
          {loading ? "Saving..." : "Save"}
        </StyledButton>
      </Stack>
    </Stack>
  );
}
