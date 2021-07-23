import React from 'react';

import { InputText } from '../../Components/input';
import { SearchButton } from '../../Components/Search';

import LogoImg from '../../Assets/Images/logo.svg';
import Student from '../../Assets/Images/study.svg';

import './styles.css';

export const Home = () => {
  return (
    <div id="Home-page">
      <header className="Header">
        <img src={LogoImg} alt="Logo" />
      </header>
      <main>
        <div className="Title">
          <h2>
            Find your
          </h2>
          <h1>
            BEST TEACHER
          </h1>
        </div>
        <div className="SearchBox">
          <InputText
            placeholder="Type here what are you looking for"
            maxLength={35}
          />

          <div className="Option">
            <button type="button">
              <h1>Im a teacher</h1>
            </button>

            <button type="button">
              <h1>Im a student</h1>
            </button>
          </div>
          <SearchButton>
            <h1>SEARCH</h1>
          </SearchButton>
        </div>

        <div className="Student-img">
          <img src={Student} alt="student" />

        </div>
        <footer className="Footer" />

      </main>
    </div>

  );
};
