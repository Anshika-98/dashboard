import React from 'react';
import './App.css';
import Dropdown from './dropdown';
import AnalyticsCol from './analytics_col';
function App() {
  return (
    <div className="App">
      <header className="App-header-custom">
        <div className="header-content">
        <div className='header-left'><Dropdown /></div>
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
      <AnalyticsCol />
    </div>
  );
}
export default App;