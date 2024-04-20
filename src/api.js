import axios from "axios";

const baseURL = "http://192.168.1.34:3002/";

const api  = axios.create({
    baseURL: baseURL,
});



export default api;