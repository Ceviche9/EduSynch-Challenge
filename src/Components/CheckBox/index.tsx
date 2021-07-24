/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { CircleCheckBox } from '../CircleCheckBox';

import './styles.css';

type CheckBoxProps = {
  title: string;
}

export function CheckboxLabels({ title }: CheckBoxProps) {
  const [state, setState] = React.useState({
    checkedA: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormControlLabel
      control={(
        <CircleCheckBox
          className="Checkbox"
          checked={state.checkedA}
          onChange={handleChange}
          name="checkedA"
          color="primary"
          style={{ borderRadius: '10px' }}
        />
      )}
      label={title}
    />
  );
}
