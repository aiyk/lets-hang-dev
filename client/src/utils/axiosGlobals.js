import axios from 'axios';

const axiosGlobals = () => {
    axios.defaults.baseURL = 'https://lets-hang.herokuapp.com';
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    
}

export default axiosGlobals;