import { createContext, useState, useContext } from 'react';

import { assertContextPresent } from 'common/helpers/assertContextPresent';
import { User } from '../types';

export interface UserContext {
    user: User | null;
    setCurrentUser: (currentUser: User) => void;
}

export const useUser = (): UserContext => {
    const [user, setUser] = useState<User | null>(null);

    return {
        user,
        setCurrentUser: setUser,
    };
};

export const useUserContext = () => {
    const context = useContext(userContext);

    assertContextPresent(context);

    return context;
};

export const userContext = createContext<UserContext | null>(null);
export const { Provider: UserProvider } = userContext;
