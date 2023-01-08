import React, { FC } from 'react';

import { Box } from '@mui/material';
import { ICard } from 'types/card';

import classes from './Card.module.scss';

interface ICard1 {
  card: ICard;
}

const Card: FC<ICard1> = ({ card }) => {
  return (
    <Box className={classes.card}>
      <img src={card.image} alt=" " className={classes.image} />
      <section className={classes.nameDesc}>
        <h4>{card.name}</h4>
        <p>{card.description}</p>
      </section>
    </Box>
  );
};

export default Card;
