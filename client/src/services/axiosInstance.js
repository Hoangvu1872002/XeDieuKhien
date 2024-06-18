import axios from "axios";
// require("dotenv").config();

const axiosInstance = axios.create({
  baseURL: "https://bugnef-be-xedieukhien.onrender.com/",
  // baseURL: "http://localhost:5003/",
});

export default axiosInstance;
