import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";


// Page imports
import Homepage from './pages/Homepage/Homepage';
import CommunityPage from './pages/CommunityPage/CommunityPage';
import ProfilePage from './pages/profilePage/ProfilePage';
import GeneratePage from './pages/generatePage/GeneratePage';

// import components
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    // <div className="App"></div>
    <Router>
      <NavRoutes />
    </Router>
  );
}

function NavRoutes() {
  const location = useLocation();

  const showNavbar = (location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      <div>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/community" element={<CommunityPage />}></Route>
          <Route path="/generate" element={<GeneratePage />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App;
