import { createContext, useContext } from "react";
import { useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const logout = () => {
        setUser(null);
    }
    const login = () => {
        setUser({
            name: "Stephen",
            role: "admin",
        });
    };

    return (
        <AuthContext.Provider value={{ user, logout, login }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (context === null) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return context;
}