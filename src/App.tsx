import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./navbar/navbar";
import HomePage from "./pages/homepage";
import AdminPage from "./pages/adminpage";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";

const App: React.FC = () => {
  const location = useLocation();

  // Define paths where the Navbar should not appear
  const hideNavbarPaths = ["/admin"];
  const shouldShowNavbar = !hideNavbarPaths.includes(location.pathname);

  return (
    <div>
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Users" element={<Users />} />
      </Routes>
    </div>
  );
};

const RootApp: React.FC = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default RootApp;
