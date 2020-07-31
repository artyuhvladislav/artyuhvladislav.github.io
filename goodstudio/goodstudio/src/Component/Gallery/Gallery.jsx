import React from 'react';
import GalleryItem from './GalleryItem/GalleryItem';
const Gallery = (props) => {
   const galleryElements = props.imgArray.map( el => {
       if(el !== null){
         return <GalleryItem url = {el} />
       }
   })
    return (
        <div >
            <h2>Gallery list</h2>
            <div style= {{display:'flex', flexWrap:'wrap'}}>
                {galleryElements}
            </div>
        </div>
    )
}
export default Gallery          