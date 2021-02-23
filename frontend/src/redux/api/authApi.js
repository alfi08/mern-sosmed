import Axios from "./Axios";

export const LoginAPI = async (username, password) => {
  return await Axios.post("/api/users/login", {username, password}).then(res => res.data);
};

export const RegisterAPI = async (username, email, fullname, password) => {
  return await Axios.post("/api/users/register", {username, password, fullname, email}).then(res => res.data);
};

export const autoLoginAPI = async (token) => {
  return await Axios({url:"/api/users/auto-login",method:"GET", headers:{
    "x-auth-token" : token
  }}).then(res => res.data);
}