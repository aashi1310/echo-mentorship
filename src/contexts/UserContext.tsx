
import React, { createContext, useContext, useState, useEffect } from "react";

type UserType = "mentor" | "mentee";

interface UserContextType {
  user: {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    userType: UserType;
  } | null;
  setUser: React.Dispatch<React.SetStateAction<UserContextType["user"]>>;
  isAuthenticated: boolean;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserContextType["user"]>(() => {
    // Try to get user from local storage on initial load
    const savedUser = localStorage.getItem("echomentor-user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Update local storage whenever user changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("echomentor-user", JSON.stringify(user));
    } else {
      localStorage.removeItem("echomentor-user");
    }
  }, [user]);

  const logout = () => {
    setUser(null);
    localStorage.removeItem("echomentor-user");
    // Redirect to home page
    window.location.href = "/";
  };

  const value = {
    user,
    setUser,
    isAuthenticated: !!user,
    logout
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
