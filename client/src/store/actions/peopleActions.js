import axios from 'axios';
import { GET_PROFILE, GET_PROFILES, PROFILE_LOADING, CLEAR_CURRENT_PROFILE } from './types';

//get current profile
export const getCurrentProfile = () => dispatch => {
    dispatch(setProfileLoading());
    axios.get('/api/profile')
        .then(res => 
            dispatch({
                type: GET_PROFILE,
                payload: res.data
            })
        )
        .catch( err =>
            dispatch({
                type: GET_PROFILE,
                payload: {}
            })    
        )
}

//profile loading
export const setProfileLoading = () =>{
    return {
        type: PROFILE_LOADING
    }
}

//clear profile
export const clearCurrentProfile = () =>{ 
    return {
        type: CLEAR_CURRENT_PROFILE
    }
}

//get all profiles
export const getProfiles = () => dispatch => {
    dispatch(setProfileLoading()); console.log('*******');
    axios.get('/api/profile/all')
        .then(res => 
            dispatch({
                type: GET_PROFILES,
                payload: res.data
            })
        )
        .catch( err =>
            dispatch({
                type: GET_PROFILES,
                payload: null
            })    
        )
}
