import {createContext, useContext, useState} from 'react';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(() =>  {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : {username: null};
    });

    const login = (data) => {
        setUser(data.user);
        localStorage.setItem('token', JSON.stringify(data.token));
        localStorage.setItem('user', JSON.stringify(data.user));
    };

    const logout = () => {
        setUser({username: null});
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}   

export const useAuth = () => useContext(AuthContext);
