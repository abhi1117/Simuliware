import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/Overview/Overview.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Gallery from "./pages/Gallery/gallery.jsx";
import Team from "./pages/About/Team/Team.jsx";
import Reliabilityservices from "./pages/Services/Reliabilityservices/Reliabilityservices";
import Shopfloorservices from "./pages/Services/Shop-Floor-Services/Shopfloorservices.jsx";
import Overview from "./pages/About/Overview/Overview.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about/Team" element={<Team />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/about/Overview" element={<Overview />} />
          <Route
            path="/services/reliabilityservices"
            element={<Reliabilityservices />}
          />
          <Route
            path="/services/Shopfloorservices"
            element={<Shopfloorservices />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
