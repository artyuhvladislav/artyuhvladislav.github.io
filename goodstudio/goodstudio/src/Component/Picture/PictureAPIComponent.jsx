import React from 'react';
import * as axios from 'axios';
import Picture from './Picture';
const PictureAPIComponent = (props) => {
        const KEY = 'eHgoN8Y7HHgkpDFGKnvrzgpNquXbruKhTSHVU0rQ';
        let date = `${props.date[0].year}-${props.date[1].month}-${props.date[2].day}`;
        let url = `https://api.nasa.gov/planetary/apod?api_key=${KEY}&date=${date}`;
        try {
            
            axios.get(url).then(response => {
                
                props.setPicture(response.data.url)
            })
        } catch (error) {
            alert(error.message)
        }
        
    return (
        <Picture url={props.url} />
    )
}

export default PictureAPIComponent