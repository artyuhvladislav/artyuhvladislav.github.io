import React from 'react';

const Calendar = (props) => {
    
    const onChangeDate = (e) => {
        const date = e.target.value;
        props.changeDate(date);
        const KEY = 'iJO5vN1kBXveLSvbgO7qkgimFb8mIuEezsjKK9nk';
        let url = `https://api.nasa.gov/planetary/apod?api_key=${KEY}&date=${date}`;
        props.setUrl(url);
    }
    
    return <div style = { {display: 'flex', justifyContent: 'center', padding: '20px'} }>
                <p style = { {padding: '5px'} }>Get date to see picture</p>
                <input                          
                        value = {props.date !== null ? props.date : ''}
                        onChange = {onChangeDate} type="date" />
            </div>
}

export default Calendar