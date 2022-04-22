import BackendService from "./BackendServices";

const findAmbulance = async (data) => {
  return BackendService.post("api/ambulanceRequest", data);
};

const ambulanceRequestServices = {
  findAmbulance,
};

export default ambulanceRequestServices;
