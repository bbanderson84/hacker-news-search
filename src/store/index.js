import { createStore } from 'redux';
import reducer from './reducer';
import middleware from './middleware';

// function that will intialize Redux in app
const configureStore = initialState => {
    const store = createStore (reducer, initialState, middleware);
    return store;
};

export default configureStore;