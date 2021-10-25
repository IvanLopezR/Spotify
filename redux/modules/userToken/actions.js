import { SET_USERTOKEN } from './types';

export const setUserToken = newValue => {
    return {
        type: SET_USERTOKEN,
        newState: newValue
    };
};