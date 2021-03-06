import React from 'react';

import { SetState } from 'common/types/ReactSetStateAction';
import { StyledModal, Image, Header, Description } from '../styles/Modal';

interface ItemModalProps {
  isOpen: boolean;
  setIsOpen: SetState<boolean>;
  name: string;
  description: string;
  image: string;
}

export const ItemModal: React.FunctionComponent<ItemModalProps> = ({
  isOpen,
  setIsOpen,
  image,
  name,
  description,
}) => (
  <StyledModal isOpen={isOpen} onRequestClose={() => setIsOpen(wasModalOpen => !wasModalOpen)}>
    <Image src={image} />
    <Header>{name}</Header>
    <Description>{description}</Description>
  </StyledModal>
);
