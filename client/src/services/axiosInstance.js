import axios from "axios";
// require("dotenv").config();

const axiosInstance = axios.create({
   baseURL: "http://localhost:5000/",
});

export default axiosInstance;
