const DATE_IS_CHANGED = 'DATE_IS_CHANGED';

const  getDateObj = () => {
    const d = new Date();
    const year = d.getFullYear();
    const month = ( d.getMonth()+1 < 10 ) ? '0'+ ( d.getMonth() + 1 ) : d.getMonth() + 1;
    const day = ( d.getDate() < 10 ) ? '0'+ ( d.getDate() ) : d.getDate();

    const date = [{ year: `${year}`}, { month: `${month}`}, {day: `${day}`}];
    return date
    
}
const initialState = { date:getDateObj() };


const calendarReducer = (state = initialState, action) => {
    switch(action.type) {
        case DATE_IS_CHANGED: 
            const date = action.date.split('-');
         
            return {
                ...state,
                date: [
                    {year: date[0]},
                    {month: date[1]},
                    {day: date[2]}
                ],
                dateIsChanged: true
            }
        default: 
            return state
    }
}

export const changeDate = (date) =>({type: DATE_IS_CHANGED, date});
export default calendarReducer
