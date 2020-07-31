import React from 'react';
const GalleryItem = (props) => {
    return <div>
                <img src={props.url}  style={{width:'100px'}}alt=""/>
            </div>
}
export default GalleryItem