import axios from "axios";

const baseURL = "http://localhost:3002/";

const api  = axios.create({
    baseURL: baseURL,
});



export default api;