import React, { useContext } from "react";
import { Route, useNavigate } from "react-router-dom";

import Auth from "../context/Auth";

const AuthenticatedRoute = ({ path, element }) => {
    const { isAuthenticated } = useContext(Auth);
    const navigate = useNavigate();

    return isAuthenticated ? (
        <Route exact path={path} element={element} />
    ) : (
        navigate("/home/login")
    )
}

export default AuthenticatedRoute;