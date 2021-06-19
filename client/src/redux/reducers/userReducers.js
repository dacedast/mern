import {GET_USERS, DELETE_USER} from '../constants/userConstants';

const INITIAL_STATE = {
    users: []
}

const userReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                users: [...action.payload]
            }
        case GET_USERS:
            return {
                users: state.users.filter(u => u._id !== action.payload._id)
            }
        default: 
            return state;
    }
}

export default userReducer;