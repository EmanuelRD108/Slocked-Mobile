import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.18.81:5000",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  withCredentials: true,
});

export default api;
