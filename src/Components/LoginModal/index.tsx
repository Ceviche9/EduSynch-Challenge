import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';

import CloseIcon from '@material-ui/icons/Close';
import { common } from '@material-ui/core/colors';
import Modal from '@material-ui/core/Modal';
import CancelIcon from '@material-ui/icons/Cancel';
import { InputText } from '../input';
import { ModalButton } from '../ModalSearchButton';
import { PasswordInput } from '../PasswordInput';
import { DesktopButton } from '../DesktopButton';

import './styles.css';

type ModalMenuProps = {
  loginModal: boolean;
  handleCloseLoginModal: () => void;
}

// Componente da Modal de Login
export const LoginModal = (
  {
    loginModal,
    handleCloseLoginModal,
  }: ModalMenuProps,
) => {
  function handleLoginClose() {
    return handleCloseLoginModal();
  }

  const history = useHistory();

  // Para levar o usuário até a dashboard
  function handleLogin() {
    history.push('/dashboard');
  }

  // Corpo do componente da modal de Login
  const login = (
    <div id="login-modal">
      <header>
        <div className="login-title">
          <h2>
            Get Started
          </h2>
          <h1>
            JUST LOGIN
          </h1>
        </div>
        <div className="login-modal-button-mobile">
          <Button
            className="CloseButton"
            onClick={handleLoginClose}
          >
            <CloseIcon style={{ color: common.white }} />
          </Button>
        </div>
        <div className="login-modal-button-desktop">
          <Button
            className="CloseButton"
            onClick={handleLoginClose}
          >
            <CancelIcon style={{ color: common.white, fontSize: 'large' }} />
          </Button>
        </div>
      </header>
      <main>
        <div className="Auth">
          <div className="username-input">
            <p>Username:</p>
            <InputText />
          </div>
          <div className="password-input">
            <PasswordInput />
          </div>
          <div className="modal-button-div">
            <div className="modal-button-mobile">
              <ModalButton>
                <h2>LOGIN</h2>
              </ModalButton>
            </div>
            <div className="modal-button-desktop">
              <DesktopButton
                onClick={handleLogin}
              >
                <h2>LOGIN</h2>
              </DesktopButton>
            </div>
          </div>
        </div>
      </main>
    </div>
  );

  return (
    <div>
      <Modal
        open={loginModal}
        onClose={handleCloseLoginModal}
      >
        {login}
      </Modal>
    </div>
  );
};
