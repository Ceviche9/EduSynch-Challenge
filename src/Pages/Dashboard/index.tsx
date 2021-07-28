import React from 'react';

import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { Card } from '../../Components/Card';
import { AvatarBadge } from '../../Components/Avatar';
import { DrawerView } from '../../Components/Drawer';

import Point from '../../Assets/Images/point.svg';
import Logo from '../../Assets/Images/logo.svg';
import Profile from '../../Assets/Images/profile.svg';
import DubleShape from '../../Assets/Images/dubleshape.svg';
import Group from '../../Assets/Images/Group.svg';
import TeacherCard from '../../Assets/Images/card.svg';

import './styles.css';
import './desktopStyles.css';

export const Dashboard = () => {
  return (
    <div id="Dashboard">
      <header className="dashboard-header">
        <div className="dashboard-header-div">
          <div className="dashboard-logo-div">
            <div className="dashboard-desktop-detail">
              <img src={Point} alt="detail" />
            </div>
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
            <div className="dashboard-header-desktop">
              <p>My classes</p>
            </div>
          </div>
          <div className="profile-div">
            <div className="dropdown-div-mobile">
              <DrawerView />
            </div>
            <div className="dropdown-div-desktop">
              <Button>
                <h4>Change to teacher mode</h4>
              </Button>
            </div>
            <AvatarBadge avatar={Profile} />
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
            <div className="dashboard-text-desktop">
              <p>Whether you are a student trying to find your ideal private language</p>
              <p>teachers/tutors</p>
            </div>
          </div>
          <div className="group-img-desktop">
            <img src={Group} alt="Group" />
          </div>
        </div>
        <div className="cards-div">
          <Card
            lessonsNumber={10}
            rating={2}
            title="Master English: Improve Your Speaking"
            photo={TeacherCard}
          />
          <Card
            lessonsNumber={2}
            rating={3}
            title="Master English: Improve Your Speaking"
            photo={TeacherCard}

          />
          <Card
            lessonsNumber={20}
            rating={5}
            title="Master English: Improve Your Speaking"
            photo={TeacherCard}
          />
          <Card
            lessonsNumber={4}
            rating={1}
            title="Master English: Improve Your Speaking"
            photo={TeacherCard}
          />
          <Card
            lessonsNumber={5}
            rating={2}
            title="Master English: Improve Your Speaking"
            photo={TeacherCard}
          />
          <Card
            lessonsNumber={5}
            rating={3}
            title="Master English: Improve Your Speaking"
            photo={TeacherCard}
          />
        </div>
      </main>
      <div className="dashboard-footer">
        <p>Copyright © 2020</p>
        <p>Eduick.</p>
        <div className="dashboard-footer-desktop">
          <p>
            Todos os direitos reservados
          </p>
        </div>
      </div>
    </div>
  );
};
