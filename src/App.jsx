import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Page/Home";
import WhoWeAre from "./Page/WhoWeAre";
import Team from "./Page/Team";
import Values from "./Page/Values";
import Policies from "./Page/Policies";
import Financials from "./Page/Financials";
import Mission from "./Page/Mission";
import AnnualReport from "./Page/AnnualReport";
import ImpactSection from "./Page/ImpactSection";
import Subscription from "./Page/Subscription";
import Contact from "./Page/Contact";
import LatestNews from "./Page/LatestNews";
import AllNews from './Page/AllNews';
import WomenEmpowerment from "./Page/WomenEmpowerment";
import Health from "./Page/Health";
import Watsan from "./Page/Watsan";
import Education from "./Page/Education";
import ChildRights from "./Page/ChildRights";
import ClimateChange from "./Page/ClimateChange";
import SkillDevelopment from "./Page/SkillDevelopment";
import Environment from './Page/Environment';
import SustainableAgriculture from './Page/SustainableAgriculture';
import LivelihoodPromotion from './Page/LivelihoodPromotion';
import TestimonialCarousel from "./Page/TestimonialCarousel";




const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/impactsection" element={<ImpactSection />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/team" element={<Team />} />
            <Route path="/values" element={<Values />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/financials" element={<Financials />} />
            <Route path="/annual-report" element={<AnnualReport />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/latest-news" element={<LatestNews />} />
            <Route path="/all-news" element={<AllNews />} />
            <Route path="/women-empowerment" element={<WomenEmpowerment />} />
            <Route path="/health-nutrition" element={<Health />} />
            <Route path="/watsan" element={<Watsan />} />
            <Route path="/education-awareness" element={<Education />} />
            <Route path="/child-rights" element={<ChildRights />} />
            <Route path="/drr-climate" element={<ClimateChange />} />
            <Route path="/skills-development" element={<SkillDevelopment />} />
            <Route path="/environment" element={<Environment />} />
            <Route path="/sustainable-agriculture" element={<SustainableAgriculture />} />
            <Route path="/livelihood-promotion" element={<LivelihoodPromotion />} />
            <Route path="/testimonial-carousel" element={<TestimonialCarousel />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;