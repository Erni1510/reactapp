import axios from "axios";
import {saveToLocal, getFromLocal, removeFromLocal} from './Storage'

const accessToken = getFromLocal('accessToken')
const apiClient = axios.create({
    baseURL: 'http://cerman.tahutekno.com/api',
    withCredentials: true,
    headers: { "Content-Type": "application/json", "Authorization": `Bearer ${accessToken}` }
});

export default apiClient