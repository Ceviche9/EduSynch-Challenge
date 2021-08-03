/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import {
  render, cleanup,
} from '@testing-library/react';
import { MenuListComposition } from './index';

afterEach(cleanup);
// Esse teste apenas verifica se o Botão de menu está sendo renderizado.
test('Should render the menu', () => {
  render(<MenuListComposition />);
});
