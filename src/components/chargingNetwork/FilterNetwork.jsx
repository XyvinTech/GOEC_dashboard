import React from "react";
import styled from "styled-components";
import { Stack, Box, Grid ,Typography} from "@mui/material";
import { styled } from '@mui/system';
import InputField from "../../ui/styledInput";
import StyledSelectField from "../../ui/styledSelectField";
import StyledButton from "../../ui/styledButton";
import { ReactComponent as CalendarMonth } from "../../assets/icons/calendar_month.svg";

const locations = [
  { value: "option1", label: "Account Transaction" },
  { value: "option2", label: "Feedback" },
  { value: "option3", label: "Charging Summary" },
  { value: "option4", label: "User Registration" },
  { value: "option5", label: "Alarm" },
  { value: "option6", label: "Charge points" },
];

export default function FilterNetwork() {
  return (
    <>
      <Box sx={modalStyle}>
        <Stack direction={"column"} spacing={2}>
          <FormContainer>
            <Label>Start date</Label>
            <InputField
              iconright={<CalendarMonth />}
              placeholder={"mm/dd/yyyy"}
            />

            <Label>End date</Label>
            <InputField
              iconright={<CalendarMonth />}
              placeholder={"mm/dd/yyyy"}
            />
            <Label>Location</Label>
            <StyledSelectField
              placeholder={"Select Report"}
              options={locations}
            />

            <Label>CPID</Label>
            <StyledSelectField
              placeholder={"Select Report"}
              options={locations}
            />
            <Grid container spacing={6}>
              <Grid item xs={12} md={6} >
              
                <StyledButton width={120} variant="primary" fontSize="14">
                  Apply
                </StyledButton>
              </Grid>
              <Grid item xs={12} md={6} >
                <StyledButton width={120} variant="secondary" fontSize="14">
                  Reset
                </StyledButton>
              </Grid>
            </Grid>
          </FormContainer>
        </Stack>
      </Box>
    </>
  );
}

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

export const Heading = styled.h1`
  color: var(--Grey, #b5b8c5);
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.3px;
`;

export const Label = styled.label`
  color: var(--white, #f7f8fc);
  text-align: start;
  width: 100%;
  height: 16px;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.3px;
  text-transform: capitalize;
`;

// Modal style
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxwidth: "auto", // Adjust width to fit your content or screen
  bgcolor: "#27292F", // Dark background color
  boxShadow: 2,
  p: 4,
  color: "#fff", // White text for better visibility on dark background
  outline: "none", // Remove the focus ring
};


const CustomLabel = styled('div')(({ theme }) => ({
    borderBottom: `1px solid ${theme.palette.divider}`,
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(1),
  }));
  
  const CustomTypography = styled(Typography)(({ theme }) => ({
    fontWeight: theme.typography.fontWeightMedium,
    textTransform: 'uppercase',
    display: 'inline-block',
    marginRight: theme.spacing(1),
  }));