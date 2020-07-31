import React from 'react';
import './App.css';
import CalendarContainer from './Component/Calendar/CalendarContainer';
import PictureContainer from './Component/Picture/PictureContainer';
import GalleryContainer from './Component/Gallery/GalleryContainer';

function App() {
  return (
    <div className="App">
        <h1>Astronomy picture of the day</h1>
        <CalendarContainer />
        <PictureContainer />
        <GalleryContainer />
    </div>
  );
}

export default App;
