import React, { createContext, useState, useContext, useEffect } from 'react';

interface AuthContextType {
    isLoggedIn: boolean;
    logIn: (email: string, password: string) => void;
    logOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        const authUserString = localStorage.getItem('auth');
        setIsLoggedIn(!!authUserString);
    }, []);

    const logIn = (email: string, password: string) => {
        // Logic to log in
        localStorage.setItem('auth', JSON.stringify({ email }));
        setIsLoggedIn(true);
    };

    const logOut = () => {
        localStorage.removeItem('auth');
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, logIn, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
