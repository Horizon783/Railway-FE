import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authpage from "./pages/Authpage";
import Dashboard from "./components/Dashboard";
import Home from "./pages/Home";
import QR from "./pages/QR";
import TMS from "./pages/TMS";
import UDM from "./pages/UDM";
import Report from "./pages/Report";

function App() {
  const isAuthenticated = true; // baad me backend ke sath check hoga

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Authpage />} />
        {/* <Route path='/dashboard' element={<Dashboard />} /> */}
        Protected Dashboard
        {isAuthenticated && (
          <Route path='/dashboard' element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path='qr' element={<QR />} />
            <Route path='tms' element={<TMS />} />
            <Route path='udm' element={<UDM />} />
            <Route path='report' element={<Report />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
