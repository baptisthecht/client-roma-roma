import axios from 'axios';

export const makeRequest = axios.create({
    baseURL:"http://lmocalhost:8800/api/",
    withCredentials: true,
})