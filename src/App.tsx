import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "@/pages/Home";
import PricingPage from "@/pages/Pricing";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="px-6 md:px-10 py-4 border-b bg-white sticky top-0 z-10">
        <ul className="flex gap-6 text-sm">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </BrowserRouter>
  );
}


