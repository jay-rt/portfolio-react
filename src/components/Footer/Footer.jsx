import React from "react";
import FooterSocial from "./FooterSocial";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">JayRt</h1>
            <span className="footer__subtitle">Frontend Developer</span>
          </div>

          <ul className="footer__links">
            <li>
              <a href="#service" className="footer__link">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="footer__link">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="footer__link">
                Contactme
              </a>
            </li>
          </ul>

          <div className="footer__socials">
            <FooterSocial
              link="https://twitter.com"
              icon={<i className="uil uil-twitter-alt"></i>}
            />
            <FooterSocial
              link="https://github.com"
              icon={<i className="uil uil-github-alt"></i>}
            />
            <FooterSocial
              link="https://linkedin.com"
              icon={<i className="uil uil-linkedin-alt"></i>}
            />
          </div>
        </div>

        <p className="footer__copy">&copy; JayRt. All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
