import axios from "axios";

const axiosSecure = axios.create({
     baseURL: 'https://api-fresh-harvest.code-commando.com/api/v1',
     withCredentials: true
})


export default axiosSecure;