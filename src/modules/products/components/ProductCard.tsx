import React, { useState } from 'react';

import { truncate } from 'common/helpers';
import {
  Wrapper,
  Image,
  Header,
  Description,
  DetailsButton,
  PromoBanner,
} from '../styles/ProductCard';
import { ItemModal } from './Modal';
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
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <Wrapper>
      <Image src={image} isActive={isActive} />
      <Header>{name}</Header>
      <Description>{truncate(description, 40)}</Description>
      <Rating rating={rating} />
      <DetailsButton
        disabled={!isActive}
        onClick={() => setModalOpen(wasModalOpen => !wasModalOpen)}
      >
        Show details
      </DetailsButton>
      {isPromo && <PromoBanner>Promo</PromoBanner>}
      <ItemModal
        isOpen={isModalOpen}
        setIsOpen={setModalOpen}
        image={image}
        name={name}
        description={description}
      />
    </Wrapper>
  );
};
