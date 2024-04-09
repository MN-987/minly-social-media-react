import axios from "axios";


console.log('process.env.backend_URL',process.env.REACT_APP_backend_URL)

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_backend_URL
});

