import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://staffsync.onrender.com/api/v1', // Use http or https based on your server setup

    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true, // Use withCredentials instead of credentials
});

export default axiosInstance;
