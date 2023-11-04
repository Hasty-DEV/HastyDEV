import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { User } from "../../Types/User";
import { AuthContext } from "./AuthContext";


export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<User | null>(null);

    /*
        colocar callback
        fazer uma função auth
        RequiredAuth e RequiredUnauth

        improv:
        loading
        initial loading
    */

    useEffect(() => {
        const validateToken = async () => {
            const storageData = localStorage.getItem('authToken');

            if (storageData) {
                const { token } = JSON.parse(storageData);

                api.defaults.headers.authorization = `Bearer ${token}`;

                const response = await api.post('users/me', storageData);

                setUser(response.data.user);
            }
        }

        validateToken();
    }, []);

    const signin = async (username: string, password: string) => {
        try {
            const response = await api.post('/login', { username, password });
    
            // isso pode não estar vindo do backend
            const { user, token } = response.data;

            const storagedData = JSON.stringify({ token });
            localStorage.setItem('authToken', storagedData);

            api.defaults.headers.authorization = `Bearer ${token}`;

            setUser(user)
        } catch(err: any) {
            if (err.response.status === 401) {
                // 
            }
        }
    }

    const register = async (username: string, password: string, /* ... */) => {
        try {
            const response = await api.post('/regiser', { username, password });
    
            // isso pode não estar vindo do backend
            const { id, name, token } = response.data;

            const storagedData = JSON.stringify({ token });
            localStorage.setItem('authToken', storagedData);

            api.defaults.headers.authorization = `Bearer ${token}`;

            setUser({ id, name });
        } catch(err: any) {
            if (err.response.status === 401) {
                // 
            }
        }
    }

    const signout = async () => {
        await api.post('/logout');
        
        api.defaults.headers.authorization = null;

        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, signin, register, signout }}>
            {children}
        </AuthContext.Provider>
    );
}