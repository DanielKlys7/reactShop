import { User } from './';

export interface UserContext {
    user: User | null;
    setCurrentUser: (currentUser: User) => void;
}
