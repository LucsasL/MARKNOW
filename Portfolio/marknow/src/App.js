// Hooks Import
import {
  BrowserRouter as Router,
  Routes,
  Route 
} from "react-router-dom";
// import { useContext } from "react";
// import Navbar from "./components/Navbar/NavbarElements";

// Pages Import
import Home from "./components/pages/home";
import About from "./components/About";
import Contact from "./components/pages/contact";

// Styles and animations
// import "./styles/index.css";
// import "./animation";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
