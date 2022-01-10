import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registering from "./components/Registering";
import Error404 from "./components/Error404";
import Home from "./pages/home";
import Admin from "./pages/Admin";
import Navbar from "./components/Navigation";
import Login from "./components/Login";
import { hasAuthenticated } from "./services/AuthApi";
import Auth from "./context/Auth";
export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated())
  // console.log("isAuthenti app js !", isAuthenticated);
  return (
    <Auth.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/home/comptes" element={<Registering />} />
          {/* <Route path="/home/contact" element={<Contact />} /> */}
          {(!isAuthenticated &&
            <Route exact path="/home/login" element={<Login />} />
          )}
          {(isAuthenticated &&
            <Route exact path="/home/login/admin" element={<Admin />} />
          )}
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </BrowserRouter>
    </Auth.Provider>
  );
}

