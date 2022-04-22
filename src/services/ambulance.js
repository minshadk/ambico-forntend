import BackendService from "./BackendServices";

const RegisterService = async (data) => {
  return BackendService.post("api/ambulance", data);
};

const loginService = async (data) => {
  return BackendService.post("api/ambulance/login", data);
};

const getAmbulanceByRadius = async (id) => {
  return BackendService.get(`api/ambulance/findAmbulance/${id}`);
};

const ambulanceServices = {
  loginService,
  RegisterService,
  getAmbulanceByRadius
};

export default ambulanceServices;
