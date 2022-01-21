import React, { useContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registering from "./components/Registering";
import Error404 from "./components/Error404";
import Home from "./pages/home";
import Admin from "./pages/comptes/Admin";
import ProfA from "./pages/comptes/ProfA"
import Navbar from "./components/Navigation";
import Login from "./components/Login";
import { AuthContext } from "./context/Auth";
import EleveLog from "./components/EleveLog";
export default function App() {
  const [isAuthenticated, setIsAuthenticated, role] = useContext(AuthContext);
  // console.log("Here is app js !", isAuthenticated, "role is", role);
  const [userID, setUserID] = useState("")
  console.log("userID", userID);
  return (
    // <Auth.Provider value={{ isAuthenticated, setIsAuthenticated }}>
    <BrowserRouter>
      <Navbar userID={userID} setUserID={setUserID} />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/home/comptes" element={<Registering />} />
        <Route path="/home/contact" element={<ProfA userID={userID} setUserID={setUserID} />} />
        <Route exact path="/home/eleveLogin" element={<EleveLog />} />
        {(!isAuthenticated &&
          <Route exact path="/home/login" element={<Login userID={userID} setUserID={setUserID} />} />
        )}
        {(role === "admin" &&
          <Route exact path="/home/admin" element={<Admin />} />
        )}
        {(isAuthenticated &&
          <>
            <Route exact path="/home/profa" element={<ProfA userID={userID} setUserID={setUserID} />} />
          </>
        )}
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </BrowserRouter>
    // </Auth.Provider>
  );
}

