import React from 'react';
import './App.css';
import all from './all.js';

function App() {
  return (
    <div className="App">
      <header className="App-header-custom">
      
        <div className="header-content">
        <div className="header-left">
        <div className="box-container">
  <div className="box-with-heading">
    <p className='scroll-headings'>wall</p>
    <p className='all-box'>all</p>
  </div>
  <div className="box-with-heading">
    <p className='scroll-headings'>Period</p>
    <p className='week-box'>this week</p>
  </div>
</div>

</div>

          <p className='gym-name'>Palladium Dashboard</p>
          <p className='centre-text'>Welcome back Dan</p>
          
          <div className="header-right">
            <div className="tag-box">
              <p className='tag-text'>56</p>
            </div>
            <div className="reset-box">
              <p className='reset-text'>Next wall reset<br></br>
                09/06-9pm
              </p>
            </div>
          </div>
        </div>
      </header>


      <p>HEY</p>
    </div>
  );
}

export default App;
