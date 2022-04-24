import BackendServices from "./BackendServices";

const createHospital = async (data) => {
  return BackendServices.post("api/hospital", data);
};

const hospitalServices = {
  createHospital
};

export default hospitalServices;
