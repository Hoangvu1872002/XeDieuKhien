import axiosInstance from "./axiosInstance";

const parameterService = {
  get: () => axiosInstance.get(`/parameters`),
  delete: () => axiosInstance.delete("/parameters"),
};

export default parameterService;
