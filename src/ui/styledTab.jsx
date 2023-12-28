import { Button, ButtonGroup, Stack } from "@mui/material";
import { useState } from "react";

export default function StyledTab({ buttons, onChanged, ...props }) {
  const [activeInd, setActiveInd] = useState(0);
  return (
    <Stack direction={"row"} sx={{ backgroundColor: "secondary.main", pl: 2 }}>
      <ButtonGroup
        variant="outlined"
        aria-label="outlined primary button group"
        {...props}
      >
        {buttons.map((item, ind) => {
          let isActive = ind === activeInd;
          return (
            <Button
              key={ind}
              sx={{
                backgroundColor: isActive && "secondary.button",
                color: isActive
                  ? "primary.contrastText"
                  : "secondary.contrastText",
                border: "none",
                borderBottom: isActive && "2px solid #fff",
                borderRadius: 0,
                height: "60px",
                "&:hover": {
                  border: "none",
                  backgroundColor: "rgba(255,255,255, 0.1)",
                  borderBottom: isActive && "2px solid #fff",
                },
              }}
              onClick={() => {
                setActiveInd(ind);
                if (onChanged) {
                  onChanged({ index: ind, value: item });
                }
              }}
            >
              {item}
            </Button>
          );
        })}
      </ButtonGroup>
    </Stack>
  );
}
