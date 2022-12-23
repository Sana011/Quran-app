import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import Home from "./Pages/Home";
import Price from "./Pages/Price";
import About from "./Pages/About";
import School from "./Pages/School";
import Gift from "./Pages/Gift";
import Blog from "./Pages/BlogMainPage";
import Donate from "./Pages/Donate";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Pricing" element={<Price />} />
        <Route path="About" element={<About />} />
        <Route path="School" element={<School />} />
        <Route path="GiftCards" element={<Gift />} />
        <Route path="Blog" element={<Blog />} />
        <Route path="Donate" element={<Donate />} />
      </Routes>
    </>
  );
}

export default App;
