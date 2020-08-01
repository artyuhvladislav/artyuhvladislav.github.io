import React from 'react';
import './App.css';
import CalendarContainer from './Component/Calendar/CalendarContainer';
import PictureContainer from './Component/Picture/PictureContainer';

function App() {
  return (
    <div className="App">
        <h1>Astronomy picture of the day</h1>
        <CalendarContainer />
        <PictureContainer />
    </div>
  );
}

export default App;
