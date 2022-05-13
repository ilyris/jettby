import React from 'react';
import Container from 'react-bootstrap/Container';

// primary background
// links color secondary

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <div className='footer--wrapper'>
          <div className='footer--top'>
            <div className='footer--top__left'>
              <div className='logo'>
                <h3>Jettby</h3>
              </div>
            </div>
            <div className='footer--top__right'>
              <p>Buying and Selling</p>
              <ul>
                <li>
                  <a href='#home'>Link</a>
                </li>
                <li>
                  <a href='#home'>Link</a>
                </li>
                <li>
                  <a href='#home'>Link</a>
                </li>
                <li>
                  <a href='#home'>Link</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='footer--bottom'>
            <p>&copy; Jettby.com. All rights reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
