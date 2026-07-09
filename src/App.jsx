import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";

import Navbar from "./components/Navbar";

import Products from "./pages/Products1";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import Products1 from "./pages/Products1";
import Login from "./pages/login";
import CategoryProducts from "./pages/CategoryProducts";
import FetchProducts from "./pages/FetchProducts";


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
    <Routes>
      <Route path="/products" element={<Products />} />
    < Route path="/Categories" element={<Categories/>}  />
    < Route path="/login" element={<Login/>} />
    < Route  path="/" element={<Home/>} />
    <Route path="/category/:slug" element={<CategoryProducts />} />
    <Route path="/fetch-products" element={<FetchProducts />} />
    </Routes>

  
      <Footer />

</BrowserRouter>
    </>
  );
}

export default App;