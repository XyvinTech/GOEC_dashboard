import { Grid, Typography, Container, Stack, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StyledButton from "../../../ui/styledButton";
import StyledSelectField from "../../../ui/styledSelectField";
import TableCell from "@mui/material/TableCell";
import { changeEVTarrif } from "../../../services/evMachineAPI";
import { toast } from "react-toastify";
import { getChargingTariffList } from "../../../services/chargingTariffAPI";
import { userAssignAndunAssignTarrif } from "../../../services/userApi";

export default function Assign({ tab, data, onClose, user }) {

  const [tarrifList, setTarrifList] = useState([])
  const [selectedtarrif, setSelectedTarrif] = useState()
  const [pageNo, setPageNo] = useState(1);
  const [totalCount, setTotalCount] = useState(1);

  useEffect((filter={pageNo}) => {
    getChargingTariffList(filter).then((res) => {
      if (res) {
        setTarrifList(res.result.map((dt) => ({ label: dt.name, value: dt._id })));
        setTotalCount(res.totalCount);
      }
    })
  }, [pageNo])


  const assignTarrif = () => {
    if (tab === "location") {
      let dt = {
        chargingTariff: selectedtarrif.value
      }
      changeEVTarrif(data._id, dt).then((res) => {
        toast.success("Successfully assigned")
        onClose && onClose()
      }).catch((err) => {
        toast.error(err.response.data.error)
      })
    } else if (tab === "personal") {
      let dt = {
        chargingTariff: selectedtarrif.value
      }
      userAssignAndunAssignTarrif(user._id, dt).then((res) => {
        toast.success("Successfully assigned")
        onClose && onClose()
      }).catch((err) => {
        toast.error(err.response.data.error)
      })
    }
  }

  const unAssinHandle = () => {
    if (tab === "location") {
      changeEVTarrif(data._id, {}).then((res) => {
        onClose && onClose()
      }).catch((err) => {
        toast.error(err.response.data.error)
      })
    } else if (tab === "personal") {
      userAssignAndunAssignTarrif(user._id, {}).then((res) => {
        toast.success("Successfully unassigned")
        onClose && onClose()
      }).catch((err) => {
        toast.error(err.response.data.error)
      })
    }
  }
  return (
    <Box>
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
              <StyledTableCell align="right">
                {tab === "personal" ? (data ? data.name : '-') : (data && data.chargingTariffDetail ? data.chargingTariffDetail.name : '-')}
              </StyledTableCell>
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
                  <StyledTableCell align="right">
                    {data && data.chargingTariffDetail ? data.chargingTariffDetail.location : '-'}
                    </StyledTableCell>
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
                  <StyledTableCell align="right">{data ? data.CPID : '-'}</StyledTableCell>
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
                  {user ? user.name : '-'}
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
              <StyledTableCell align="right">
                {tab === "personal" ? (data ? data.value : '-') : (data && data.chargingTariffDetail ? data.chargingTariffDetail.value : '-')}
                </StyledTableCell>
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
              <StyledTableCell align="right">
                {tab === "personal" ? (data && data.taxDetails ? data.taxDetails.percentage : '-') : (data && data.chargingTariffDetail ? data.chargingTariffDetail.tax_percentage : '-')}
                </StyledTableCell>
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
              <StyledTableCell align="right">
                {tab === "personal" ? (data ? data.serviceAmount : '-') : (data && data.chargingTariffDetail ? data.chargingTariffDetail.serviceAmount : '-')}
                </StyledTableCell>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2} align="center" style={{ paddingTop: "20px" }}>
                <StyledButton variant={"secondary"} width="141" onClick={unAssinHandle}>
                  Unassign
                </StyledButton>
              </td>
            </tr>
          </tfoot>
        </Table>
        <Grid container spacing={4}>
          <Grid item md={12}>
            <Typography sx={{ marginBottom: 1, marginTop: 2, color: 'secondary.contrastText' }}>
              Assign Tariff
            </Typography>
            <StyledSelectField placeholder={"Select Tariff"} value={selectedtarrif} options={tarrifList} maxMenuHeight={100} onChange={(e) => setSelectedTarrif(e)} />
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
              <StyledButton variant={"primary"} width="160" onClick={assignTarrif}>
                Update
              </StyledButton>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

//! STYLINGS

// Styled table container


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
