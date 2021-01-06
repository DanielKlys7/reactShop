import React from 'react';

import {
  Wrapper,
  Image,
  Header,
  Description,
  DetailsButton,
  PromoBanner,
} from '../styles/ProductCard';
import { Rating } from './Rating';

export interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  rating: number;
  isPromo: boolean;
  isActive: boolean;
}

export const ProductCard: React.FunctionComponent<ProductCardProps> = ({
  image,
  name,
  description,
  rating,
  isPromo,
  isActive,
}) => (
  <Wrapper>
    <Image src={image} isActive={isActive} />
    <Header>{name}</Header>
    <Description>{description}</Description>
    <Rating rating={rating} />
    <DetailsButton disabled={!isActive}>Show details</DetailsButton>
    {isPromo && <PromoBanner>Promo</PromoBanner>}
  </Wrapper>
);
