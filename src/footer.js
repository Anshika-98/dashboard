import React from 'react';

function Footer() {
    const columnStyle = {
        display: 'flex',
        flexDirection: 'row',
      };
      const footerstyle={
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr 1fr', 
        justifyContent: 'center', paddingLeft:'200px',
        fontFamily:'Noto sans, sans-serif',
      }
    
  return (
<div className="footer" style={footerstyle}>

      <div className="column" style={columnStyle}>
        <div><h3 style={{ textDecoration: 'underline', marginBottom: '10px' }}>Weekly Overview</h3>
        <div style={{textAlign:'left'}}><p>+ new climbers</p>
      <p>+ traffic</p>
      <p>- difficulty of climbs completed</p>
      <p>+ content sharing</p></div>
    </div>

      </div>
      <div className="column" style={columnStyle}>
      <div><h3 style={{ textDecoration: 'underline', marginBottom: '10px' }}>Suggestions</h3>
        <div style={{textAlign:'left'}}>
      <p>Set higher difficulty</p>
      <p>Repost climber content (clickable)</p></div>
    </div>
        
      </div>
      <div className="column" style={columnStyle}>
      <div><h3 style={{ textDecoration: 'underline', marginTop: '10px' }}>Month Overview</h3>
        <div style={{textAlign:'left'}}>
      <p>+new climbers</p>
      <p>-traffic</p>
      <p>=difficulty of climbs completed</p>
      <p>+content sharing</p></div>
    </div>
      </div>
    </div>
  );
}

export default Footer;
