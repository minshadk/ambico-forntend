import axios from "axios";

const baseURL = "http://localhost:5000/";

//get request
const get = async (path, headers = {}, params = {}) => {
  //generating url
  const url = `${baseURL}${path}`;

  //generating the request
  const response = await axios.get(
    url
    // , _generateParams(headers, params)
  );

  return response.data;
};

//post request
const post = async (path, data = {}, headers = {}, params = {}) => {
  //generating url
  const url = `${baseURL}${path}`;

  //generating the request
  const response = await axios.post(
    url,
    data
    //   _generateParams(headers, params)
  );

  return response.data;
};

const BackendService = {
  get,
  post
  // patch,
  // destroy,
};

export default BackendService;
