import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router } from 'react-router-dom';

import { UserProvider, useUser } from 'modules/user/contexts/user';
import { useQueryParams, QueryParamsProvider } from 'modules/products/contexts/query';
import { GlobalStyle } from 'core/globalStyle';
import { AppProvidersProps } from './AppProviders.types';

export const AppProviders = ({ children }: AppProvidersProps) => {
  const user = useUser();
  const queryParams = useQueryParams();
  const queryClient = new QueryClient();

  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen />

        <UserProvider value={user}>
          <QueryParamsProvider value={queryParams}>
            <Router>{children}</Router>
          </QueryParamsProvider>
        </UserProvider>
      </QueryClientProvider>
    </>
  );
};
