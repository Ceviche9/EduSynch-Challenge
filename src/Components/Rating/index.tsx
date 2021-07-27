import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

interface IRatingValue {
  value: number;
}

// Aqui é onde a quantidade de estrelas que cada aula têm.

// O usuário pode até receber um feedback visual ao passar o mouse por cima das estrelas.
// Porém seu valor não se altera já que é prédefinido.

export const RatingStars = ({ value }: IRatingValue) => {
  return (
    <div>
      <Box component="fieldset" borderColor="transparent">
        <Rating name="read-only" value={value} readOnly={false} />
      </Box>
    </div>
  );
};
