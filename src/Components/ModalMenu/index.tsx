import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import CloseIcon from '@material-ui/icons/Close';
import { common } from '@material-ui/core/colors';
import { SearchButton } from '../Search';

import LogoImg from '../../Assets/Images/logo.svg';

import './styles.css';

type ModalMenuProps = {

  onCloseClick: () => void;

}

export const ModalMenu = ({ onCloseClick }: ModalMenuProps) => {
  function handleClose() {
    console.log('teste');
    return onCloseClick();
  }

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
      <main>
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
    </div>

  );
};
