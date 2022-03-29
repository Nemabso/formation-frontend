import React, { useContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from "./components/Error404";
import Home from "./pages/Home";
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
import "./App.css"
import Avis from "./pages/Avis";
// import QuiSommesNous from "./pages/QuiSommesNous";
import Financer from "./pages/Financer";
import NosMissions from "./pages/NosMissions";
import AvisClient from "./pages/AvisClient";
export default function App() {
  const [isAuthenticated, setIsAuthenticated, role] = useContext(AuthContext);
  console.log(setIsAuthenticated);

  const [userID, setUserID] = useState("");
  // console.log("userID", userID);

  return (
    <BrowserRouter>
      <Navbar userID={userID} setUserID={setUserID} />
      <Routes>
        <Route exact path="/" element={<Home userID={userID} setUserID={setUserID} />} />
        <Route exact path="/avisapprenantes" element={<Avis />} />
        <Route exact path="/avisclient" element={<AvisClient />} />

        <Route path="/contact" element={<NousContacter userID={userID} setUserID={setUserID} />} />
        {/* <Route path="/quisommesnous" element={<QuiSommesNous />} /> */}
        <Route exact path="/eleveLogin" element={<EleveLog />} />
        <Route exact path="/nosformation" element={<NosFormation />} />
        <Route exact path="/financer" element={<Financer />} />
        <Route exact path="/notremission" element={<NosMissions />} />

        <Route exact path="/sallea" element={<SalleA userID={userID} />} />
        <Route exact path="/salleb" element={<SalleB userID={userID} />} />

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

