import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_API_BACKEND_URL,
    validateStatus:() => true,
    headers: {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
});

export default api;