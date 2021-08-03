/* eslint-disable react/require-default-props */
/* eslint-disable max-len */
/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactNode, useState } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { CircleCheckBox } from '../CircleCheckBox';

type CheckBoxProps = {
  children: ReactNode,
  state: boolean,
};

/* Corpo da checkbox, por aqui é definido o valor da checkbox, para que seu ícone e estilização mudem de acordo com seu estado (true/false)
*/
export function CheckboxLabels({ children, state }: CheckBoxProps) {
  const [checked, setChecked] = useState(true);

  const handleChange = () => {
    if (checked === true) {
      return setChecked(false);
    } return setChecked(true);
  };

  return (
    <FormControlLabel
      control={(
        <CircleCheckBox
          className="Checkbox"
          checked={state}
          onChange={handleChange}
          color="primary"
        />
      )}
      label={children}
    />
  );
}
