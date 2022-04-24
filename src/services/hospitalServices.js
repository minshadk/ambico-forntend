import BackendServices from "./BackendServices";

const createHospital = async (data) => {
  return BackendServices.post("api/hospital", data);
};

const createHospitalRequest = async (data) => {
  return BackendServices.post("api/hospitalRequest", data);
};

const getHospitalByRadius = async (id) => {
  return BackendServices.get(`api/hospital/findHospital/${id}`);
};

const hospitalServices = {
  createHospital,
  createHospitalRequest,
  getHospitalByRadius
};

export default hospitalServices;
