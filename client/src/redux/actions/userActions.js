import axios from 'axios';
import {START_LOADING, STOP_LOADING} from '../constants/loadingConstants';
import { SHOW_ERROR_MESSAGE ,SHOW_SUCCESS_MESSAGE} from '../constants/messageConstants';
import {GET_USERS, DELETE_USER} from '../constants/userConstants';

export const getUsers = () => async dispatch => {
    try {
        dispatch({ type: START_LOADING });
        const response = await axios.get('/api/user');
        dispatch({ type: STOP_LOADING });
        dispatch({ type: GET_USERS, payload: response.data.users });
    } catch (err) {
        console.log('getUsers api error: ', err);
        dispatch({ type: STOP_LOADING });
        dispatch({ type: SHOW_ERROR_MESSAGE, payload: err.response.data.errorMessage });
    }
}
export const deleteUser = (userId) => async dispatch => {
    try {
        dispatch({ type: START_LOADING });
        const response = await axios.delete(`/api/user/${userId}`);
        dispatch({ type: STOP_LOADING });
        dispatch({ type: DELETE_USER, payload: response.data });
    } catch (err) {
        console.log('deleteUser api error: ', err);
        dispatch({ type: STOP_LOADING });
        dispatch({ type: SHOW_ERROR_MESSAGE, payload: err.response.data.errorMessage });
    }
}