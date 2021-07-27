import React from 'react';

import Logo from '../../Assets/Images/logo.svg';
import Profile from '../../Assets/Images/profile.svg';
import DubleShape from '../../Assets/Images/dubleshape.svg';

export const Dashboard = () => {
  return (
    <div id="Dashboard">
      <header>
        <div className="dashboard-header">
          <div>
            <img src={Logo} alt="Logo" />
          </div>
          <div className="profile-div">
            <h2>menu</h2>
            <img src={Profile} alt="profile_photo" />
          </div>
        </div>
      </header>
      <main>
        <div className="message-div">
          <div className="duble-shape-div">
            <img src={DubleShape} alt="duble_shape" />
          </div>
          <div className="dashboard-text">
            <h3>Hello</h3>
            <h2>Student</h2>
            <div className="dashboard-text-p">
              <p>Whether you are a student trying </p>
              <p>to find your ideal private language</p>
              <p>teachers/tutors</p>
            </div>
          </div>
        </div>
        <div>
          <h2>cards</h2>
        </div>
      </main>
      <footer>
        <h2>footer</h2>
      </footer>
    </div>
  );
};
