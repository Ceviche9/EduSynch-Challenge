/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { yellow } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import './styles.css';

export const CheckBox = withStyles({
  root: {
    color: yellow[600],
    '&$checked': {
      color: yellow[700],
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

export default function CheckboxLabels() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormControlLabel
      control={(
        <Checkbox
          icon={<CheckCircleIcon />}
          checked={state.checkedA}
          onChange={handleChange}
          name="checkedA"
          color="primary"
          style={{ borderRadius: '10px' }}
        />
      )}
      label="Teste"
    />
  );
}
