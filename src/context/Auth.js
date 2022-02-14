import React, { createContext, useState } from "react";
import { hasAuthenticated } from "./AuthApi";


export const AuthContext = createContext();

export const AuthenticationProvider = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());
    const [role, setRole] = useState(null);

    return <AuthContext.Provider value={[isAuthenticated, setIsAuthenticated, role, setRole]} >{props.children}</AuthContext.Provider>
}