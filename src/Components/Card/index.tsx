import React from 'react';

import { Button } from '@material-ui/core';
import { RatingStars } from '../Rating';
import { Lessons } from '../Lessions';

import TeacherCard from '../../Assets/Images/card.svg';

import './styles.css';

interface ICardProps {
  lessonsNumber: number;
  rating: number;
}

export const Card = ({ lessonsNumber, rating }: ICardProps) => {
  return (
    <div id="card-body">
      <Button>
        <div className="card-body-div">
          <div className="card-img">
            <img src={TeacherCard} alt="Teacher-Card" />
          </div>
          <div className="card-main">
            <div className="card-info">
              <RatingStars value={rating} />
              <Lessons lessons={lessonsNumber} />
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
