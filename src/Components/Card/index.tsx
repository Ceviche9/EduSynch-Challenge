import React from 'react';

import { Button } from '@material-ui/core';
import { RatingStars } from '../Rating';
import { Lessions } from '../Lessions';

import TeacherCard from '../../Assets/Images/card.svg';

import './styles.css';

export const Card = () => {
  return (
    <div id="card-body">
      <Button>
        <div className="card-body-div">
          <div className="card-img">
            <img src={TeacherCard} alt="Teacher-Card" />
          </div>
          <div className="card-main">
            <div className="card-info">
              <RatingStars />
              <Lessions lessions={10} />
            </div>
            <div className="card-title">
              <h4>Master English: Improve Your Speaking</h4>
            </div>
          </div>
        </div>
      </Button>
    </div>
  );
};
