import React from 'react';

import {
  HeaderWrapper,
  Logo,
  Checkboxes,
  LoginButton,
  Avatar,
  StyledLink,
} from 'common/styles/Header';
import { useUserContext } from 'modules/user/contexts/user';
import { useQueryParamsContext } from 'modules/products/contexts/query';
import { Checkbox } from './Checkbox';
import { SearchBar } from './SearchBar';

export const Header: React.FunctionComponent = () => {
  const { search, setSearch, isPromo, setIsPromo, isActive, setIsActive } = useQueryParamsContext();
  const { user } = useUserContext();

  return (
    <HeaderWrapper>
      <Logo>join.tsh.io</Logo>
      <SearchBar search={search} setSearch={setSearch} />
      <Checkboxes>
        <Checkbox
          label="promo"
          isActive={isPromo}
          onClick={() => setIsPromo((wasPromo: boolean) => !wasPromo)}
        />
        <Checkbox
          label="active"
          isActive={isActive}
          onClick={() => setIsActive((wasActive: boolean) => !wasActive)}
        />
      </Checkboxes>
      {user ? (
        <Avatar src={user.avatar} />
      ) : (
        <LoginButton isFilled={false}>
          <StyledLink to="/login">Log in</StyledLink>
        </LoginButton>
      )}
    </HeaderWrapper>
  );
};
