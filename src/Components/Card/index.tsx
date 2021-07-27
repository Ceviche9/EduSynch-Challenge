import React from 'react';

import TeacherCard from '../../Assets/Images/card.svg';

import './styles.css';

export const Card = () => {
  return (
    <div id="card-body">
      <div className="card-img">
        <img src={TeacherCard} alt="Teacher-Card" />
      </div>
      <div className="card-main">
        <div className="card-info">
          <p>info</p>
          <p>info 2</p>
        </div>
        <div className="card-title">
          <h3>Title</h3>
        </div>
      </div>
    </div>
  );
};
