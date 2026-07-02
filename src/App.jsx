import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";

import Navbar from "./components/Navbar";

import Products from "./pages/Products1";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import Products1 from "./pages/Products1";


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
    <Routes>
      <Route path="/products" element={<Products />} />
  
    < Route path="/Categories" element={<Categories/>}  />
    < Route  path="/" element={<Home/>} />
    </Routes>

  
      <Footer />

</BrowserRouter>
    </>
  );
}

export default App;