import styled from "styled-components";
import {
  Alert,
  Container,
  Grid,
  Snackbar,
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
import { imageUploadAPI } from "../../../services/imageAPI";
import { categoryDropdownData, vendorDropdownData } from "../../../assets/json/chargestations";
import { Country, State, City } from "country-state-city";
import { createChargingStation } from "../../../services/stationAPI";
// StyledTable component
const AddChargingStation = ({ data, formSubmited }) => {
  const [amenities, setAmenities] = useState([]);
  const [image, setImage] = useState();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState(<></>);

  //address data country state city
  const [states, setStates] = useState([])
  const [cities, setCities] = useState([])

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
    console.log(image);
    if (image) {
      imageUploadAPI(image).then((res) => {
        if (res.status) {
          let dt = {
            amenities: amenities,
            name: data.name,
            address: `${data.address}, ${data.city.value.name}, ${data.state.value.name}, ${data.country.value.name}, ${data.pincode}`,
            owner: data.owner,
            owner_email: data.ownerEmailId,
            owner_phone: data.ownerPhone,
            location_support_name: data.lspName,
            location_support_email: data.lpsemailId,
            location_support__phone: data.lpsPhoneNumber,
            latitude: data.latitude,
            longitude: data.longitude,
            commissioned_on: data.commissionedDate,
            image: res.url,
            startTime: data.startTime,
            stopTime: data.endTime,
            staff: data.staff,
            vendor: data.vendor.value,
            category: data.category.value,
          }
          createChargingStation(dt).then((res) => {
            console.log(res);
            setErrorMsg(<Alert severity="success" sx={{ width: '100%' }}>Station Added Successfully</Alert >)
            setSnackbarOpen(true)
            setTimeout(() => {
              formSubmited()
            }, 2000);
            
          })
        }

      })
    } else {
      setErrorMsg(<Alert severity="error" sx={{ width: '100%' }}> Please Select Image!</Alert >)
      setSnackbarOpen(true)
    }
  };

  const handleChange = (event) => {
    setValue("staff", event.target.checked);
  };


  const fileSelectHandle = (files) => {
    console.log(files.files[0]);
    setImage(files.files[0])
  }

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
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={() => { setSnackbarOpen(false) }}
      >{errorMsg}</Snackbar>
      <Container maxWidth="md" sx={{ p: 2 }}>
        <Grid container sx={{ alignItems: "center" }} spacing={2}>
          <Grid item xs={12} md={8}>
            <Stack direction="column">
              <Typography sx={{ marginBottom: 3, marginTop: 3 }}>
                Location name
              </Typography>

              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <>
                    <StyledInput {...field} placeholder="Enter Location Name" />
                    {errors.name && (
                      <span style={errorMessageStyle}>
                        {errors.name.message}
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
            <FileUpload onFileSelect={fileSelectHandle} />
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
                  <StyledSelectField {...field} placeholder="Country"
                    options={Country.getAllCountries().map((e) => ({ label: e.name, value: e }))}
                    onChange={(e) => {
                      setValue("country", e)
                      setCities([])
                      setStates(State.getStatesOfCountry(e.value.isoCode).map((e) => ({ label: e.name, value: e })))
                    }} />
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
                  <StyledSelectField {...field} placeholder="State" options={states}
                    onChange={(e) => {
                      setValue("state", e)
                      setCities(City.getCitiesOfState(e.value.countryCode, e.value.isoCode).map((e) => ({ label: e.name, value: e })))
                    }}
                  />
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
                  <StyledSelectField {...field} placeholder="City" options={cities} />
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
                name="lpsPhoneNumber"
                control={control}
                render={({ field }) => (
                  <>
                    <StyledInput
                      {...field}
                      icon={<Phone />}
                      placeholder={"Enter Phone number"}
                    />
                    {errors.lpsPhoneNumber && (
                      <span style={errorMessageStyle}>
                        {errors.lpsPhoneNumber.message}
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
              name="lpsemailId"
              control={control}
              render={({ field }) => (
                <>
                  <StyledInput
                    {...field}
                    icon={<SMS />}
                    placeholder={"Enter Email ID"}
                  />
                  {errors.lpsemailId && (
                    <span style={errorMessageStyle}>
                      {errors.lpsemailId.message}
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
              name="owner"
              control={control}
              render={({ field }) => (
                <>
                  <StyledInput {...field} placeholder={"enter Business name"} />
                  {errors.owner && (
                    <span style={errorMessageStyle}>
                      {errors.owner.message}
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
                name="ownerPhone"
                control={control}
                render={({ field }) => (
                  <>
                    <StyledInput
                      {...field}
                      icon={<Phone />}
                      placeholder={"Enter Phone number"}
                    />
                    {errors.ownerPhone && (
                      <span style={errorMessageStyle}>
                        {errors.ownerPhone.message}
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
              name="ownerEmailId"
              control={control}
              render={({ field }) => (
                <>
                  <StyledInput
                    {...field}
                    icon={<SMS />}
                    placeholder={"Enter Email ID"}
                  />
                  {errors.ownerEmailId && (
                    <span style={errorMessageStyle}>
                      {errors.ownerEmailId.message}
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
                  <StyledSelectField {...field} placeholder="Select Vendor" options={vendorDropdownData} />
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
                  <StyledSelectField {...field} placeholder="Select category" options={categoryDropdownData} />
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
