import axios from "axios";
const accessToken = localStorage.getItem('accessToken')
const apiClient = axios.create({
    baseURL: 'http://cerman.tahutekno.com/api',
    withCredentials: true,
	headers: {"Content-Type": "application/json","Authorization": `Bearer ${accessToken}`}
});

export default apiClient