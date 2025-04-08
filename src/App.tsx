import "./App.css";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Product from "./Pages/Product/Product";
import About from "./Pages/About/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
