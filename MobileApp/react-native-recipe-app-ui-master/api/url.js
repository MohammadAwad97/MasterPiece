import axios from "axios";

//Create the baseUrl:
export const LMS_API = axios.create({
  baseURL: "http://10.7.0.206:3000/api/v1",
  withCredentials: true,
});

// 10.7.3.220
// 10.7.3.234
// 10.7.0.206
