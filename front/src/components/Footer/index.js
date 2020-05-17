import React from 'react';


// == style
import './styles.scss';

// == semantic
import { Icon } from 'semantic-ui-react';
// facebook official


const Footer = () => (
  <div className="footer">
    <div className="social-media"><a href="https://www.facebook.com/" target="_blank"><Icon name="facebook official" size="large" /></a></div>
    <div className="assets-footer">Contact - Mention</div>
    <div className="social-media2"><a href="https://www.instagram.com/" target="_blank"><Icon name="instagram" size="large" /></a></div>
  </div>
);

export default Footer;
