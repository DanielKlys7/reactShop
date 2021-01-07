import React from 'react';

import { EmptyIcon, Header, Wrapper, Subtext } from 'common/styles/Empty';

export const Empty: React.FunctionComponent = () => (
  <Wrapper>
    <EmptyIcon />
    <Header>Ooops... It's empty here</Header>
    <Subtext>There are no products on the list</Subtext>
  </Wrapper>
);
