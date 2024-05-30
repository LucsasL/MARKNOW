// import { useContext } from "react";
import Navbar from "./components/Navbar/NavbarElements";
import {
  BrowseRouter as Router,
  Routes,
  Route 
} from "react-router-dom";

// Pages Import
import About from "./components/About";
import Contact from "./components/pages/contact";

import "./styles/index.css";
import Header from "./components/Header";
import MainCont from "./components/MainCont";
import Footer from "./components/Footer";
// import "./animation";

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <MainCont />
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
