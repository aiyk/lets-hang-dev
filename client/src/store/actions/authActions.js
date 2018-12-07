import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { GET_ERRORS, SET_CURRENT_USER } from './types';
import { clearCurrentProfile } from './peopleActions';

//Register user
export const registerUser = (userData, history) => dispatch => {
    
    axios
        .post('/api/users/register', userData)
        .then(res => history.push('/login'))
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data 
            })
        );
}

//Login --get user token
export const loginUser = (userData) => dispatch => {
    axios
        .post('/api/users/login', userData)
        .then(res => {

            //save to localstorage
            const { token } = res.data;
            //set token to local storage
            localStorage.setItem('jwtToken', token);
            //set token to Auth header
            setAuthToken(token);
            //decode token to get user data
            const decoded = jwt_decode(token);
            //set current user
            dispatch(setCurrentUser(decoded));
        })
        .catch(err => {
            // console.log(err.response);
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data 
            })
        }
        );
}

//set loggedin user
export const setCurrentUser = (decoded) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

//log user out
export const logoutUser = () => dispatch => {
    //remove the token from localStorage
    localStorage.removeItem('jwtToken');
    //remove auth header for future requests
    setAuthToken(false);
    //set current user to empty object and isAuthenticated to false
    dispatch(setCurrentUser({}));
}