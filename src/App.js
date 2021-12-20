import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import Welcome from "./Components/Welcome";
import Navigation from "./Components/Navigation";
// import TrainerSpace from "./Components/TrainerSpace";
import Registering from "./Components/Registering";
// import Listformations from "./Components/Listformations";
import Contact from './Components/contactForm'
// import AddFormation from "./Components/AddFormation";
import Home from "./pages/home";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/espace-formateur" element={<Registering />} />
          <Route exact path="/contact" element={<Contact />} />
          {/* <Route exact path="/listformations" element={ } /> */}
          {/* <Route exact path="/addformation" element={ } /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
