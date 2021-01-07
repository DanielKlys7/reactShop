import React from 'react';
import { DebounceInput } from 'react-debounce-input';

import { SearchBarWrapper, StyledSearchBar, StyledSearchIcon } from 'common/styles/SearchBar';

interface SearchBarProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
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
