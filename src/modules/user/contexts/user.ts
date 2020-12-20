import { createContext } from 'react';

import { User, UserContext } from '../types';

const userContextDefaults = {
    user: null,
    setCurrentUser: (user: User) => {},
};

export const userContext = createContext<UserContext>(userContextDefaults);
export const { Provider: UserProvider } = userContext;
