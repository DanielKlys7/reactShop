import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router } from 'react-router-dom';

import { UserProvider, useUser } from 'modules/user/contexts/user';
import { GlobalStyle } from 'core/globalStyle';
import { AppProvidersProps } from './AppProviders.types';

export const AppProviders = ({ children }: AppProvidersProps) => {
  const user = useUser();
  const queryClient = new QueryClient();

  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen />

        <UserProvider value={user}>
          <Router>{children}</Router>
        </UserProvider>
      </QueryClientProvider>
    </>
  );
};
