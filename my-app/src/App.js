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
// firebase
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase';

// Page imports
import Homepage from './pages/Homepage/Homepage';
import CommunityPage from './pages/CommunityPage/CommunityPage';
import ProfilePage from './pages/profilePage/ProfilePage';
import GeneratePage from './pages/generatePage/GeneratePage';
import LoginPage from './pages/LoginPage/loginPage';
import SignupPage from './pages/SignUpPage/signupPage';

// import components
import Navbar from './components/navbar/Navbar';
import TestPage from './pages/Test/testPage';

// could have it s that when launching the app you have to auth with the login and upon success then move to a different function

function App() {

  // const [user, setUser] = useState(null);
  const [loggedIn, SetLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        SetLoggedIn(true)
        console.log("user Logged in... " + user.email)
      } else {
        SetLoggedIn(false)
        console.log("no user logged in...")
      }
    })
    return unsubscribe
  })

  return (
    <div className="App">
      {loggedIn ? (
        <Router>
          <NavRoutes />
        </Router>
      ) : (
        <Router>
          <AuthRoutes />
        </Router>
      )}

      {/* <Router>
        <NavRoutes />
      </Router> */}
    </div>
  );
}

function AuthRoutes() {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/test" element={<TestPage />}></Route>
      </Routes>
    </>
  )
}

// navigation
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
          <Route path="/test" element={<TestPage />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App;
