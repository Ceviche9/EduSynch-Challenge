import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

interface IRatingValue {
  value: number;
}

export const RatingStars = ({ value }: IRatingValue) => {
  return (
    <div>
      <Box component="fieldset" borderColor="transparent">
        <Rating name="read-only" value={value} readOnly={false} />
      </Box>
    </div>
  );
};
