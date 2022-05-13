import React from 'react';
import Container from 'react-bootstrap/Container';

// primary background
// links color secondary

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className='footer-wrapper'>
          <div className='top-footer'>
            <div className='left-footer'>
              <div className='logo'>
                <h3>Jettby</h3>
              </div>
            </div>
            <div className='right-footer'>
              <p>Buying and Selling</p>
              <ul>
                <a href='#home'>
                  <li>Link</li>
                </a>
                <a href='#link'>
                  <li>Link</li>
                </a>
                <a href='#link'>
                  <li>Link</li>
                </a>
                <a href='#link'>
                  <li>Link</li>
                </a>
              </ul>
            </div>
          </div>
          <div className='bottom-footer'>
            <p>&copy; Jettby.com. All rights reserved.</p>
          </div>
        </div>
        <div></div>
      </Container>
    </footer>
  );
};

export default Footer;
