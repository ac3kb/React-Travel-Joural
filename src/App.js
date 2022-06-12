import React from 'react';
import './App.css';

import Header from "./components/Header/Header.js";
import Destination from './components/Destination/Destination';

import Data from './Data.js';


function App() {
  const Destinations = Data.map(el => {
    return (
      <Destination
        {...el}
      />
    )
  })


  return (
    <div className='App'>
      <div className='container'>
        <div className="container-app">
          <Header/>
          <div className='container-destinations'>
            {Destinations}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
