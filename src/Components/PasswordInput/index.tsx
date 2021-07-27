import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import { common } from '@material-ui/core/colors';
import Visibility from '@material-ui/icons/Visibility';
import InputAdornment from '@material-ui/core/InputAdornment';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Input from '@material-ui/core/Input';
import { InputText } from '../input';

import './styles.css';

export const PasswordInput = () => {
  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handlePasswordChange = (prop: any) => (event: any) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div className="password-input-div">
      <p>Password:</p>
      <Input
        className="input-password"
        type={values.showPassword ? 'text' : 'password'}
        onChange={handlePasswordChange('password')}
        value={values.password}
        endAdornment={(
          <InputAdornment
            className="inputAdornment"
            position="end"
          >
            <IconButton
              onClick={handleClickShowPassword}
            >
              {
              values.showPassword
                ? <Visibility style={{ color: common.white }} />
                : (
                  <VisibilityOff style={{ color: common.white }} />
                )
              }
            </IconButton>
          </InputAdornment>
        )}
      />
    </div>
  );
};
