import { createContext } from 'react';
import { User } from '../../Types/User';

export type AuthContextType = {
    user: User | null;
    signin: (username: string, password: string) => Promise<void>;
    register: (username: string, password: string) => Promise<void>;
    signout: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);