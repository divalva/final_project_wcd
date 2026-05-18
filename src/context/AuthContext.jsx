import { createContext, useContext, useState } from "react";
import { users } from "../data/users";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  function login(username, password) {
    const found = users.find(
      (u) => u.username === username && u.password === password,
    );
    if (found) {
      setCurrentUser(found);
      return { success: true };
    }
    return { success: false, message: "Username atau password salah." };
  }

  function logout() {
    setCurrentUser(null);
  }

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
