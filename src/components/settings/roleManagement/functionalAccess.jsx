import { Controller } from "react-hook-form";
import { pink, grey } from "@mui/material/colors";
import { alpha, styled } from "@mui/material/styles";
import { Switch } from "@mui/material";
import { allPermissions } from "./role";

import {
  Table,
  TableContainer,
  TableHeader,
  HeaderCell,
  TableBody,
  TableCell,
} from "../../../ui/styledTable";

const headers = ["Permissions", "View", "Modify"];

function FunctionalAccess({ control }) {
  return (
    <>
      <div style={{ maxHeight: "400px", overflowY: "auto" }}>
        <TableContainer>
          <Table>
            <TableHeader>
              <tr>
                {headers.map((header) => (
                  <HeaderCell key={header}>{header}</HeaderCell>
                ))}
              </tr>
            </TableHeader>

            <TableBody>
              {allPermissions.map((permission, index) => (
                <tr key={permission.id}>
                  <TableCell>{permission.name}</TableCell>
                  <TableCell>
                    <Controller
                      name={`functionalPermissions.${index}.view`}
                      control={control}
                      defaultValue={false} // Initial state
                      render={({ field }) => (
                        <PinkSwitch
                          color="secondary"
                          checked={field.value}
                          onChange={(e) => field.onChange(e.target.checked)}
                        />
                      )}
                    />
                  </TableCell>
                  <TableCell>
                    <Controller
                      name={`functionalPermissions.${index}.modify`}
                      control={control}
                      defaultValue={false} // Initial state
                      render={({ field }) => (
                        <PinkSwitch
                          color="secondary"
                          checked={field.value}
                          onChange={(e) => field.onChange(e.target.checked)}
                        />
                      )}
                    />
                  </TableCell>
                  <Controller
                    name={`functionalPermissions.${index}.functionName`}
                    control={control}
                    defaultValue={permission.id}
                    render={({ field }) => <input type="hidden" {...field} />}
                  />
                </tr>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default FunctionalAccess;

const PinkSwitch = styled(Switch)(({ theme }) => ({
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
