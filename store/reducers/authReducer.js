import {LOGIN_USER, LOGOUT_USER} from "../../constants/redux-constants";

const initialState = {
    user: null,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                user: action.user,
            }
        case LOGOUT_USER:
            return {
                ...state,
                user: null,
            }
        default:
            return state;
    }
}

export default authReducer;