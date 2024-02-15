import axios from "axios";



const baseURL = `https://oxium.goecworld.com`;
// const baseURL = `http://localhost`;
// 

let token = sessionStorage.getItem("userToken") || null;


///! vehicle 
export const VEHICLE_INSTANCES = axios.create({
  baseURL: `${baseURL}:5689/api/v1`,
  headers: {
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
  },
});

///! configuration 

export const CONFIG_INSTANCES = axios.create({
  baseURL: `${baseURL}:5101/api/v1`,
  headers: {
    Authorization: "Bearer " + token,
    "Content-Type": "multipart/form-data",
  },
});


//!charging stations

export const CHARGING_STATION_INSTANCE = axios.create({
  baseURL: `${baseURL}:5100/api/v1`,
  headers: {
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
  },
});


//!for ev charge  machine, charge points, oem, ev models
export const EV_MACHINE_INSTANCE = axios.create({
  baseURL: `${baseURL}:5691/api/v1`,
  headers: {
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
  },
});


///! review 

export const REVIEW_INSTANCE = axios.create({
  baseURL: `${baseURL}:5685/api/v1`,
  headers: {
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
  },
});


///! user 

export const USER_INSTANCE = axios.create({
  baseURL: `${baseURL}:5688/api/v1`,
  headers: {
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
  },
});


///! payment 

export const PAYMENT_INSTANCE = axios.create({
  baseURL: `${baseURL}:5691/api/v1`,
  headers: {
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
  },
});



///! ocpp 

export const OCPP_INSTANCE = axios.create({
  baseURL: `${baseURL}:6500/api/v1`,
  headers: {
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
  },
});




export const IMAGE_UPLOAD_URL = axios.create({
  baseURL: `${baseURL}:5100/api/v1`,
  headers: {
    Authorization: "Bearer " + token,
    "Content-Type": "multipart/form-data",
  },
});

///! transaction url 

export const TRANSACTION_URL = axios.create({
  baseURL: `${baseURL}:5687/api/v1`,
  headers: {
    Authorization: "Bearer " + token,
    // "Content-Type": "multipart/form-data",
    "Content-Type": "application/json",
  },
});


///! rfid 

export const RFID_URL = axios.create({
  baseURL: `${baseURL}:5102/api/v1`,
  headers: {
    Authorization: "Bearer " + token,
  },
});




