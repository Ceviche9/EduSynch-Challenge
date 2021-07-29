import React, { useState } from 'react';

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import './styles.css';

type Anchor = 'top';

// Lógica da dropdown que aparece na dashboard no modo mobile.
export const DrawerView = () => {
  // o state define se a dashboard está visível oou não na tela.
  const [state, setState] = useState<boolean>(false);

  // função que recebe o evento que torna a dropdown visível.
  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown'
      && ((event as React.KeyboardEvent).key === 'Tab'
        || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState(open);
  };

  // conteúdo da dropdown.
  const list = (anchor: Anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List
        className="Drawer-body"
      >
        <ListItem button>
          <ListItemText primary="CHANGE TO TEACHER MODE" />
          <ListItemIcon>
            {' '}
            <ArrowForwardIcon />
            {' '}
          </ListItemIcon>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {(['top'] as Anchor[]).map((anchor) => (
        <div
          key={anchor}
        >
          <Button onClick={toggleDrawer(true)}><KeyboardArrowDownIcon /></Button>
          <Drawer
            anchor={anchor}
            open={state}
            onClose={toggleDrawer(false)}
          >
            {list(anchor)}
          </Drawer>
        </div>
      ))}
    </div>
  );
};
