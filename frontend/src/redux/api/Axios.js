import axios from "axios";

const Axios  = axios.create({
  baseURL : "http://www.localhost:5000",
  responseType: "json"
});

export default Axios;