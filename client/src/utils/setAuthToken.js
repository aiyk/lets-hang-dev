import axios from 'axios';

const setAuthToken = token => {
    if(token){
        //axios global config
        //apply to every request
        axios.defaults.headers.common['Authorization'] = token;
        axios.defaults.baseURL = 'https://lets-hang.herokuapp.com';
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    } else {
        //delete auth header
        delete axios.defaults.headers.common['Authorization'];
    }
}

export default setAuthToken;