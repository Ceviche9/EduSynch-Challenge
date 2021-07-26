/* eslint-disable max-len */
import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { InputText } from '../../Components/input';
import { SearchButton } from '../../Components/Search';
import { DesktopButton } from '../../Components/DesktopButton';
import { CheckboxLabels } from '../../Components/CheckBox';
import { MenuListComposition } from '../../Components/Menu';

import Student from '../../Assets/Images/study.svg';
import Logo from '../../Assets/Images/logo.svg';

import './styles.css';
import './desktopstyle.css';

export const Home = () => {
  const [student, setStudent] = useState(true);
  const [teacher, setTeacher] = useState(false);

  const handleStateTeacher = () => {
    if (teacher === false) {
      setTeacher(true);
      return setStudent(false);
    }

    setStudent(false);
    return setTeacher(true);
  };

  const handleStateStudent = () => {
    if (student === false) {
      setStudent(true);
      return setTeacher(false);
    }

    setTeacher(false);
    return setStudent(true);
  };

  return (
    <div id="Home-page">
      <header className="Header">
        <div className="menu">
          <MenuListComposition />
        </div>
        <div className="NavBar">
          <div className="logo-info">
            <img src={Logo} alt="Logo" />
            <div className="header-logo-info">
              <Link to="/">How it Works</Link>
              <Link to="/">About us</Link>
            </div>
          </div>
          <div>
            <DesktopButton
              className="getstarted-button"
            >
              <h2>GET STARTED</h2>
            </DesktopButton>
          </div>
        </div>
      </header>
      <main className="main-mobile">
        <div className="search-container">
          <div className="Title">
            <h2>
              Find your
            </h2>
            <h1>
              BEST TEACHER
            </h1>
            <div className="Text">
              <p>
                Whether you are a student trying to find your ideal private
              </p>
              <p>
                language teachers/tutors or a teacher trying to find great students
              </p>
              <p>
                for your customized private lessons!
              </p>
            </div>
          </div>
          <div className="SearchBox">
            <div className="input-text-div">
              <InputText
                placeholder="Type here what are you looking for"
                maxLength={35}
              />
            </div>
            <div className="search-content">
              <div className="Option">
                <Button
                  onClick={handleStateTeacher}
                  className="Option-button"
                >
                  <div className="Option-div">
                    <CheckboxLabels state={teacher}>
                      <p>I&apos;M A TEACHER</p>
                    </CheckboxLabels>
                  </div>
                </Button>

                <Button
                  onClick={handleStateStudent}
                  className="Option-button"
                >
                  <div className="Option-div">
                    <CheckboxLabels state={student}>
                      <p>I&apos;M A STUDENT</p>
                    </CheckboxLabels>
                  </div>
                </Button>
              </div>
              <div className="search-button-mobile">
                <SearchButton>
                  <h2>SEARCH</h2>
                </SearchButton>
              </div>
              <div search-button-desktop />
            </div>
          </div>
        </div>

        <div className="Student-img">
          <img src={Student} alt="student" />
        </div>
      </main>

      <div id="footer-div">
        <footer className="Footer" />
      </div>

    </div>

  );
};
