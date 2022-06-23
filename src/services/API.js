import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://cerman.tahutekno.com/api',
    withCredentials: true,
    headers: { 'Content-Type': 'application/json' }
});

export default apiClient