import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/footer";
import Home from "./Page/Home";
import WhoWeAre from "./Page/WhoWeAre";
import Team from "./Page/Team";
import Values from "./Page/Values";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/team" element={<Team />} />
            <Route path="/values" element={<Values />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
