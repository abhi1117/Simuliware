import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home.jsx";
import About from "./components/pages/About/Overview/Overview.jsx";
import Contact from "./components/pages/Contact/Contact.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer";
import Login from "./components/pages/Login/Login.jsx";
import Register from "./components/pages/Register/Register.jsx";
import Gallery from "./components/pages/Gallery/Gallery.jsx";
import Team from "./components/pages/About/Team/Team.jsx";
import LDA from "./components/pages/Services/Reliabilityservices/Lifedataanalysis/Lifedata.jsx";
import RAE from "./components/pages/Services/Reliabilityservices/RAE/RAE.jsx";
import RT from "./components/pages/Services/Reliabilityservices/Reliabilitytesting/Reliabilityts.jsx";
import JSSS from "./components/pages/Services/Shop-Floor-Services/JSSS/JSSS.jsx";
import ALS from "./components/pages/Services/Shop-Floor-Services/ALS/ALS.jsx";
import SFLS from "./components/pages/Services/Shop-Floor-Services/SFLS/SFLS.jsx";
import Overview from "./components/pages/About/Overview/Overview.jsx";
import Subscribe from "./components/pages/Subscribe/Subscribe.js";
import Paymentform from "./components/pages/Payment/Paymentform.jsx";
import Forgetpassword from "./components/pages/Payment/Paymentform.jsx";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about/team" element={<Team />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Forgetpassword" element={<Forgetpassword />} />
            <Route path="/register" element={<Register />} />
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/payment_form" element={<Paymentform />} />
            <Route path="/about/overview" element={<Overview />} />
            <Route path="/services/reliability/LDA" element={<LDA />} />
            <Route path="/services/reliability/RT" element={<RT />} />
            <Route path="/services/reliability/RAE" element={<RAE />} />
            <Route path="/services/shop-floor/JSSS" element={<JSSS />} />
            <Route path="/services/shop-floor/SFLS" element={<SFLS />} />
            <Route path="/services/shop-floor/ALS" element={<ALS />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
