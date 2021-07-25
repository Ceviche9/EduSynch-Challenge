import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import { InputText } from '../../Components/input';
import { SearchButton } from '../../Components/Search';
import { CheckboxLabels } from '../../Components/CheckBox';
import { MenuListComposition } from '../../Components/Menu';

import Student from '../../Assets/Images/study.svg';

import './styles.css';

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
