import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://cerman.tahutekno.com/api',
    withCredentials: true
});

export default apiClient