import React from 'react';
import './style.css';

function LandingRender(props) {
  return (
    <div>
      <ul
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          listStyleType: 'none',
          marginTop: '5vh',
        }}
      >
        {' '}
        {props.upcoming || props.tsb || props.maint || props.recall || props.warranty ? (
          <h4 style={{ textDecoration: 'underline' }}>The following information is available for your vehicle:</h4>
        ) : null}
        <li>{props.upcoming ? 'Upcoming Repairs' : null}</li>
        <li>{props.tsb ? 'Technical Service Bulletin' : null}</li>
        <li>{props.maint ? 'Maintenance' : null}</li>
        <li>{props.recall ? 'Safety Recalls' : null}</li>
        <li>{props.warranty ? 'Warranty Information' : null}</li>
      </ul>
    </div>
  );
}

export default LandingRender;
