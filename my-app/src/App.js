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

  // const contentStyle = showNavbar
  //   ? { flex: 1, marginLeft: "264px" }
  //   : {
  //       height: "100vh",
  //       width: "100vw",
  //     };

  // useEffect(() => {
  //   // fetchUserDetails(setUser);
  // }, []);

  return (
    <>
      {showNavbar && <Navbar />}
      <div>
        <Routes>
          <Route path="/home" element={<Homepage />}></Route>
          <Route path="/home" element={<Homepage />}></Route>
          <Route path="/home" element={<Homepage />}></Route>
          <Route path="/home" element={<Homepage />}></Route>

        </Routes>
      </div>
    </>
  )
}

export default App;
