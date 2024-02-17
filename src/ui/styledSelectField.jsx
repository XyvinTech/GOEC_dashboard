import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Select from "react-select";

const SelectContainer = styled.div`
  position: relative;
  width: 100%; /* Adjust width as needed */
`;
const StyledSelectField = ({ options, value, placeholder,
  onChange, onInputChange,
  isMulti = false, isSearchable = false, isLoading = false,
  height, ...props }) => {

  const [valueOptions, setValueOption] = useState({})

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: "100%",
      padding: "8px",
      border: "1px solid var(--White-20, rgba(255, 255, 255, 0.20));",
      borderRadius: "4px",
      backgroundColor: state.isFocused ? "#39383D" : "var(--inner, #39383D)",
      color: state.isFocused ? "#fff" : "#B5B8C5",
      boxShadow: state.isFocused ? "0 0 0 2px #fff" : "none",
      cursor: "pointer",
      height: height && height,
      overflow: 'scroll'
      // fontSize:'12px',

    }),
    input: base => ({
      ...base,
      color: "#fff"
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none", // Remove the separator
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#242424" : " #39383D",
      color: state.isFocused ? "#fff" : "#B5B8C5",
      cursor: "pointer",
      // fontSize:'12px'
      // Add a :active pseudo-class for selected option
      ":active": {
        backgroundColor: "#242424",
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "var(--inner, #39383D)",
      color: "#B5B8C5",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#F7F8FC", // Set the text color for the selected value
    })
  };

  const customTheme = (theme) => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary: "var(--inner, #39383D)",
    },
  });
  var selectedIndex = -1;
  var multiSelected = [];
  useEffect(() => {
    selectedIndex = -1;
    multiSelected = [];
    if (options) {
      for (var i = 0; i < options.length && value; i++) {
        if (isMulti) {
          for (let index = 0; index < value.length; index++) {
            if (options[i].value === value[index] || options[i].label === value[index] || options[i].value === value[index].value) {
              multiSelected.push(options[i])
            }
          }
        } else {
          if (options[i].value === value || options[i].label === value) {
            selectedIndex = i;
            break;
          }
        }
      }
    }
    if (isMulti) {
      setValueOption({ value: options && (isMulti && multiSelected) })
      // valueOptions.defaultValue = options && (isMulti && multiSelected)
    }
    else {
      setValueOption({ value: options && (!isMulti && options[selectedIndex]) })
      // valueOptions.value = options && (!isMulti && options[selectedIndex])
    }
  }, [value,options])

  // if (options) {
  //   for (var i = 0; i < options.length && value; i++) {
  //     if (isMulti) {
  //       for (let index = 0; index < value.length; index++) {
  //         // console.log("from option", options[i]);
  //         // console.log("from value", value[index]);
  //         console.log(options[i].value === value[index].value);
  //         if (options[i].value === value[index] || options[i].label === value[index] || options[i].value === value[index].value) {
  //           multiSelected.push(options[i])
  //         }
  //       }
  //     } else {
  //       if (options[i].value === value || options[i].label === value) {
  //         selectedIndex = i;
  //         break;
  //       }
  //     }
  //   }
  // }
  // if (isMulti) {
  //   valueOptions.defaultValue = options && (isMulti && multiSelected)
  // }
  // else {
  //   valueOptions.value = options && (!isMulti && options[selectedIndex])
  // }
  return (
    <SelectContainer>
      <Select
        placeholder={placeholder}
        options={options}
        onChange={onChange}
        onInputChange={onInputChange}
        styles={customStyles}
        theme={customTheme}
        isMulti={isMulti}
        isSearchable={isSearchable}
        isLoading={isLoading}
        {...props}
        {...valueOptions}
      />
    </SelectContainer>
  );
};

export default StyledSelectField;
