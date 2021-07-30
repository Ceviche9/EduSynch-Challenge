/* eslint-disable max-len */
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import { Button } from '../../Components/Button';
import { InputText } from '../../Components/input';
import { SearchButton } from '../../Components/Search';
import { DesktopButton } from '../../Components/DesktopButton';
import { DesktopSearchButton } from '../../Components/DesktopSearchButton';

import { LoginModal } from '../../Components/LoginModal';

import { CheckboxLabels } from '../../Components/CheckBox';
import { MenuListComposition } from '../../Components/Menu';

import StudentDesktop from '../../Assets/Images/student.svg';
import StudentMobile from '../../Assets/Images/study.svg';
import Logo from '../../Assets/Images/logo.svg';

import './styles.css';
import './desktopstyle.css';

export const Home = () => {
  // A variável student indica se o usuário é um estudante ou não.
  const [student, setStudent] = useState(true);
  // A variável teacher indica se o usuário é um professor ou não.
  // Não é possível que um usuário selecione as duas opções, apenas uma será armazenada como true ou false.
  const [teacher, setTeacher] = useState(false);
  // LoginModal indica se a modal de login está na tela ou não.
  const [loginModal, setLoginModal] = useState(false);
  // Aqui o valor digitado na busca é armazenado.
  const [inputValue, setInputValue] = useState('');

  // Para mudar o valor da checkbox do Teacher
  const handleStateTeacher = () => {
    if (teacher === false) {
      setTeacher(true);
      return setStudent(false);
    }

    setStudent(false);
    return setTeacher(true);
  };

  // Para mudar o valor da checkbox do Student
  const handleStateStudent = () => {
    if (student === false) {
      setStudent(true);
      return setTeacher(false);
    }

    setTeacher(false);
    return setStudent(true);
  };

  // Para mostrar a Modal de Login
  function handleLoginModalToggle() {
    return setLoginModal(true);
  }

  // Para fechar a Modal
  function handleModalClose() {
    return setLoginModal(false);
  }

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
          <div className="get-started-div">
            <DesktopButton
              onClick={handleLoginModalToggle}
              className="getstarted-button"
            >
              <h2>Get Started</h2>
            </DesktopButton>
          </div>
        </div>
      </header>
      <main className="main-mobile">
        <div className="desktop-login-modal">
          <Popper open={loginModal} role={undefined} transition disablePortal>
            <Paper>
              <LoginModal handleCloseLoginModal={handleModalClose} loginModal={loginModal} />
            </Paper>
          </Popper>
        </div>
        <div className="main-content">
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
                  onChange={(e) => setInputValue(e.target.value)}
                  value={inputValue}
                  placeholder="Type here what are you looking for"
                  maxLength={35}
                />
              </div>
              <div className="search-content">
                <div className="Option">
                  <Button
                    checked={teacher}
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
                    checked={student}
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
                <div className="search-button-desktop">
                  <DesktopSearchButton>
                    <h2>SEARCH</h2>
                  </DesktopSearchButton>
                </div>
              </div>
            </div>
          </div>

          <div className="Student-img-desktop">
            <img src={StudentDesktop} alt="student" />
          </div>

          <div className="Student-img-mobile">
            <img src={StudentMobile} alt="student" />
          </div>
        </div>

      </main>

      <div id="footer-div">
        <footer className="Footer" />
      </div>

    </div>

  );
};
