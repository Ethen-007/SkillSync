import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import React from "react";
import OnBoarding from "./pages/OnBoarding";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import SkillDisplay from "./pages/SkillDisplay";
import SkillVerification from "./pages/SkillVerification";

const App = () => {
  return (
    <div className="App">
      <WalletSelector />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/onboarding" element={<OnBoarding />}></Route>
          <Route path="/skilldisplay" element={<SkillDisplay />} />
        <Route
          path="/skillverification/:skill"
          element={<SkillVerification />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
