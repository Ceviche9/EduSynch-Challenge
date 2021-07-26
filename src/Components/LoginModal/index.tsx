import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

import CloseIcon from '@material-ui/icons/Close';
import { common } from '@material-ui/core/colors';
import Modal from '@material-ui/core/Modal';
import { InputText } from '../input';
import { ModalButton } from '../ModalSearchButton';
import { PasswordInput } from '../PasswordInput';

import './styles.css';

type ModalMenuProps = {

  loginModal: boolean;
  handleCloseLoginModal: () => void;

}

export const LoginModal = (
  {
    loginModal,
    handleCloseLoginModal,
  }: ModalMenuProps,
) => {
  function handleLoginClose() {
    return handleCloseLoginModal();
  }

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
        <Button
          className="CloseButton"
          onClick={handleLoginClose}
        >
          <CloseIcon style={{ color: common.white }} />
        </Button>
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
          <ModalButton>
            <h2>LOGIN</h2>
          </ModalButton>
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
