import styled from 'styled-components';
import { darken } from 'polished';

export const DesktopButton = styled.button`

  margin-top: 5%;

  border-radius: 6%;
  width: 171px;
  height: 48px;
  background: #FFD74F;
  font: 700 11px Open Sans;
  color: #744FF4;
  text-align: center;

  &:hover {
    background: ${darken(0.07, '#FFD74F')};
  }


`;
