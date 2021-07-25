import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import CloseIcon from '@material-ui/icons/Close';
import { common } from '@material-ui/core/colors';
import Modal from '@material-ui/core/Modal';
import { SearchButton } from '../Search';

import LogoImg from '../../Assets/Images/logo.svg';

import './styles.css';

type ModalMenuProps = {

  state: boolean;
  onCloseClick: () => void;

}

export const ModalMenu = ({ state, onCloseClick }: ModalMenuProps) => {
  function handleClose() {
    return onCloseClick();
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
        <SearchButton>
          <h2>Get Started</h2>
        </SearchButton>
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
    </div>
  );
};
