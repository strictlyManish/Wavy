import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Video from "../Pages/Video";


function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/video/:categoryId/:videoId" element={<Video />} />
    </Routes>
  );
}

export default MainRoutes;
