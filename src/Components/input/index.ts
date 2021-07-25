import styled from 'styled-components';

export const InputText = styled.input`

  height: 50px;
  border-radius: 8px;
  padding: 10px;
  display: block;
  width: 100%;
  background: rgba(255, 255, 255, 0.20);
  border: 1px solid;
  border-color: rgba(255, 255, 255, 0.60);


  &::placeholder {
      text-align: center;
      color: #ffff;
      font: 400 1rem Poppins;
  }

`;
