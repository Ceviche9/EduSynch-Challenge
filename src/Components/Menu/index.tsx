/* eslint-disable react/jsx-props-no-spreading */
// eslint-disable implicit-arrow-linebreak
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';

import { ModalMenu } from '../ModalMenu';
import hamburger from '../../Assets/Images/hamburger.svg';
import LogoImg from '../../Assets/Images/logo.svg';

import './styles.css';

// Componente da Modal no modo mobile
export const MenuListComposition = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  function handleModalClose() {
    return setOpen(false);
  }

  return (
    <div className="Menu">
      <div>
        <Button
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <div className="Logo-div">
            <img src={hamburger} alt="Menu" />
            <img src={LogoImg} alt="Logo" />
          </div>
        </Button>
        <Popper open={open} role={undefined} transition disablePortal>
          <Paper>
            <ModalMenu onCloseClick={handleModalClose} state={open} />
          </Paper>
        </Popper>
      </div>
    </div>
  );
};
