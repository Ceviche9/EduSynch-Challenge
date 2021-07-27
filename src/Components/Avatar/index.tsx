import React from 'react';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import {
  Theme, withStyles, createStyles,
} from '@material-ui/core/styles';

const StyledBadge = withStyles((theme: Theme) => createStyles({
  badge: {
    backgroundColor: '#FFD74F',
    color: '#FFD74F',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);

interface IAvatarProps {
  avatar: string;
}

// Aqui é definido o corpo do ícone de avatar do usuário.
export const AvatarBadge = ({ avatar }: IAvatarProps) => {
  return (
    <div>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        variant="dot"
      >
        <Avatar alt="User" src={avatar} />
      </StyledBadge>
      <Badge
        overlap="circular"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      />
    </div>
  );
};
