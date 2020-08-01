import {createStore, combineReducers} from 'redux';
import  calendarReducer  from './calendarReducer';
import pictureReducer from './pictureReducer';
const reducers = combineReducers({
    calendarPage: calendarReducer,
    picturePage: pictureReducer,
    
})


const store = createStore(reducers);

export default store;