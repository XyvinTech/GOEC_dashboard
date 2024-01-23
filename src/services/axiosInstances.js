import axios from "axios";

let token = sessionStorage.getItem("userToken") || null;

//! For Vehicle/Brand/transaction/Configuration/RFID/Notification services only

export const LAMBDA_INSTANCES = axios.create({
  baseURL: 'https://dlupfxb3p6.execute-api.ap-south-1.amazonaws.com/api/v1',
  // baseURL: 'http://localhost:5689/api/v1',
  headers: {
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
  },
});


//!charging stations

export const CHARGING_STATION_INSTANCE = axios.create({
  baseURL: 'http://alb-762634556.ap-south-1.elb.amazonaws.com:5100/api/v1',
  headers: {
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
  },
});


//!for ev charge  machine, charge points, oem, ev models
export const EV_MACHINE_INSTANCE = axios.create({
  baseURL: 'http://alb-762634556.ap-south-1.elb.amazonaws.com:5691/api/v1',
  // baseURL: 'http://localhost:5691/api/v1',

  headers: {
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
  },
});

export const REVIEW_INSTANCE = axios.create({
  
  baseURL: 'http://alb-762634556.ap-south-1.elb.amazonaws.com:5685/api/v1',
  headers: {
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
  },
});

export const USER_INSTANCE = axios.create({
  baseURL: 'http://alb-762634556.ap-south-1.elb.amazonaws.com:5691/api/v1',
  headers: {
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
  },
});

export const PAYMENT_INSTANCE = axios.create({
  baseURL: 'http://alb-762634556.ap-south-1.elb.amazonaws.com:5691/api/v1',
  headers: {
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
  },
});




export const OCPP_INSTANCE = axios.create({
  baseURL: 'http://65.0.248.79:6500/api/v1',
  headers: {
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
  },
});




export const IMAGE_UPLOAD_URL = axios.create({
  baseURL: 'http://alb-762634556.ap-south-1.elb.amazonaws.com:5100/api/v1',
  headers: {
    Authorization: "Bearer " + token,
    "Content-Type": "multipart/form-data",
  },
});


export const TRANSACTION_URL = axios.create({
  // baseURL: 'http://alb-762634556.ap-south-1.elb.amazonaws.com:5687/api/v1',
  baseURL: 'http://localhost:5687/api/v1',

  headers: {
    Authorization: "Bearer " + token,
    "Content-Type": "multipart/form-data",
  },
});



