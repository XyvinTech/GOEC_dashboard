import { Grid, Typography } from "@mui/material";
import React from "react";
import { getListOfChargingStation } from "../../../services/stationAPI";
import AsyncSelect from "react-select/async";
import { Controller, useFormContext } from "react-hook-form";

function LocationalAccess() {
  const {
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext(); // Use useFormContext to access form methods

  const loadLocationOptions = async (inputValue) => {
    try {
      const response = await getListOfChargingStation(inputValue);
      if (response.status) {
        return response.result.map((station) => ({
          label: station.name,
          value: station._id,
        }));
      }
      return [];
    } catch (error) {
      console.error("Error fetching stations", error);
      return [];
    }
  };

  return (
    <>
      <Typography sx={{ marginBottom: 3, marginTop: 3 }}>
        Location Name
      </Typography>
      <Grid item xs={12}>
        <Controller
          name="locationalPermissions"
          control={control}
          render={({ field }) => (
            <>
              <AsyncSelect
                cacheOptions
                defaultOptions
                loadOptions={loadLocationOptions}
                placeholder="Select Location"
                isMulti
                styles={customStyles}
                theme={customTheme}
                value={field.value}
                onChange={(selectedOptions) => {
                  field.onChange(selectedOptions);
                }}
              />
              {errors.locations && (
                <span style={errorMessageStyle}>{errors.locations.message}</span>
              )}
            </>
          )}
        
        />
      </Grid>
    </>
  );
}

export default LocationalAccess;

// customStyles for react-select/AsyncSelect
const customStyles = {
  control: (provided, state) => ({
    ...provided,
    padding: "8px",
    border: "1px solid rgba(255, 255, 255, 0.20)",
    borderRadius: "4px",
    backgroundColor: state.isFocused ? "#39383D" : "#39383D",
    color: state.isFocused ? "#fff" : "#B5B8C5",
    boxShadow: state.isFocused ? "0 0 0 2px #fff" : "none",
    cursor: "pointer",
    height: "55px", // Set this to the height of your input
    overflow: "hidden", // Hide the overflow
  }),
  input: (base) => ({
    ...base,
    color: "#fff",
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#242424" : "#39383D",
    color: state.isFocused ? "#fff" : "#B5B8C5",
    cursor: "pointer",
    ":active": {
      backgroundColor: "#242424",
    },
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#39383D",
    color: "#B5B8C5",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#F7F8FC",
  }),
};

// customTheme for react-select/AsyncSelect
const customTheme = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary: "#39383D", // primary color for the select, used for the focused state
    // Add other color overrides if necessary
  },
});
const errorMessageStyle = {
  color: "red",
};
