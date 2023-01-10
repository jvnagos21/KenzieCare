<<<<<<< HEAD
import { Navigate, Route, Routes } from "react-router-dom"
import AdminDash from "../Pages/AdminDash"
import LandingPage from "../Pages/LandingPage"
import LoginPage from "../Pages/LoginPage"
import OngProfile from "../Pages/OngProfile"
import RegisterPage from "../Pages/RegisterPage"
import UserDash from "../Pages/UserDash"
import UserProfile from "../Pages/UserProfile"
=======
import { Navigate, Route, Routes } from "react-router-dom";
import AdminDash from "../Pages/AdminDash";
import LandingPage from "../Pages/LandingPage";
import LoginPage from "../Pages/LoginPage";
import OngProfile from "../Pages/OngProfile";
import RegisterPage from "../Pages/RegisterPage";
import UserDash from "../Pages/UserDash";
import UserProfile from "../Pages/UserProfile";
>>>>>>> 8fb19f88bc56e27cf3043fad8e9f05c31580498b

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/userdash" element={<UserDash />} />
      <Route path="/admindash" element={<AdminDash />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/ong" element={<OngProfile />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
