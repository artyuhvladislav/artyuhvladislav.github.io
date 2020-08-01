import React from 'react';
const Picture = (props) => {
   
    return <div>    
                <h2>Picture of the day</h2>
                <img src = {props.url} style={{width: '400px'}} alt="img"/>
            </div>
}
export default Picture