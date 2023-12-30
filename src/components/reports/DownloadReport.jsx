import React, { useState } from "react";
import styled from "styled-components";
import { Stack } from "@mui/material";
import InputField from "../../ui/styledInput";
import StyledSelectField from "../../ui/styledSelectField";
import StyledButton from "../../ui/styledButton";
import LastSynced from "../../layout/LastSynced";
import { ReactComponent as CalendarMonth } from "../../assets/icons/calendar_month.svg";

export default function DownloadReport() {
  const options = [
    { value: "option1", label: "Account Transaction" },
    { value: "option2", label: "Feedback" },
    { value: "option3", label: "Charging Summary" },
    { value: "option4", label: "User Registration" },
    { value: "option5", label: "Alarm" },
    { value: "option6", label: "Charge points" },
  ];

  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.label);
  };
  return (
    <>
      <LastSynced heading="Reports" />

      <TableContainer>
        <Stack direction={"column"} spacing={2}>
          <FormContainer>
            <Heading variant="h1">Download Report</Heading>

            <Label>Report</Label>
            <StyledSelectField
              placeholder={"Select Report"}
              options={options}
              value={selectedOption}
              onChange={handleSelectChange}
            />
          </FormContainer>
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

            {selectedOption !== "Account Transaction" &&
              selectedOption !== "User Registration" && (
                <>
                  <Label>Location</Label>
                  <StyledSelectField
                    placeholder={"Select Report"}
                    options={options}
                  />
                </>
              )}

            {selectedOption === "Alarms" && (
              <>
                <Label>CPID</Label>
                <StyledSelectField
                  placeholder={"Select Report"}
                  options={options}
                />
              </>
            )}

            <StyledButton variant="primary" fontSize="14">
              Download
            </StyledButton>
          </FormContainer>
        </Stack>
      </TableContainer>
    </>
  );
}

export const TableContainer = styled.div`
  overflow-x: auto;
  border-radius: 8px;
  margin: 20px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
