import React from "react";
import NavWrapper from "./atomicComponents/Navwrapper";
import { useState } from "react";
import img1 from "./assets/Capture.png";

function NavBar() {
  const [active, setActive] = useState<boolean | null>(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleButton = () => {
    setIsOpen(!isOpen);
    setActive(false);
  };

  return (
    <NavWrapper>
      <header>
        <div className="logo-container">
          <h1>
            <a className="logo" href="/">
              <img src={img1} alt='imagelogo'></img>
            </a>
          </h1>
        </div>

        <nav className={isOpen ? "topnav responsive" : "topnav"}>
          <ul className="nav-linkz">
            <li className={active ? "li-animate" : ""}>
              <a href="/login" className="nav-linc">
                Login{" "}
              </a>
            </li>
            <li className={active ? "li-animate" : ""}>
              <a href="/register" className="nav-linc">
                Register{" "}
              </a>
            </li>
            <button className="btn-blue2">lorem ipsum</button>
          </ul>
        </nav>
        <div
          className={isOpen ? "navigation_button open" : "navigation_button"}
          onClick={toggleButton}
        >
          <span className="navigation_icon">&nbsp;</span>
        </div>
      </header>
    </NavWrapper>
  );
}

export default NavBar;
