import styled from 'styled-components';
import { darken } from 'polished';

export const DesktopButton = styled.button`

  margin-top: 5%;

  border-radius: 5%;
  width: 165px;
  height: 44px;
  background: #FFD74F;
  font: 400 10px Open Sans;
  color: #744FF4;
  text-align: center;
  border-width: 0rem;

  &:hover {
    background: ${darken(0.07, '#FFD74F')};
  }


`;
