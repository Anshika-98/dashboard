import React from 'react';

function AnalyticsCol() {
  return (
    <div className="analytics">
      <div className="column">
        <div className="row">
        +6% climbers compared to same time&day last week
        </div>
        <div className="row">
         22 new climbers this week
        </div>
        <div className="row">
          42 hours of activity tracked this week
        </div>
        <div className="row">
          positive sentiment on climbs has increased by 10% since last week
        </div>
      </div>

      <div className="column">
        <div className="row">
          <div>11 climbers came in today</div>
        </div>
        <div className="row">
          <div >+ 3% climbers since last week</div>
        </div>
        <div className="row">
          <div >30% climbers shared their session on social media</div>
        </div>
        <div className="row">
          <div>Let students know the wall has been reset (clickable)</div>
        </div>
      </div>
    </div>
  );
}
export default AnalyticsCol;
