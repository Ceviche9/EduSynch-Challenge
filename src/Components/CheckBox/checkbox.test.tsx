/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  render, screen, fireEvent, cleanup,
} from '@testing-library/react';
import { CheckboxLabels } from './index';

afterEach(cleanup);
//------------------------------------------------------------------------------
test('checkboxA handleChangeA is called when clicked', () => {
  let state = false;
  const handleChangeA = jest.fn(() => {
    state = true;
  });
  render(
    <button onClick={handleChangeA} type="button" data-testid="A">
      <CheckboxLabels state={state}>
        <p>Test</p>
      </CheckboxLabels>
    </button>,
  );

  const checkboxA = screen.getByTestId('A');
  fireEvent.click(checkboxA);
  expect(handleChangeA).toHaveBeenCalledTimes(1);
});
//-------------------------------------------------------------------------------
test('CheckboxLabels state is true when clicked', () => {
  let state = false;
  const handleChangeA = jest.fn(() => {
    state = true;
  });
  render(
    <button onClick={handleChangeA} type="button" data-testid="A">
      <CheckboxLabels state={state}>
        <p>Test</p>
      </CheckboxLabels>
    </button>,
  );

  const checkboxA = screen.getByTestId('A');
  fireEvent.click(checkboxA);
  expect(state).toEqual(true);
});
