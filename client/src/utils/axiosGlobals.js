import axios from 'axios';

const axiosGlobals = axios.create({
    baseURL: 'https://lets-hang.herokuapp.com/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'application/x-www-form-urlencoded'}
    
});

export default axiosGlobals;