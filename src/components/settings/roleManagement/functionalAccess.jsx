import React from "react";
import { useState } from "react";
import { pink } from "@mui/material/colors";
import { Box, Radio, Typography } from "@mui/material";

import {
  Table,
  TableContainer,
  TableHeader,
  HeaderCell,
  TableBody,
  TableCell,
} from "../../../ui/styledTable";

const headers = ["Permissions", "View", "Modify"];

function FunctionalAccess() {
  const [permissions, setPermissions] = useState([
    { name: "Dashboard1", view: false, modify: false },
    { name: "Permissions1", view: false, modify: false },
    { name: "Dashboard2", view: false, modify: false },

  ]);

  const handleChange = (permissionName, type) => (event) => {
    setPermissions(
      permissions.map((permission) => {
        if (permission.name === permissionName) {
          return { ...permission, [type]: event.target.checked };
        }
        return permission;
      })
    );
  };


  return (
    <>


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
            {permissions.map((permission) => (
              <tr key={permission.name}>
                <TableCell>{permission.name}</TableCell>
                <TableCell>
                  <Radio
                    checked={permission.view}
                    onChange={handleChange(permission.name, "view")}
                    sx={{
                      color: pink[100],
                      "&.Mui-checked": {
                        color: pink[100],
                      },
                    }}
                  />
                </TableCell>
                <TableCell>
                  <Radio
                    checked={permission.modify}
                    onChange={handleChange(permission.name, "modify")}
                    sx={{
                      color: pink[100],
                      "&.Mui-checked": {
                        color: pink[100],
                      },
                    }}
                  />
                </TableCell>
              </tr>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </>
  );
}

export default FunctionalAccess;
