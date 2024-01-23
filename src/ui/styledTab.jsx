import { Button, ButtonGroup, Stack } from "@mui/material";
import { useEffect, useState } from "react";

export default function StyledTab({ buttons,activeIndex=0, onChanged, ...props }) {
  const [activeInd, setActiveInd] = useState(activeIndex);
  useEffect(() => {
    setActiveInd(activeIndex)
  }, [activeIndex])
  
  return (
    <Stack direction={"row"} sx={{ backgroundColor: "secondary.main", justifyContent:{xs:'center',md:'flex-start'},pl:2 }} {...props}>
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
    </Stack>
  );
}
