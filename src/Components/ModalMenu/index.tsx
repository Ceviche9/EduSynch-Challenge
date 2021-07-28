/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import CloseIcon from '@material-ui/icons/Close';
import { common } from '@material-ui/core/colors';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import { ModalButton } from '../ModalSearchButton';
import { LoginModal } from '../LoginModal';

import LogoImg from '../../Assets/Images/logo.svg';

import './styles.css';

type ModalMenuProps = {
  state: boolean;
  onCloseClick: () => void;
}

export const ModalMenu = (
  {
    state,
    onCloseClick,
  }: ModalMenuProps,
) => {
  const [loginModal, setLoginModal] = useState(false);

  function handleLoginModalToggle() {
    return setLoginModal(true);
  }

  function handleModalClose() {
    return setLoginModal(false);
  }

  function handleClose() {
    onCloseClick();
  }

  const body = (
    <main id="Modal-div">
      <header>
        <img src={LogoImg} alt="Logo" />
        <Button
          onClick={handleClose}
        >
          <CloseIcon style={{ color: common.white }} />
        </Button>
      </header>
      <div className="info">
        <Link to="/">How it Works</Link>
        <Link to="/">About us</Link>
      </div>
      <div className="Search">
        <ModalButton onClick={handleLoginModalToggle}>
          <h2>Get Started</h2>
        </ModalButton>
      </div>
    </main>
  );

  return (
    <div>
      <Modal
        open={state}
        onClose={handleClose}
      >
        {body}
      </Modal>

      <Popper open={loginModal} role={undefined} transition disablePortal>
        <Paper>
          <LoginModal handleCloseLoginModal={handleModalClose} loginModal={loginModal} />
        </Paper>
      </Popper>
    </div>
  );
};
