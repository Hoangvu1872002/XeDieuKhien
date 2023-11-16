import axiosInstance from "./axiosInstance";

const activeService = {
  update: (dataUpdate) => axiosInstance.put(`/cars/update`, dataUpdate),
};

export default activeService;
