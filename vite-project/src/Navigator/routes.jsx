import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Contact from "../components/contact";
import About from "../components/about";
import Header from "../components/Atoms/header";
import { Dataprovider } from "../components/usecontext/dataprovider";
import { useState } from "react";
const Navigate = () => {
  const [Theme, SetTheme] = useState("true");

  console.log("Initial Theme state:", Theme);

  return (
    <Dataprovider value={{ Theme: Theme, Themechanger: SetTheme }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </Dataprovider>
  );
};
export default Navigate;
