// React Import
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  // States
  const [headerStyle, setHeaderStyle] = useState({
    boxShadow: "-8px 8px 0px #071108",
    margin: "0"
  });

  // Refs
  const logoDiv = useRef();

  // Animations and re-render
  useEffect(() => {
    function headerShadow() {
      if (window.scrollY <= 10) {
        setHeaderStyle({
          boxShadow: "-3px 3px 0px #071108",
          margin: "0"
        });
      }
      
      if (window.scrollY > 10) {
        setHeaderStyle({
          boxShadow: "none",
          margin: `10px 10px 0 0`
        });
      }

      window.requestAnimationFrame(headerShadow);
    }

    headerShadow();
    
  }, [logoDiv]);

  return (
    <>
      <header>
        <div
          style={{
            boxShadow: headerStyle.boxShadow,
            margin: headerStyle.margin
          }}
        >
          <div ref={logoDiv}>
            <h1>MARKNOW</h1>
          </div>

          <div className="headerNav">
            <ul>
              <li>
                <NavLink to="/">HOME</NavLink>
              </li>

              <li>
                <NavLink to="/about">ABOUT US</NavLink>
              </li>

              <li>
                <a href="/#services">SERVICES</a>
              </li>

              <li>
                <NavLink to="/contact">CONTACT</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
