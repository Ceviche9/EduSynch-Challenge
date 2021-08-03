/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import {
  render, cleanup,
} from '@testing-library/react';
import { MenuListComposition } from './index';

afterEach(cleanup);

//------------------------------------------------------------------------------
test('Should render the menu', () => {
  render(<MenuListComposition />);
});
