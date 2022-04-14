import axios from "axios";
import { Host, ApiEndpoints } from "../common/apiEndPoints";

const config = {
  Headers: {
    "Content-Type": "application/json",
  },
};

const SignupAuth = async (data) => {
  return await axios.post(
    `${Host.BACKEND}${ApiEndpoints.UserEndpoints.route}${ApiEndpoints.UserEndpoints.signup}`,
    data,
    config
  );
};
const LoginAuth = async (data) => {
    return  await  axios.post(`${Host.BACKEND}${ApiEndpoints.UserEndpoints.route}${ApiEndpoints.UserEndpoints.login}` , data , config)
};

export { LoginAuth  , SignupAuth }