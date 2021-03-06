import { createStore, applyMiddleware } from 'redux';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';
import combinedReducer from './reducers';

const bindMiddleware = (middleware) => {
    return applyMiddleware(...middleware);
};

const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload,
        };

        return nextState;
    } else {
        return combinedReducer(state, action);
    }
};

const initStore = () => {
    return createStore(reducer, bindMiddleware([thunkMiddleware]));
};

export const wrapper = createWrapper(initStore);
