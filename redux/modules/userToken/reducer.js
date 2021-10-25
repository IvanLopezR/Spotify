import { SET_USERTOKEN } from './types';

const initialState = {
    userToken: false
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case SET_USERTOKEN:
            return {
                ...state,
                userToken: action.newState
            };
        default:
            return state;
    }
};