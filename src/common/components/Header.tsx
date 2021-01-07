import React, { Dispatch, SetStateAction } from 'react';

import {
  HeaderWrapper,
  Logo,
  Checkboxes,
  LoginButton,
  Avatar,
  StyledLink,
} from 'common/styles/Header';
import { useUserContext } from 'modules/user/contexts/user';

import { Checkbox } from './Checkbox';
import { SearchBar } from './SearchBar';

type ReactSetState<T> = Dispatch<SetStateAction<T>>;

export interface HeaderProps {
  active: {
    isActive: boolean;
    setIsActive: ReactSetState<boolean>;
  };
  promo: {
    isPromo: boolean;
    setIsPromo: ReactSetState<boolean>;
  };
  search: {
    search: string;
    setSearch: ReactSetState<string>;
  };
}

export const Header: React.FunctionComponent<HeaderProps> = ({ active, promo, search }) => {
  const { user } = useUserContext();

  return (
    <HeaderWrapper>
      <Logo>join.tsh.io</Logo>
      <SearchBar search={search.search} setSearch={search.setSearch} />
      <Checkboxes>
        <Checkbox
          label="promo"
          isActive={promo.isPromo}
          onClick={() => promo.setIsPromo(wasPromo => !wasPromo)}
        />
        <Checkbox
          label="active"
          isActive={active.isActive}
          onClick={() => active.setIsActive(wasActive => !wasActive)}
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
