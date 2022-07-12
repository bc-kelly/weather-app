import React, {useState} from 'react';
import axios from 'axios';

function App() {

  // const url = 'https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=5787ee0fcc1ed6b74e1a41d4492c47ab'


  return (
    <div className="app">
      <h1> Hello </h1>
      <div className="container"> 
        <div className="top">
          <div className="location">
            <p> Dallas </p>
          </div>
          <div className="temp">
            <h1> 60°F </h1>
          </div>
          <div className="description">
            <p> Clouds </p>
          </div>
        </div>
        <div className="bottom"> 
          <div className="feels">
              <p> 65°F </p>
          </div>
          <div className="humidity">
              <p> 20% </p>
          </div>
          <div className="wind">
              12 MPH
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
