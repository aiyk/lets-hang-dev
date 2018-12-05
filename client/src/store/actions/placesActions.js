export const createPlace = (place) => {
    return (dispatch, getState) => {
        //make async call
        dispatch({type: 'CREATE_PLACE', place});
    }
};