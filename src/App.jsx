import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authpage from "./pages/Authpage";

// Railway Officer dashboard and components
import Dashboard from "./components/Dashboard";

// Railway Officer pages
import Home from "./pages/Home";
import QR from "./pages/QR";
import TMS from "./pages/TMS";
import UDM from "./pages/UDM";
import Report from "./pages/Report";

// Manufacturer dashboard and components
import Dashboard2 from "./components/Dashboard2";

// Manufacturer pages
import MHome from "./pages/Mpages/MHome";
import MParts from "./pages/Mpages/MParts";
import MQR from "./pages/Mpages/MQR";
import MVendor from "./pages/Mpages/MVendor";

function App() {
  const isAuthenticated = true; // baad me backend ke sath check hoga
  const isAuthenticatedManufacturer = true; // manufacturer ke liye bhi alag check

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Authpage />} />
        <Route path='/dashboard2' element={<Dashboard2 />} />
        {/* <Route path='/dashboard' element={<Dashboard />} /> */}

        {/* Protected Railway Officer Dashboard */}
        {isAuthenticated && (
          <Route path='/dashboard' element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path='qr' element={<QR />} />
            <Route path='tms' element={<TMS />} />
            <Route path='udm' element={<UDM />} />
            <Route path='report' element={<Report />} />
          </Route>
        )}
        {/* Protected Manufacturer Dashboard */}
        {isAuthenticatedManufacturer && (
          <Route path='/dashboard2' element={<Dashboard2 />}>
            <Route index element={<MHome />} />
            <Route path='parts' element={<MParts />} />
            <Route path='qr' element={<MQR />} />
            <Route path='vendor' element={<MVendor />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
