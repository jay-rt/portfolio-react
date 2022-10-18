import React, { useEffect, useState } from "react";

const Header = (props) => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [header, setHeader] = useState(false);
  // const [activeSection, setActiveSection] = useState("home");

  const handleMenuToggle = () => {
    setMenuToggle((prevValue) => !prevValue);
  };

  useEffect(() => {
    console.log("event listener added");
    const onScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY >= 80) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      console.log("event listener removed");
    };
  }, [header]);

  return (
    <header className={"header" + (header ? " scroll-header" : "")} id="header">
      <nav className="nav container">
        <a href="/" className="nav__logo">
          JayRt
        </a>
        <div
          className={"nav__menu" + (menuToggle ? " show-menu" : "")}
          id="nav-menu"
        >
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                className={
                  "nav__link" + (props.active === "home" ? " active-link" : "")
                }
                onClick={handleMenuToggle}
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                className={
                  "nav__link" + (props.active === "about" ? " active-link" : "")
                }
                onClick={handleMenuToggle}
              >
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                className={
                  "nav__link" +
                  (props.active === "skills" ? " active-link" : "")
                }
                onClick={handleMenuToggle}
              >
                <i className="uil uil-file-info-alt nav__icon"></i> Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#services"
                className={
                  "nav__link" +
                  (props.active === "services" ? " active-link" : "")
                }
                onClick={handleMenuToggle}
              >
                <i className="uil uil-briefcase-alt nav__icon"></i> Services
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#portfolio"
                className={
                  "nav__link" +
                  (props.active === "portfolio" ? " active-link" : "")
                }
                onClick={handleMenuToggle}
              >
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                className={
                  "nav__link" +
                  (props.active === "contact" ? " active-link" : "")
                }
                onClick={handleMenuToggle}
              >
                <i className="uil uil-message nav__icon"></i> Contact Me
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            id="nav-close"
            onClick={handleMenuToggle}
          ></i>
        </div>

        <div className="nav__btns">
          {/*Theme change button*/}
          <i className="uil uil-moon change-theme" id="theme-button"></i>

          <div
            className="nav__toggle"
            id="nav-toggle"
            onClick={handleMenuToggle}
          >
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
