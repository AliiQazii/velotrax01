import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import OurProgram from "./pages/OurProgram";
import OurTrucks from "./pages/OurTrucks";
import OurServices from "./pages/OurServices";
import Header1 from "./components/Header1";
import truckshow from './components/truckshow';
import Header2 from "./components/Header2";
import Header3 from "./components/Header3";
import truckdata from './components/truckdata';
import Header4 from "./components/Header4";
import Header5 from "./components/Header5";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App ">
         <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/OurProgram" element={<OurProgram />} />
        <Route path="/OurTrucks" element={<OurTrucks />} />
        <Route path="/OurServices" element={<OurServices />} />
      </Routes>
      <Header1 trucks={truckshow} />
      <Header2 />
      <Header3 trucks={truckdata} />
      <Header4 />
      <Header5 />
      <Footer />
      </div>
     
    </BrowserRouter>
  );
}

export default App;
