import React, { createContext, useState } from "react";
import { hasAuthenticated } from "../services/AuthApi";

// export default React.createContext({
//     isAuthenticated: false,
//     setIsAuthenticated: value => { }
// })

export const AuthContext = createContext();

export const AuthenticationProvider = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());
    const [userBack, setUserBack] = useState(null)

    return <AuthContext.Provider value={[isAuthenticated, setIsAuthenticated, userBack, setUserBack]} >{props.children}</AuthContext.Provider>
}