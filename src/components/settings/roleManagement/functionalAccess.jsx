import React, { useEffect } from "react";
import { useState } from "react";
import { pink,grey } from "@mui/material/colors";
import { alpha, styled } from '@mui/material/styles';
import { Box,  Switch, Typography } from "@mui/material";
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

//Permission

const initialPermissions = allPermissions.map(permission => ({
  name: permission.name,
  id: permission.id,
  view: false,
  modify: false
}));

function FunctionalAccess({ onChange }) {
  const [permissions, setPermissions] = useState(initialPermissions);


  useEffect(() => {
    onChange(permissions);
  }, [permissions, onChange]);

  const handleChange = (permissionName, type) => (event) => {
    const { checked } = event.target;
    setPermissions((prevPermissions) =>
      prevPermissions.map((permission) => {
        if (permission.name === permissionName) {
          return { ...permission, [type]: checked };
        }
        return permission;
      })
    );
  };

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
              {permissions.map((permission) => (
                <tr key={permission.name}>
                  <TableCell>{permission.name}</TableCell>
                  <TableCell>
                    <PinkSwitch 
                      color="secondary"
                      checked={permission.view}
                      onChange={handleChange(permission.name, "view")}
                    />
                  </TableCell>
                  <TableCell>
                    <PinkSwitch 
                      color="secondary"
                      checked={permission.modify}
                      onChange={handleChange(permission.name, "modify")}
                    />
                  </TableCell>
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
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: pink[300],
    '&:hover': {
      backgroundColor: alpha(pink[300], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase:not(.Mui-checked)': { // Styles for unchecked state
    color: grey[700],
    '&:hover': {
      backgroundColor: alpha(grey[700], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: pink[300],
  },
}));