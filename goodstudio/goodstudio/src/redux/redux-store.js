import {createStore, combineReducers} from 'redux';
import  calendarReducer  from './calendarReducer';
import pictureReducer from './pictureReducer';
import galleryReducer from './galleryReducer';
const reducers = combineReducers({
    calendarPage: calendarReducer,
    picturePage: pictureReducer,
})

const saveState = (state) => {
    try {
        const serialisedState = JSON.stringify(state.calendarPage);
        window.localStorage.setItem('app_state', serialisedState);
    } catch (err) {
        alert('Something went wrong!');
    }
};

const loadState = () => {
    try {
        const serialisedState = window.localStorage.getItem('app_state');
        if (!serialisedState) return undefined;
        return JSON.parse(serialisedState);

    } catch (err) {
        alert('Something went wrong!');
        return undefined;
    }
};


const oldState = loadState();
const store = createStore(reducers, oldState);
store.subscribe(() => {
    saveState(store.getState());
});
window.store= store
export default store;