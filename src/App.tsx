import "./App.css";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar brandName="My Brand" navItems={["Home", "About", "Contact"]} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
