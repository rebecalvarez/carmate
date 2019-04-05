import React from 'react';
import './style.css';
import Icon from './images/iconcheck.png';
import GoogleLogin from 'react-google-login';
import Login from '../../../vibe/components/Login/Login'

function LandingRender(props) {
  return (
    <div className="container ">
      <ul
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'left',
          listStyleType: 'none',
          marginTop: '5vh',
        }}
      >
        {' '}
        {props.upcoming || props.tsb || props.maint || props.recall || props.warranty ? (
          <div>
            <h3 className="rendertitle">The following information is available for your vehicle:</h3>
          </div>
        ) : null}
        <li className="line">
          {props.upcoming ? (
            <p>
              <img src={Icon} alt="check" />
              Upcoming Repairs{' '}
            </p>
          ) : null}
        </li>
        <li className="line">
          {props.maint ? (
            <p>
              <img src={Icon} alt="check" />
              Maintenance
            </p>
          ) : null}
        </li>
        <li className="line">
          {props.recall ? (
            <p>
              <img src={Icon} alt="check" />
              Safety Recalls
            </p>
          ) : null}
        </li>
        <li className="line">
          {props.warranty ? (
            <p>
              <img src={Icon} alt="check" />
              Warranty Information
            </p>
          ) : null}
        </li>
      </ul>

      {props.upcoming || props.tsb || props.maint || props.recall || props.warranty ? (
        <div>
          <h4 className="rendersubtitle">
            Create an account to see more details...
            <Login />
            
          </h4>
        </div>
      ) : null}
    </div>
  );
}

export default LandingRender;
