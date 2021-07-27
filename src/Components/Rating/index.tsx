import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

export const RatingStars = () => {
  const [value, setValue] = React.useState<number | null>(3);

  return (
    <div>
      <Box component="fieldset" borderColor="transparent">
        <Rating name="read-only" value={value} readOnly />
      </Box>
    </div>
  );
};
