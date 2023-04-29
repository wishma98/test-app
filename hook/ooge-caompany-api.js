import axios from "axios";
import { getOogeCompanyURL } from "../utils";

//axios.defaults.withCredentials=true;
const oogeInstance = axios.create({
  baseURL: "http://146.190.84.144:9005/",
});

console.log("oogeInstance:::", oogeInstance);
oogeInstance.interceptors.request.use(
  async (config) => {
    let accessToken = process.env.RAPID_API_KEY;
    config.headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDI2N2MzZDkxNzNmZjE5M2ZmYTc3NDgiLCJjb21wYW55SWQiOiI2NDI2N2MzZDkxNzNmZjE5M2ZmYTc3NDUiLCJ1c2VyTmFtZSI6ImluZm9AYmFsYWppLmNvbSIsImZpcnN0TmFtZSI6bnVsbCwibGFzdE5hbWUiOm51bGwsInVzZXJUeXBlIjoiQlVTSU5FU1MiLCJpYXQiOjE2ODIxNDQxMTIsImV4cCI6MTY4NDczNjExMn0.UiBCAkaVZOHzD4u6EDTE4sWcldUqn9uca-hW3zBjc5U`,
    };
    //read token from state
    // let accessToken = store.getState().profile.auth.accessToken;
    // if (accessToken) {
    //     config.headers.common.Authorization = `Bearer ${accessToken}`;
    // }
    //read username from state
    // let username = store.getState().profile.user.username;
    // if (username) {
    //     config.headers.common.username = username;
    // }
    //read subscriptionId from state

    //set common headers
    //config.headers.common['Content-Type'] = "application/json";
    //config.headers.common['datetime'] = getApiDateTime();
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for API calls
oogeInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      delete axios.defaults.headers.common["Authorization"];
      return oogeInstance(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default oogeInstance;
