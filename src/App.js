import React, { useContext, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import Registering from "./components/Registering";
import Error404 from "./components/Error404";
import Home from "./pages/home";
import Admin from "./pages/comptes/Admin";
import ProfA from "./pages/comptes/ProfA";
import Navbar from "./components/Navigation";
import Login from "./components/Login";
import { AuthContext } from "./context/Auth";
import EleveLog from "./components/EleveLog";
import NosFormation from "./pages/NosFormation";
import NousContacter from "./pages/NousContacter";
import SalleA from "./pages/comptes/SalleA";
import SalleB from "./pages/comptes/SalleB";
export default function App() {
  const [isAuthenticated, setIsAuthenticated, role, setRole] = useContext(AuthContext);
  console.log("Here is app js !", isAuthenticated, "role is", role);

  const [userID, setUserID] = useState("");

  const userId = userID ? userID : localStorage.getItem("userId");
  useEffect(() => {
    if (userId) {
      axios.get(`http://localhost:5000/user/login/${userId}`).then((res) => {
        console.log("user get AppJS::::", res.data);
        const { user } = res.data;
        setRole(user.role);
      }).catch((err) => {
        console.log("error get files :", err);
        console.error(err)
      })
    }
  }, [userId])
  // console.log("userID", userID);
  return (
    <BrowserRouter>
      <Navbar userID={userID} setUserID={setUserID} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/comptes" element={<Registering />} />

        <Route path="/contact" element={<NousContacter userID={userID} setUserID={setUserID} />} />
        <Route exact path="/eleveLogin" element={<EleveLog />} />
        <Route exact path="/nosformation" element={<NosFormation />} />

        <Route exact path="/sallea" element={<SalleA />} />
        <Route exact path="/salleb" element={<SalleB />} />

        {(!isAuthenticated &&
          <Route exact path="/login" element={<Login userID={userID} setUserID={setUserID} />} />
        )}
        {(isAuthenticated &&
          <>
            {(role === "admin" && <Route exact path="/admin" element={<Admin />} />)}
            {(role === "formateur" && <Route exact path="/profa" element={<ProfA userID={userID} setUserID={setUserID} />} />)}
          </>
        )}
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

