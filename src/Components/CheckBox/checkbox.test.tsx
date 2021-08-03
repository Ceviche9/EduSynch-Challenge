/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  render, screen, fireEvent, cleanup,
} from '@testing-library/react';
import { CheckboxLabels } from './index';

// Os testes abaixo simulam o comportamento da checkbox.

afterEach(cleanup);
//------------------------------------------------------------------------------
test('checkboxA handleChangeA is called when clicked', () => {
  // a variável state e a constante handleChangeA simulam um useState.
  // Esse primeiro teste apenas mostra que envolver a checkbox com um botão n tira sua funcionalidade.
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
  // Neste teste é possível simular a troca de estado da checkbox por um evento capturado pelo botão.
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
