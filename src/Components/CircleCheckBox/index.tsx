/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { withStyles } from '@material-ui/core/styles';
import { yellow } from '@material-ui/core/colors';

import './styles.css';

export const CircleCheckBox = withStyles({
  root: {
    color: yellow[300],
    '&$checked': {
      color: yellow[700],
    },
  },
  checked: {},
})((props: CheckboxProps) => {
  return (
    <Checkbox
      className="Checkbox"
      icon={<CheckCircleIcon />}
      checkedIcon={<CheckCircleIcon />}
      color="default"
      size="medium"
      title={props.title}
      {...props}
    />
  );
});
