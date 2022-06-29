import { createContext, useContext, useEffect, useState} from 'react';
import React from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

    useEffect(() => {
        console.log("in auth provider: ", auth);
    }, [auth])
    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth =() => {
    return useContext(AuthContext);
}
export default AuthContext;
export {useAuth};