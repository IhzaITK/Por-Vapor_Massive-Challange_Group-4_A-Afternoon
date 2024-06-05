import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8888', // Adjust this to your backend server URL
});

export default axiosInstance;