import React, { useState } from "react";
import styled from "styled-components";
import { Stack } from "@mui/material";
import InputField from "../../ui/styledInput";
import StyledSelectField from "../../ui/styledSelectField";
import StyledButton from "../../ui/styledButton";
import LastSynced from "../../layout/LastSynced";
import { ReactComponent as CalendarMonth } from "../../assets/icons/calendar_month.svg";
import { useForm, Controller } from "react-hook-form";
import CalendarInput from "../../ui/CalendarInput";
import StyledInput from "../../ui/styledInput";
export default function DownloadReport() {

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    clearErrors,
  } = useForm({
    defaultValues: {
      published: false, // Set the default value for "activate"
    },
  });
  const onSubmit = (data) => {
    // Handle form submission with data
    data= {...data,report:selectedOption}
    console.log("Form data submitted:", data);
    // Close your form or perform other actions
  };

  const handleDateChangeInParent = (date) => {
    setValue("startDate", date); // Assuming you have 'expiryDate' in your form state
    clearErrors("startDate");
   
  };
  const startDate = watch("startDate", ""); // Watching the value for 'expiryDate'


  const handleEndDateChangeInParent = (date) => {
    setValue("endDate", date); // Assuming you have 'expiryDate' in your form state
    clearErrors("endDate");

  };
  const endDate = watch("endDate", ""); // Watching the value for 'expiryDate'



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
     <form onSubmit={handleSubmit(onSubmit)}>
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
            <Controller
              name="startDate"
              control={control}
              render={({ field }) => (
                <>
              

<StyledInput
                  {...field}
                
                  iconright={
                    <CalendarInput
                      onDateChange={handleDateChangeInParent}
                    />}
                  placeholder={"mm/dd/yyyy"}
                  value={startDate}
                  readOnly
                 
                />
                  {errors.startDate && (
                    <span style={errorMessageStyle}>
                      {errors.startDate.message}
                    </span>
                  )}
                </>
              )}
              
            />

            <Label>End date</Label>
            <Controller
              name="endDate"
              control={control}
              render={({ field }) => (
                <>
              

<StyledInput
                  {...field}
                
                  iconright={
                    <CalendarInput
                      onDateChange={handleEndDateChangeInParent}
                    />}
                  placeholder={"mm/dd/yyyy"}
                  value={endDate}
                  readOnly
                 
                />
                  {errors.endDate && (
                    <span style={errorMessageStyle}>
                      {errors.endDate.message}
                    </span>
                  )}
                </>
              )}
        
            />

            {selectedOption !== "Account Transaction" &&
              selectedOption !== "User Registration" && (
                <>
                  <Label>Location</Label>
              

<Controller
                name="location"
                control={control}
                render={({ field }) => (
                  <>
                      <StyledSelectField
              placeholder={"Select Report"}
              options={options}
            />
                    {errors.location && (
                      <span style={errorMessageStyle}>
                        {errors.location.message}
                      </span>
                    )}
                  </>
                )}
               
              />
                </>
              )}

            {selectedOption === "Alarms" && (
              <>
                <Label>CPID</Label>
              

<Controller
                name="cpid"
                control={control}
                render={({ field }) => (
                  <>
                      <StyledSelectField
              placeholder={"Select Report"}
              options={options}
            />
                    {errors.cpid && (
                      <span style={errorMessageStyle}>
                        {errors.cpid.message}
                      </span>
                    )}
                  </>
                )}
               
              />
              </>
            )}

            <StyledButton variant="primary" fontSize="14" type="submit">
              Download
            </StyledButton>
          </FormContainer>
        </Stack>
      </TableContainer>
      </form>
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

const errorMessageStyle = {
  color: "red",
  // margin: '1px 0',
  };
  