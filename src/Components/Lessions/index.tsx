import React from 'react';

import './styles.css';

interface LessionsProps{
  lessons: number ;
}

export const Lessons = ({ lessons }: LessionsProps) => {
  return (
    <div className="lessions-div">
      <p>
        {
        lessons || 0
        }
        {' '}
        Lessons
      </p>
    </div>
  );
};
