import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import OnBoarding from "./pages/OnBoarding";
import SkillDisplay from "./pages/SkillDisplay";
import SkillVerification from "./pages/SkillVerification";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/onboarding" element={<OnBoarding />} />
        <Route path="/skilldisplay" element={<SkillDisplay />} />
        <Route
          path="/skillverification/:skill"
          element={<SkillVerification />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
