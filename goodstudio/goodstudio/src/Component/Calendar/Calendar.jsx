import React from 'react';

const Calendar = (props) => {
    
    const onChangeDate = (e) => {
        const date = e.target.value;
        props.changeDate(date);
    }
    return <div style = { {display: 'flex', justifyContent: 'center', padding: '20px'} }>
                <p style = { {padding: '5px'} }>Get date to see picture</p>
                <input  
                        value = {`${props.date[0].year}-${props.date[1].month}-${props.date[2].day}`}
                        onChange = {onChangeDate} type="date" />
            </div>
}

export default Calendar