import React from 'react';

const Calendar = (props) => {
    
    const onChangeDate = (e) => {
        const date = e.target.value;
        props.changeDate(date);
    }
    return <div>
        <input  value = {`${props.date[0].year}-${props.date[1].month}-${props.date[2].day}`}
                onChange = {onChangeDate} type="date" />
    </div>
}

export default Calendar