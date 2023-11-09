import axios from "axios";

const baseApi = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    validateStatus:() => true,
    headers: {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
});

export default baseApi;