import React, { useContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from "./Components/Error404";
import Home from "./Components/pages/Home";
import Admin from "./Components/pages/comptes/Admin";
import ProfA from "./Components/pages/comptes/ProfA";
import Navbar from "./Components/Navigation";
import Login from "./Components/Login";
import { AuthContext } from "./context/Auth";
import EleveLog from "./Components/EleveLog";
import NosFormation from "./Components/pages/NosFormation";
import NousContacter from "./Components/pages/NousContacter";
import SalleA from "./Components/pages/comptes/SalleA";
import SalleB from "./Components/pages/comptes/SalleB";
import "./App.css"
import Avis from "./Components/pages/Avis";
// import QuiSommesNous from "./Components/pages/QuiSommesNous";
import Financer from "./Components/pages/Financer";
import NosMissions from "./Components/pages/NosMissions";
import AvisClient from "./Components/pages/AvisClient";
import Partenaires from "./Components/pages/Partenaires";
import GestionCookies from "./Components/pages/GestionCookies";
import MontionLegales from "./Components/pages/MontionLegales";
import Footer from "./Components/Footer";
export default function App() {
  const [isAuthenticated, setIsAuthenticated, role] = useContext(AuthContext);
  // console.log(setIsAuthenticated);

  const [userID, setUserID] = useState("");
  // console.log("userID", userID);

  return (
    <BrowserRouter>
      <Navbar userID={userID} setUserID={setUserID} />
      <Routes>
        <Route exact path="/" element={<Home userID={userID} setUserID={setUserID} />} />
        <Route exact path="/avisapprenantes" element={<Avis />} />
        <Route exact path="/avisclient" element={<AvisClient />} />
        <Route exact path="/partenaires" element={<Partenaires />} />

        <Route path="/contact" element={<NousContacter userID={userID} setUserID={setUserID} />} />
        {/* <Route path="/quisommesnous" element={<QuiSommesNous />} /> */}
        <Route exact path="/eleveLogin" element={<EleveLog />} />
        <Route exact path="/nosformation" element={<NosFormation />} />
        <Route exact path="/financer" element={<Financer />} />
        <Route exact path="/notremission" element={<NosMissions />} />
        <Route exact path="/gestioncookies" element={<GestionCookies />} />
        <Route exact path="/mentionlegales" element={<MontionLegales />} />

        <Route exact path="/sallea" element={<SalleA userID={userID} />} />
        <Route exact path="/salleb" element={<SalleB userID={userID} />} />

        {(!isAuthenticated &&
          <Route exact path="/login" element={<Login userID={userID} setUserID={setUserID} />} />
        )}
        {(isAuthenticated &&
          <>
            {(role === "admin" && <Route exact path="/admin" element={<Admin userID={userID} />} />)}
            {(role === "formateur" && <Route exact path="/profa" element={<ProfA userID={userID} setUserID={setUserID} />} />)}
          </>
        )}
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

