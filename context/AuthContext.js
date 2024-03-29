// context/AuthContext.js
import React, { createContext, useContext, useReducer, useEffect } from 'react';

const AuthContext = createContext();

const initialState = {
    isAuthenticated: false,
    userName: null,
};

const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            localStorage.setItem('userName', action.payload.userName);
            return {
                ...state,
                isAuthenticated: true,
                userName: action.payload.userName,
            };
        case 'LOGOUT':
            localStorage.removeItem('userName');
            return {
                ...state,
                isAuthenticated: false,
                userName: null,
            };
        default:
            return state;
    }
};

const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        const storedUserName = localStorage.getItem('userName');

        if (storedUserName) {
            dispatch({ type: 'LOGIN', payload: { userName: storedUserName } });
        }
    }, []);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export { AuthProvider, useAuth };
