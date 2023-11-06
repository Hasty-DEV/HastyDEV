import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { User } from "../../Types/User";

type SignInPayload = { username: string, password: string };
type SignUpPayload = {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
}

export type AuthContextType = {
  user: User | null;
  signin: (payload: SignInPayload) => Promise<void>;
  register: (payload: SignUpPayload) => Promise<void>;
  signout: () => void;
};

export const AuthContext = createContext<AuthContextType>(null!);

export function useAuth() {
  return useContext(AuthContext);
}

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
      const storageData = localStorage.getItem("authToken");

      if (storageData) {
        const { token } = JSON.parse(storageData);

        api.defaults.headers.authorization = `Bearer ${token}`;

        /* const response = await api.post("auth/me", storageData);

        setUser(response.data.user); */

        // tirar o token do localstore
        // refresh na página
      }
    };

    validateToken();
  }, []);

  const signin = async (payload: SignInPayload) => {
    try {
      const response = await api.post("/login", payload);

      // isso pode não estar vindo do backend
      const { user, token } = response.data;

      const storagedData = JSON.stringify({ token });
      localStorage.setItem("authToken", storagedData);

      api.defaults.headers.authorization = `Bearer ${token}`;

      setUser(user);
    } catch (err: any) {
      if (err.response.status === 401) {
      }
      throw err;
    }
  };

  const register = async (payload: SignUpPayload) => {
    try {
      const response = await api.post("/register", payload);

      const { id, token } = response.data;

      const storagedData = JSON.stringify({ token });
      localStorage.setItem("authToken", storagedData);

      api.defaults.headers.authorization = `Bearer ${token}`;

      setUser({ id });
    } catch (err: any) {
      if (err.response.status === 401) {
        //
      }
    }
  };

  const signout = async () => {
    await api.post("/logout");

    api.defaults.headers.authorization = null;

    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signin, register, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
