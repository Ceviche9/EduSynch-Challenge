import { ReactNode } from 'react';
/* eslint-disable no-confusing-arrow */
import styled from 'styled-components';
import { darken } from 'polished';

interface buttonProps {
  checked: boolean;
  children: ReactNode;
}

export const Button = styled.button<buttonProps>`

  padding: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 55px;
  color: #ffff;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 5px;

  ${({ checked }) => checked && `
    border: 1px solid #ffff;
  `}

  ${({ checked }) => !checked && `
    border: none;
  `}

  background: ${(checked) => checked ? 'none' : 'white'};


  &:hover {
        background: ${darken(0.03, '#7955E8')};
  }

`;
