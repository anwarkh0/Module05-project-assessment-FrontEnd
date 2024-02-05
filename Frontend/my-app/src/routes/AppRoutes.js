import { Route, Routes, useLocation } from "react-router-dom";
import Login from "../pages/Login/Login";
import ProtectedRoute from "./ProtectedRoute";
import Signup from "../pages/Signup/Signup"
import { useUserStore } from "../Store";
import Navbar from "../Layout/NavBar/Navbar"
import Home from "../pages/Home/Home";
function AppRoutes() {
  const { user } = useUserStore();
  const location = useLocation();
  return (
    <div>

      <Routes location={location} key={location.pathname}>
    
        <Route path="/" element={<Navbar/>}>
          <Route path="" element={<Home/>}/>
        </Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      
      </Routes>

    </div>
  );
}

export default AppRoutes;
