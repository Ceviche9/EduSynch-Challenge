import styled from 'styled-components';
import { darken } from 'polished';

export const DesktopSearchButton = styled.button`

  margin-top: 5%;

  border-radius: 3%;
  width: 209px;
  height: 56px;
  background: #FFD74F;
  font: 700 11px Open Sans;
  color: #744FF4;
  text-align: center;
  border-width: 0rem;

  &:hover {
    background: ${darken(0.07, '#FFD74F')};
  }


`;
