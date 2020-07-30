import {createStore, combineReducers} from 'redux';
import  calendarReducer  from './calendarReducer';
const reducers = combineReducers({
    calendarPage: calendarReducer
})
const store = createStore(reducers);
window.store = store
export default store;