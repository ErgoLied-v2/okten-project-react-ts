import axios from "axios";
import {baseURL} from "../constants/urls";
import {APIkey} from "../constants/const";

export const axiosInstance = axios.create({
    baseURL,
    headers: {accept: 'application/json'}
});

axiosInstance.interceptors.request.use(request => {
    request.headers.set('Authorization', 'Bearer ' + APIkey);
    return request;
});