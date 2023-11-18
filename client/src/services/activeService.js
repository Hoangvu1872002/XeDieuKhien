import axiosInstance from "./axiosInstance";

const activeService = {
  update: (dataUpdate) => axiosInstance.put(`/cars/update`, dataUpdate),
  get: () => axiosInstance.get(`/cars`),
};

export default activeService;
