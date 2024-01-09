import axios from "axios";

let token = sessionStorage.getItem("userToken");

export const tokenInstance = axios.create({
  baseURL: process.env.REACT_APP_API_KEY,
  headers: {
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
  },
});

export const loginInstance = axios.create({
  baseURL: process.env.REACT_APP_API_KEY,
});

