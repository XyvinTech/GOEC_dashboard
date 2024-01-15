import styled from "styled-components";
import {
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import StyledSelectField from "../../../ui/styledSelectField";
import StyledCheckButton from "../../../ui/styledCheckButton";
import StyledSwitch from "../../../ui/styledSwitch";
import StyledButton from "../../../ui/styledButton";
import FileUpload from "../../../utils/FileUpload";
import { ReactComponent as ClockOutline } from "../../../assets/icons/ClockOutline.svg";
import { ReactComponent as Calendar } from "../../../assets/icons/calendar.svg";
import { ReactComponent as Phone } from "../../../assets/icons/Phone.svg";
import { ReactComponent as SMS } from "../../../assets/icons/sms.svg";
import { useForm, Controller } from "react-hook-form";
import StyledInput from "../../../ui/styledInput";
import CalendarInput from "../../../ui/CalendarInput";
// StyledTable component
const AddChargingStation = ({ data }) => {
  const [amenities, setAmenities] = useState([]);

  const getCheckButtonData = (checkBtndata) => {
    if (checkBtndata.active == true) {
      setAmenities([...amenities, checkBtndata.value]);
    } else {
      setAmenities(amenities.filter((item) => item !== checkBtndata.value));
    }
  };
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    clearErrors,
  } = useForm({
    defaultValues: {
      staff: false, // Set the default value for "activate"
    },
  });
  const onSubmit = (data) => {
    // Handle form submission with data
    data = { ...data,amenities}
    console.log("Form data submitted:", data);
    // Close your form or perform other actions
  };

  const handleChange = (event) => {
    setValue("staff", event.target.checked);
  };


  
  const handleDateChangeInParent = (date) => {
    setValue('commissionedDate', date); // Assuming you have 'expiryDate' in your form state
    clearErrors('commissionedDate');
    console.log(date)
  };
  const commissionedDate = watch('commissionedDate', ''); // Watching the value for 'expiryDate'
  

  let AmenitiesData = [
    "Mall",
    "Cafe",
    "Restaurant",
    "Restroom",
    "Waitingroom",
    "BAR",
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container maxWidth="md" sx={{ p: 2 }}>
        <Grid container sx={{ alignItems: "center" }} spacing={2}>
          <Grid item xs={12} md={8}>
            <Stack direction="column">
              <Typography sx={{ marginBottom: 3, marginTop: 3 }}>
                Location name
              </Typography>

              <Controller
                name="locationName"
                control={control}
                render={({ field }) => (
                  <>
                    <StyledInput {...field} placeholder="Enter Location Name" />
                    {errors.locationName && (
                      <span style={errorMessageStyle}>
                        {errors.locationName.message}
                      </span>
                    )}
                  </>
                )}
                rules={{ required: "Location Name is required" }}
              />

              {/* <InputField placeholder={"Enter Location Name"} /> */}
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <FileUpload />
          </Grid>
        </Grid>

        {/* ----address */}
        <Typography sx={{ marginBottom: 3, marginTop: 3 }}>Address</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Stack direction="column">
              <Controller
                name="address"
                control={control}
                render={({ field }) => (
                  <>
                    <StyledInput {...field} placeholder={"Enter Address"} />
                    {errors.address && (
                      <span style={errorMessageStyle}>
                        {errors.address.message}
                      </span>
                    )}
                  </>
                )}
                rules={{ required: "Address is required" }}
              />
            </Stack>
          </Grid>

          <Grid item xs={6} md={4}>
            <Controller
              name="pincode"
              control={control}
              render={({ field }) => (
                <>
                  <StyledInput {...field} placeholder="Pincode" />
                  {errors.pincode && (
                    <span style={errorMessageStyle}>
                      {errors.pincode.message}
                    </span>
                  )}
                </>
              )}
              rules={{ required: "pincode is required" }}
            />
          </Grid>

          <Grid item xs={6} md={4}>
            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <>
                  <StyledSelectField {...field} placeholder="Country" />
                  {errors.country && (
                    <span style={errorMessageStyle}>
                      {errors.country.message}
                    </span>
                  )}
                </>
              )}
              rules={{ required: "Country is required" }}
            />
          </Grid>

          <Grid item xs={6} md={4}>
            <Controller
              name="state"
              control={control}
              render={({ field }) => (
                <>
                  <StyledSelectField {...field} placeholder="State" />
                  {errors.state && (
                    <span style={errorMessageStyle}>
                      {errors.state.message}
                    </span>
                  )}
                </>
              )}
              rules={{ required: "State is required" }}
            />
          </Grid>

          <Grid item xs={6} md={4}>
            <Controller
              name="city"
              control={control}
              render={({ field }) => (
                <>
                  <StyledSelectField {...field} placeholder="City" />
                  {errors.city && (
                    <span style={errorMessageStyle}>{errors.city.message}</span>
                  )}
                </>
              )}
              rules={{ required: "City is required" }}
            />
          </Grid>
        </Grid>

        {/* ----Map co-ordinates*/}

        <Typography sx={{ marginBottom: 3, marginTop: 3 }}>
          Map co-ordinates
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Stack direction="column">
              <Controller
                name="longitude"
                control={control}
                render={({ field }) => (
                  <>
                    <StyledInput {...field} placeholder="Longitude" />
                    {errors.longitude && (
                      <span style={errorMessageStyle}>
                        {errors.longitude.message}
                      </span>
                    )}
                  </>
                )}
                rules={{ required: "longitude is required" }}
              />
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Controller
              name="latitude"
              control={control}
              render={({ field }) => (
                <>
                  <StyledInput {...field} placeholder="Latitude" />
                  {errors.latitude && (
                    <span style={errorMessageStyle}>
                      {errors.latitude.message}
                    </span>
                  )}
                </>
              )}
              rules={{ required: "Latitude is required" }}
            />
          </Grid>
        </Grid>

        <Typography sx={{ marginBottom: 3, marginTop: 3 }}>
          Operating hours
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Stack direction="column">
              <Controller
                name="startTime"
                control={control}
                render={({ field }) => (
                  <>
                    <StyledInput
                      {...field}
                      icon={<ClockOutline />}
                      placeholder={"Start time"}
                      
                    />
                    {errors.startTime && (
                      <span style={errorMessageStyle}>
                        {errors.startTime.message}
                      </span>
                    )}
                  </>
                )}
                rules={{ required: "Start time is required" }}
              />
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Controller
              name="endTime"
              control={control}
              render={({ field }) => (
                <>
                  <StyledInput
                    {...field}
                    icon={<ClockOutline />}
                    placeholder={"End time"}
                  />
                  {errors.endTime && (
                    <span style={errorMessageStyle}>
                      {errors.endTime.message}
                    </span>
                  )}
                </>
              )}
              rules={{ required: "End time is required" }}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <Controller
              name="commissionedDate"
              control={control}
              render={({ field }) => (
                <>
              

<StyledInput
                  {...field}
                  placeholder="Commissioned Date"
                  icon={<Calendar />}
                  iconright={<CalendarInput onDateChange={handleDateChangeInParent} />}
                  value={commissionedDate}
                  readOnly
                 
                />
                  {errors.commissionedDate && (
                    <span style={errorMessageStyle}>
                      {errors.commissionedDate.message}
                    </span>
                  )}
                </>
              )}
              rules={{ required: "Commissioned Date is required" }}
            />
          </Grid>
        </Grid>

        <Typography sx={{ marginBottom: 3, marginTop: 3 }}>
          Location Support
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Controller
              name="lspName"
              control={control}
              render={({ field }) => (
                <>
                  <StyledInput
                    {...field}
                    placeholder={"Enter Location Support personal's name"}
                  />
                  {errors.lspName && (
                    <span style={errorMessageStyle}>
                      {errors.lspName.message}
                    </span>
                  )}
                </>
              )}
              rules={{
                required: "Location Support personal's name is required",
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack direction="column">
              <Controller
                name="phoneNumber"
                control={control}
                render={({ field }) => (
                  <>
                    <StyledInput
                      {...field}
                      icon={<Phone />}
                      placeholder={"Enter Phone number"}
                    />
                    {errors.phoneNumber && (
                      <span style={errorMessageStyle}>
                        {errors.phoneNumber.message}
                      </span>
                    )}
                  </>
                )}
                rules={{ required: "Phone number is required" }}
              />
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Controller
              name="emailId"
              control={control}
              render={({ field }) => (
                <>
                  <StyledInput
                    {...field}
                    icon={<SMS />}
                    placeholder={"Enter Email ID"}
                  />
                  {errors.emailId && (
                    <span style={errorMessageStyle}>
                      {errors.emailId.message}
                    </span>
                  )}
                </>
              )}
              rules={{ required: "Email ID is required" }}
            />
          </Grid>
        </Grid>

        <Typography sx={{ marginBottom: 3, marginTop: 3 }}>
          Amenities
        </Typography>
        <Grid container spacing={2}>
          {AmenitiesData.map((Amenity) => {
            return (
              <Grid key={Amenity} item xs={6} md={3}>
                <StyledCheckButton
                  checkButtonChange={getCheckButtonData}
                  color="gray"
                >
                  {Amenity}
                </StyledCheckButton>
              </Grid>
            );
          })}
        </Grid>

        <Typography sx={{ marginBottom: 3, marginTop: 3 }}>
          Business name
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Controller
              name="bussinessName"
              control={control}
              render={({ field }) => (
                <>
                  <StyledInput {...field} placeholder={"enter Business name"} />
                  {errors.bussinessName && (
                    <span style={errorMessageStyle}>
                      {errors.bussinessName.message}
                    </span>
                  )}
                </>
              )}
              rules={{ required: "Business name is required" }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack direction="column">
              <Controller
                name="bussinessPhone"
                control={control}
                render={({ field }) => (
                  <>
                    <StyledInput
                      {...field}
                      icon={<Phone />}
                      placeholder={"Enter Phone number"}
                    />
                    {errors.bussinessPhone && (
                      <span style={errorMessageStyle}>
                        {errors.bussinessPhone.message}
                      </span>
                    )}
                  </>
                )}
                rules={{ required: "Phone number is required" }}
              />
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Controller
              name="bussinessEmailId"
              control={control}
              render={({ field }) => (
                <>
                  <StyledInput
                    {...field}
                    icon={<SMS />}
                    placeholder={"Enter Email ID"}
                  />
                  {errors.bussinessEmailId && (
                    <span style={errorMessageStyle}>
                      {errors.bussinessEmailId.message}
                    </span>
                  )}
                </>
              )}
              rules={{ required: "Email ID is required" }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid sx={{ marginBottom: 1, marginTop: 3 }} item xs={12} md={12}>
            <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
              <Typography>Staff</Typography>
              <Controller
                name="staff"
                control={control}
                render={({ field }) => (
                  <StyledSwitch
                    {...field}
                    onChange={(e) => {
                      handleChange(e);
                      // Additional logic if needed
                    }}
                    defaultChecked={field.value}
                    // Adding 'required' attribute
                  />
                )}
              />
            </Stack>
          </Grid>
        </Grid>
        <Typography sx={{ marginBottom: 3, marginTop: 3 }}>Vendor</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Controller
              name="vendor"
              control={control}
              render={({ field }) => (
                <>
                  <StyledSelectField {...field} placeholder="Select Vendor" />
                  {errors.vendor && (
                    <span style={errorMessageStyle}>
                      {errors.vendor.message}
                    </span>
                  )}
                </>
              )}
              rules={{ required: "Vendor is required" }}
            />
          </Grid>
        </Grid>

        <Typography sx={{ marginBottom: 3, marginTop: 3 }}>Category</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <>
                  <StyledSelectField {...field} placeholder="Select category" />
                  {errors.category && (
                    <span style={errorMessageStyle}>
                      {errors.category.message}
                    </span>
                  )}
                </>
              )}
              rules={{ required: "Category is required" }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Stack
              item
              xs={12}
              md={12}
              direction={"row"}
              spacing={2}
              sx={{ mt: 2 }}
            >
              <StyledButton variant={"primary"} width="200" type="submit">
                {" "}
                Save{" "}
              </StyledButton>

              <StyledButton variant={"secondary"} width="160">
                {" "}
                Cancel{" "}
              </StyledButton>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </form>
  );
};

export default AddChargingStation;

//! STYLINGS

// Styled action cell

// Styled table container
export const TableContainer = styled.div`
  background: #27292f; // Dark background for the table
  overflow-x: auto; // Allows table to be scrollable horizontally
  border-radius: 8px; // Rounded corners
  margin: 20px 0; // Margin for spacing, adjust as needed
`;

const errorMessageStyle = {
  color: "red",
  // margin: '1px 0',
};
