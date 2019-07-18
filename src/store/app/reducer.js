import { actionTypes } from './actions';

// initial state theme is dark
const getInitialState = () => ({
    theme: 'dark',
});

// updates theme value of sttate to value inside payload
// payload is object that has form {theme: 'value'}
// ...payload, keys of state replace keys in ...state that match (theme)
const app = (state = getInitialState(), { type, payload}) => {
    switch (type) {
        case actionTypes.SET_THEME:
            return {
                ...state,
                ...payload,
            };
            default:
            return state;
    }
};

export default app;