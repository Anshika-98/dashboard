import React from 'react';

function AnalyticsCol() {
  return (
    <div className="columns-container">
      <div className="column">
        <div className="row">
          <p>+6% climbers compared to same time&day last week</p>
        </div>
        <div className="row">
          {<p>22 new climbers this week </p>}
        </div>
        <div className="row">
          {<p> 42 hours of activity tracked this week</p>}
        </div>
        <div className="row">
          {<p>positive sentiment on climbs has increased by 10% since last week </p>}
        </div>
      </div>

      <div className="column">
        <div className="row">
        <p>11 climbers came in today</p>
        </div>
        <div className="row">
          {<p>+ 3% climbers since last week </p>}
        </div>
        <div className="row">
          {<p>30% climbers shared their session on social media</p>}
        </div>
        <div className="row">
          {<p>Let students know the wall has been reset (clickable)</p>}
        </div>
      </div>
    </div>
  );
}

export default AnalyticsCol;
