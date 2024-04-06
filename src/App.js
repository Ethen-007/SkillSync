import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import React from "react";
import OnBoarding from "./pages/OnBoarding";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";

const App = () => {
  return (
    <div className="App">
      <WalletSelector />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/onboarding" element={<OnBoarding />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
