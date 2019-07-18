import { combineReducers } from 'redux';
import app from './app/reducer';

// function combines reducer functions to help build single state tree
const rootReducer = combineReducers({
    app,
});

export default rootReducer;