/* eslint-disable react/jsx-props-no-spreading */
// eslint-disable implicit-arrow-linebreak
import React from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';

import MenuIcon from '@material-ui/icons/Menu';
import { common } from '@material-ui/core/colors';
import { ModalMenu } from '../ModalMenu';
import LogoImg from '../../Assets/Images/logo.svg';

import './styles.css';

export const MenuListComposition = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  function handleModalClose() {
    console.log('Função chamada');
    setOpen(false);
  }

  return (
    <div className="Menu">
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <div className="Logo-div">
            <MenuIcon style={{ color: common.white }} />
            <img src={LogoImg} alt="Logo" />
          </div>
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          <Paper>
            <ModalMenu onCloseClick={handleModalClose} state={open} />
          </Paper>
        </Popper>
      </div>
    </div>
  );
};
