import React from "react";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import Home from "./Page/Home"



const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default App;
