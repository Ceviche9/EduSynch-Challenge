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
    console.log('teste');
    return onCloseClick();
  }

  const body = (
    <main>
      <div className="info">
        <Link id="simple-modal-title" to="/">How it Works</Link>
        <Link id="simple-modal-description" to="/">About us</Link>
      </div>
      <div className="Search">
        <SearchButton>
          <h2>Get Started</h2>
        </SearchButton>
      </div>
    </main>
  );

  return (

    <div id="Modal-div">
      <header>
        <img src={LogoImg} alt="Logo" />
        <Button
          onClick={handleClose}
        >
          <CloseIcon style={{ color: common.white }} />
        </Button>

      </header>
      <Modal
        open={state}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>

  );
};
