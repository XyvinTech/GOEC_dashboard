

import { pink, grey } from "@mui/material/colors";
import { alpha, styled } from "@mui/material/styles";
import { Switch } from "@mui/material";








export const PinkSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: pink[300],
    "&:hover": {
      backgroundColor: alpha(pink[300], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase:not(.Mui-checked)": {
    // Styles for unchecked state
    color: grey[700],
    "&:hover": {
      backgroundColor: alpha(grey[700], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: pink[300],
  },
}));
