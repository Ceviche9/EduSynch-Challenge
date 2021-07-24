import React from 'react';

import { InputText } from '../../Components/input';
import { SearchButton } from '../../Components/Search';
import { CheckboxLabels } from '../../Components/CheckBox';
import { MenuListComposition } from '../../Components/Menu';

import Student from '../../Assets/Images/study.svg';

import './styles.css';

export const Home = () => {
  return (
    <div id="Home-page">
      <header className="Header">
        <MenuListComposition />
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
            <div className="Option-div">
              <CheckboxLabels title="I'M A TEACHER" />
            </div>

            <div className="Option-div">
              <CheckboxLabels title="I'M A STUDENT" />
            </div>
          </div>
          <SearchButton>
            <h2>SEARCH</h2>
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
