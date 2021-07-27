import React from 'react';

import './styles.css';

interface LessionsProps{
  lessons: number ;
}

// Quantidade de aulas que cada turma possuem;

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
