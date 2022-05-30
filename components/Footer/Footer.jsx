import React from "react";
import Container from "react-bootstrap/Container";

// primary background
// links color secondary

const Footer = () => {
  return (
    <footer className="Footer">
      <Container>
        <div className="Footer--wrapper">
          <div className="Footer--wrapper__top">
            <div>
              <img src="/logo_white.svg" />
            </div>
            <div>
              <p>Buying and Selling</p>
              <ul>
                <li>
                  <a href="#home">Link</a>
                </li>
                <li>
                  <a href="#home">Link</a>
                </li>
                <li>
                  <a href="#home">Link</a>
                </li>
                <li>
                  <a href="#home">Link</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="Footer--wrapper__bottom">
            <p>&copy; Jettby.com. All rights reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
