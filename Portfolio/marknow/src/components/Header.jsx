import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div>
          <div>
            <h1>MARKNOW</h1>
          </div>

          <div>
            <ul>
              <li>
                <NavLink to={"./components/pages/home.jsx"}>HOME</NavLink>
              </li>

              <li>
                <NavLink to={"./components/pages/about.jsx"}>ABOUT US</NavLink>
              </li>

              <li>
                <NavLink to={"./components/pages/home.jsx#services"}>SERVICES</NavLink>
              </li>

              <li>
                <NavLink to={"./components/pages/contact.jsx"}>CONTACT</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;