/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import {
  render, screen, fireEvent, cleanup,
} from '@testing-library/react';
import { CheckboxLabels } from './index';

afterEach(cleanup);
// When browser loaded and tests first clicked, all pass
// When tests re-run, something in memory fails tests.
// Just reload browser
//------------------------------------------------------------------------------
test('checkboxA handleChangeA is called when clicked', () => {
  const handleChangeA = jest.fn();
  render(
    <button onClick={handleChangeA} type="button" id="A">
      <CheckboxLabels state={false}>
        <p>Test</p>
      </CheckboxLabels>
    </button>,
  );

  const checkboxA = screen.getByTestId('A');
  fireEvent.click(checkboxA);
  expect(handleChangeA).toHaveBeenCalledTimes(1);
});
