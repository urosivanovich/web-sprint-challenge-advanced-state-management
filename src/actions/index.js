import axios from 'axios';
export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAIL = 'FAIL';
export const ADD_SMURF = 'ADD_SMURF';
export const ERROR_MESSAGE = 'ERROR_MESSAGE';

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.


export const getSmurfs = () => (dispatch) => {
    dispatch({type: FETCHING});
    axios.get('http://localhost:3333/smurfs')
    .then(resp=>{
        dispatch({type: SUCCESS, payload:resp.data})
    })
    .catch(err => {
        dispatch({type: FAIL, payload:err.message})
    })
}


export const postSmurf = (smurf) => {
    return({type: ADD_SMURF, payload:smurf})
}

export const errorMsg = (message) => {
    return({type: ERROR_MESSAGE, payload: message})
}