import { Grid, Typography, Container, Stack } from "@mui/material";
import React from "react";
import styled from "styled-components";
import StyledButton from "../../../ui/styledButton";
import StyledSelectField from "../../../ui/styledSelectField";
import TableCell from "@mui/material/TableCell";

export default function Assign({ tab }) {
  return (
    <TableContainer>
      <Container fixed>
        <Typography
          sx={{
            color: "primary.contrastText",
            fontWeight: "700",
            fontSize: 16,
            marginBottom: "12px",
          }}
        >
          Current Tariff
        </Typography>
        <Table>
          <td colSpan={2} align="center">
            <Typography
              sx={{
                color: "secondary.contrastText",
                fontWeight: "600",
                fontSize: 12,
              }}
            >
              Assigned Charging Tariff
            </Typography>
          </td>
          <tbody>
            <tr>
              <StyledTableCell component="th" scope="row">
                <Typography
                  sx={{
                    color: "secondary.contrastText",
                    fontWeight: "500",
                    fontSize: 12,
                  }}
                >
                  Tariff name
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="right">Default</StyledTableCell>
            </tr>
            {tab === "location" && (
              <>
                <tr>
                  <StyledTableCell component="th" scope="row">
                    <Typography
                      sx={{
                        color: "secondary.contrastText",
                        fontWeight: "500",
                        fontSize: 12,
                      }}
                    >
                      Location
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell align="right">Oberon Mall</StyledTableCell>
                </tr>
                <tr>
                  <StyledTableCell component="th" scope="row">
                    <Typography
                      sx={{
                        color: "secondary.contrastText",
                        fontWeight: "500",
                        fontSize: 12,
                      }}
                    >
                      CPID
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell align="right">GOEC123</StyledTableCell>
                </tr>
              </>
            )}
            {tab === "personal" && (
              <tr>
                <StyledTableCell component="th" scope="row">
                  <Typography
                    sx={{
                      color: "secondary.contrastText",
                      fontWeight: "500",
                      fontSize: 12,
                    }}
                  >
                    Name
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="right">
                  Raghevendra gowda reddy
                </StyledTableCell>
              </tr>
            )}
            <tr>
              <StyledTableCell component="th" scope="row">
                <Typography
                  sx={{
                    color: "secondary.contrastText",
                    fontWeight: "500",
                    fontSize: 12,
                  }}
                >
                  Value
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="right">15</StyledTableCell>
            </tr>
            <tr>
              <StyledTableCell component="th" scope="row">
                <Typography
                  sx={{
                    color: "secondary.contrastText",
                    fontWeight: "500",
                    fontSize: 12,
                  }}
                >
                  Tax %
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="right">18</StyledTableCell>
            </tr>
            <tr>
              <StyledTableCell component="th" scope="row">
                <Typography
                  sx={{
                    color: "secondary.contrastText",
                    fontWeight: "500",
                    fontSize: 12,
                  }}
                >
                  Service Fee
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="right">-</StyledTableCell>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2} align="center" style={{ paddingTop: "20px" }}>
                <StyledButton variant={"secondary"} width="141">
                  Unassign
                </StyledButton>
              </td>
            </tr>
          </tfoot>
        </Table>
        <Grid container spacing={4}>
          <Grid item md={12}>
            <Typography sx={{ marginBottom: 1, marginTop: 2 }}>
              Assign Tariff
            </Typography>
            <StyledSelectField placeholder={"Select Tariff"} />
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <Stack direction={"row"} spacing={2} sx={{ mt: 2 }}>
              <StyledButton variant={"secondary"} width="103">
                Cancel
              </StyledButton>
              <StyledButton variant={"primary"} width="160">
                Update
              </StyledButton>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </TableContainer>
  );
}

//! STYLINGS

// Styled table container
export const TableContainer = styled.div`
  background: #27292f; // Dark background for the table
  overflow-x: auto; // Allows table to be scrollable horizontally
  border-radius: 8px; // Rounded corners
`;

export const StyledTableCell = styled(TableCell)`
  && {
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    color: #f7f8fc;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
`;

export const Table = styled.table`
  background: #1c1d22;
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  width: 70%;
  padding: 10px;

  tbody tr {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  tbody tr:last-child {
    border-bottom: none;
  }
`;
