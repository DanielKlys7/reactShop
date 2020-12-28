import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { AppProvidersProps } from './AppProviders.types';
import { UserProvider, useUser } from 'modules/user/contexts/user';

export const AppProviders = ({ children }: AppProvidersProps) => {
    const user = useUser();

    return (
        <UserProvider value={user}>
            <Router>{children}</Router>
        </UserProvider>
    );
};
