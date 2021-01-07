import React from 'react';

import { Wrapper, StyledStar, StyledEmptyStar } from '../styles/Rating';

interface RatingProps {
  rating: number;
}

export const Rating: React.FunctionComponent<RatingProps> = ({ rating }) => {
  const stars = new Array(5).fill(false, 0, 5).fill(true, 0, rating);

  return <Wrapper>{stars.map(isFull => (isFull ? <StyledStar /> : <StyledEmptyStar />))}</Wrapper>;
};
