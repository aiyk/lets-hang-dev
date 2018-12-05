export const createPerson = (person) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call
        const firestore = getFirestore();
        firestore.collection('people').add({
            ...person,
            personId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_PERSON', person});
        }).catch((err) => {
            dispatch({type: 'CREATE_PERSON_ERROR', err});
        })
        
    }
};