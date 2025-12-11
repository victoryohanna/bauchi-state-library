// contexts/AuthContext.tsx
"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { User, LoginCredentials } from "../types/library";
import { authApi } from "../utils/api";

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (credentials: LoginCredentials) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuthStatus = () => {
      const savedToken = localStorage.getItem("library-token");
      const savedUser = localStorage.getItem("library-user");

      if (savedToken && savedUser) {
        try {
          const userData: User = JSON.parse(savedUser);
          setToken(savedToken);
          setUser(userData);
        } catch (error) {
          console.error("Error parsing saved auth data:", error);
          localStorage.removeItem("library-token");
          localStorage.removeItem("library-user");
        }
      }
      setIsLoading(false);
    };

    checkAuthStatus();
  }, []);

  const login = async (credentials: LoginCredentials): Promise<boolean> => {
    try {
      const response = await authApi.login(credentials);

      localStorage.setItem("library-token", response.token);
      localStorage.setItem("library-user", JSON.stringify(response.user));

      setToken(response.token);
      setUser(response.user);
      return true;
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  };

  const logout = () => {
    authApi.logout().catch(console.error);

    localStorage.removeItem("library-token");
    localStorage.removeItem("library-user");
    setToken(null);
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    token,
    login,
    logout,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
