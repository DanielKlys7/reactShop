import React from 'react';
import { DebounceInput } from 'react-debounce-input';

import { SearchBarWrapper, StyledSearchBar, StyledSearchIcon } from 'common/styles/SearchBar';
import { SetState } from 'common/types/ReactSetStateAction';

interface SearchBarProps {
  search: string;
  setSearch: SetState<string>;
}

export const SearchBar: React.FunctionComponent<SearchBarProps> = ({ search, setSearch }) => (
  <SearchBarWrapper>
    <DebounceInput
      debounceTimeout={500}
      value={search}
      onChange={e => setSearch(e.target.value)}
      placeholder="Search"
      element={StyledSearchBar}
    />
    <StyledSearchIcon />
  </SearchBarWrapper>
);
