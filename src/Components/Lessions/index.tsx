import React from 'react';

import './styles.css';

interface LessionsProps{
  lessions: number ;
}

export const Lessions = ({ lessions }: LessionsProps) => {
  return (
    <div className="lessions-div">
      <p>
        {
        lessions || 0
        }
        {' '}
        Lessions
      </p>
    </div>
  );
};
