import { Grid, Typography, Container, Stack, Modal, Box } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import LastSynced from "../../../layout/LastSynced";
import StyledSelectField from "../../../ui/styledSelectField";
import StyledButton from "../../../ui/styledButton";
import StyledWarning from "../../../ui/styledWarning";
import { ReactComponent as Warn } from "../../../assets/icons/textWarn.svg";
import StyledDivider from "../../../ui/styledDivider";
import Assign from "./assign";
import { ReactComponent as Close } from "../../../assets/icons/close-circle.svg";

export default function Location() {
  const [open, setOpen] = useState(false);
  // Function to open the modal
  const handleOpen = () => {
    setOpen(true);
  };

  // Function to close the modal
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <TableContainer>
        <LastSynced heading="Location" />
        <Container >
          <Grid
            Container
            spacing={4}
            sx={{
              alignItems: "center",
              bgcolor: "#1c1d22",
              padding: 5,
              marginTop: 5,
              marginLeft: 5,
              width: "50%",
            }}
          >
            <Grid item md={12}>
            <Typography sx={{ marginBottom: 1 }}>Locations</Typography>

              <StyledSelectField placeholder={"Select Locations"} />
            </Grid>
            <Grid item md={12}>
              <StyledWarning icon={<Warn />} value={"Please enter Location"} />
            </Grid>
            <Grid item md={12}>
              <Typography sx={{ marginBottom: 1 }}>CPID</Typography>
              <StyledSelectField placeholder={"Select CPID"} />
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Stack direction={"row"} spacing={2} sx={{ mt: 2 }}>
                <StyledButton variant={"secondary"} width="103">
                  Cancel
                </StyledButton>
                <StyledButton variant={"primary"} width="160" onClick={handleOpen}>
                  Assign
                </StyledButton>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </TableContainer>
      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={2}
            my={2}
          >
            <Typography
              sx={{
                color: "secondary.greytext",
                fontSize: 18,
                fontWeight: 700,
              }}
            >
              Add Tariff
            </Typography>
            <Close onClick={handleClose} style={{ cursor: "pointer" }} />
          </Stack>
          <StyledDivider />
          <Assign tab={"location"}/>
        </Box>
      </Modal>
    </>
  );
}

//! STYLINGS

// Styled table container
export const TableContainer = styled.div`
  background: #27292f; // Dark background for the table
  overflow-x: auto; // Allows table to be scrollable horizontally
  border-radius: 8px; // Rounded corners

`;

// Modal style
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto", // Adjust width to fit your content or screen
  bgcolor: "#27292F", // Dark background color
  boxShadow: 10,
  p: 4,
  color: "#fff", // White text for better visibility on dark background
  outline: "none", // Remove the focus ring
};

export const FormContainer = styled.div`
  display: inline-flex;
  padding: 30px 20px;
  flex-direction: column;
  align-items: center;
  gap: 17px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 4px;
  background: #1c1d22;
`;