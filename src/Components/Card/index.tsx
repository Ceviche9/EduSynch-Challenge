/* eslint-disable max-len */
import React from 'react';

import Button from '@material-ui/core/Button';
import { RatingStars } from '../Rating';
import { Lessons } from '../Lessions';

import './styles.css';

interface ICardProps {
  lessonsNumber: number;
  rating: number;
  title: string;
  photo: string;
}

// Corpo dos card de aulas, aqui é definida a imágem, titulo, número de aulas e quantidade de estrelas.
// Dessa forma os dados podem ser adquiridos por uma API.
export const Card = ({
  lessonsNumber, rating, title, photo,
}: ICardProps) => {
  return (
    <div id="card-body">
      <Button>
        <div className="card-body-div">
          <div className="card-img">
            <img src={photo} alt="Teacher-Card" />
          </div>
          <div className="card-main">
            <div className="card-info">
              <RatingStars value={rating} />
              <Lessons lessons={lessonsNumber} />
            </div>
            <div className="card-title">
              <h4>{title}</h4>
            </div>
          </div>
        </div>
      </Button>
    </div>
  );
};
