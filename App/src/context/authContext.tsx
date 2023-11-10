import { createContext, useEffect, useState, ReactNode } from "react";

export interface AuthContextType {
  currentUser: {
    id: number;
    name: string;
    profilePic: string;
  };
  login: () => void;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<AuthContextType["currentUser"]>(
    JSON.parse(localStorage.getItem("user") || 'null') || {
      id: 0,
      name: "",
      profilePic: "",
    }
  );

  const login = () => {
    // TO DO
    setCurrentUser({
      id: 1,
      name: "John Doe",
      profilePic:
        "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
