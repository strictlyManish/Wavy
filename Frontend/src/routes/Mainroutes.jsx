import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home"
import Register from "../pages/Register";
import Testimonial from "../pages/Testimonial";
function Mainroutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/testimonial" element={<Testimonial />} />
    </Routes>
  );
}

export default Mainroutes;
