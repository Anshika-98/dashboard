import React from 'react';
import './App.css';
import Dropdown from './dropdown';
import AnalyticsCol from './analytics_col';
import climbpng from './images/Palladium climbing.jpeg';
import gymimage from './images/NYU-sportlogo.png';
function App() {
  return (
    <div className="App">
      <header className="App-header-custom">
        <div className="header-content">
        <div className='header-left'><Dropdown /></div>
          <p className='gym-name'>Palladium Dashboard</p>
          <div className='gym-image'><img src={gymimage} alt="climb" width="50px" /></div>
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
      <div className='analytics'>
       <div className='row'><AnalyticsCol /></div>
     
        <img src={climbpng} alt="climb" width="400px" />
      </div>
    </div>
  );
}
export default App;