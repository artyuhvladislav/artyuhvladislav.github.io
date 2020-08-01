const DATE_IS_CHANGED = 'DATE_IS_CHANGED';
const URL_IS_CHANGED = 'URL_IS_CHANGED';

const  getDateObj = () => {
    const d = new Date();
    const year = d.getFullYear();
    const month = ( d.getMonth()+1 < 10 ) ? '0'+ ( d.getMonth() + 1 ) : d.getMonth() + 1;
    const day = ( d.getDate() < 10 ) ? '0'+ ( d.getDate() ) : d.getDate();
    return `${year}-${month}-${day}`
    
}
const localDateFn = () => {
    const localDate = window.localStorage.getItem('app_date');
    return (localDate === undefined) ? '' : window.localStorage.getItem('app_date')
}

const initialState = {date: localDateFn() , url: '', imgArray: [] };


const calendarReducer = (state = initialState, action) => {
    switch(action.type) {
        case DATE_IS_CHANGED: 
            
            window.localStorage.setItem('app_date', action.date);
            if(getDateObj() === window.localStorage.getItem('app_date')){
                window.localStorage.removeItem('app_date')
            }
            
            return {
                ...state,
               date: action.date,
               url: action.url
            }

        case URL_IS_CHANGED: 
            
            return {
                ...state,
                url: action.url
            }

        default: 
            return state
    }
}

export const changeDate = (date,url) =>({type: DATE_IS_CHANGED, date});
export const setUrl = (url) =>({type: URL_IS_CHANGED, url});

export default calendarReducer
