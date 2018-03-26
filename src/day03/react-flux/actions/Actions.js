import * as ActionTypes from './ActionTypes';
import AppDispatcher from '../dispatcher/Dispatcher';

//加
export const increment = (counterCaption) => {
    AppDispatcher.dispatch({
        type: ActionTypes.INCREMENT,
        counterName: counterCaption
    });
};

//减
export const decrement = (counterCaption) => {
    AppDispatcher.dispatch({
        type: ActionTypes.DECREMENT,
        counterName: counterCaption
    });
};