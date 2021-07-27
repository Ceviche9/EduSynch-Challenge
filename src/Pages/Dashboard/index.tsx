import React from 'react';

import { Card } from '../../Components/Card';

import Logo from '../../Assets/Images/logo.svg';
import Profile from '../../Assets/Images/profile.svg';
import DubleShape from '../../Assets/Images/dubleshape.svg';

import './styles.css';

export const Dashboard = () => {
  return (
    <div id="Dashboard">
      <header className="dashboard-header">
        <div className="dashboard-header-div">
          <div>
            <img src={Logo} alt="Logo" />
          </div>
          <div className="profile-div">
            <h2>menu</h2>
            <img src={Profile} alt="profile_photo" />
          </div>
        </div>
      </header>
      <main className="dashboard-main">
        <div className="message-div">
          <div className="duble-shape-div">
            <img src={DubleShape} alt="duble_shape" />
          </div>
          <div className="dashboard-text">
            <div className="greetings">
              <h3>Hello</h3>
              <h2>Student</h2>
              <h3>.</h3>
            </div>
            <div className="dashboard-text-p">
              <p>Whether you are a student trying </p>
              <p>to find your ideal private language</p>
              <p>teachers/tutors</p>
            </div>
          </div>
        </div>
        <div>
          <Card />
          <Card />
          <Card />
        </div>
      </main>
      <div>
        <h2>footer</h2>
      </div>
    </div>
  );
};
