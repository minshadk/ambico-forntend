import BackendService from "./BackendServices";

const RegisterService = async (data) => {
  return BackendService.post("api/ambulance", data);
};

const loginService = async (data) => {
  return BackendService.post("api/ambulance/login", data);
};

const ambulanceServices = {
  loginService,
  RegisterService
};

export default ambulanceServices;
