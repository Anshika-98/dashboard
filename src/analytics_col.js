import React from 'react';

function AnalyticsCol() {
  const rowStyle = {
    display: 'flex',
    width: '295px',
    height: '70px',
    padding: '22px 12px 22px 11px',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    margin: '10px',
    borderRadius: '8px',
    background: '#C7C7C7',
    fontSize: '16px',
    color: '#000', // Text color
    textAlign: 'center',
    fontFamily: 'Noto Sans,sans-serif',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
  };
  
  

  const columnStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <div className="columns" style={{ display: 'flex', gap: '20px' }}>
      <div className="column" style={columnStyle}>
        <div className="row" style={rowStyle}>
        <span style={{ fontWeight: 'bold' }}>+6%</span>
        climbers compared to the same time & day last week
        </div>
        <div className="row" style={rowStyle}>
        <span style={{fontWeight:'bold'}}>22&nbsp;</span>new climbers this week
        </div>
        <div className="row" style={rowStyle}>
          <span style={{fontWeight:'bold'}}>42&nbsp;</span> hours of activity tracked this week
        </div>
        <div className="row" style={rowStyle}>
          Positive sentiment on climbs has increased by 10% since last week
        </div>
      </div>
      <div className="column" style={columnStyle}>
        <div className="row" style={rowStyle}>
        <span style={{fontWeight:'bold'}}>11&nbsp;</span>climbers came in today
        </div>
        <div className="row" style={rowStyle}>
        <span style={{fontWeight:'bold'}}>+3%&nbsp;</span>climbers since last week
        </div>
        <div className="row" style={rowStyle}>
        <span style={{fontWeight:'bold'}}>+30%&nbsp;</span> climbers shared their session on social media
        </div>
        <div className="row" style={rowStyle}>
          <div>Let students know the wall has been reset (clickable)</div>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsCol;
