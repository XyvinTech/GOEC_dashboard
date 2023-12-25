import axios from "axios";

let token = sessionStorage.getItem("userToken");

const tokenInstance = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
  },
});

const loginInstance = axios.create({
  baseURL: "http://localhost:4000",
});

module.exports = { tokenInstance, loginInstance };
