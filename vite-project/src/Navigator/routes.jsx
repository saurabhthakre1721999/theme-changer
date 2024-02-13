import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Contact from "../components/contact";
import About from "../components/about";
import Header from "../components/Atoms/header";
const Navigate = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Navigate;
