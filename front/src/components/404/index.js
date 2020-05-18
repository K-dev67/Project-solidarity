import React from 'react';

// == style
import './styles.scss';

// == import 404 picture
import quatre from '../../assets/img/404.jpg';


const Quatre = () => (
  <div className="container-404">
    <div className="quatre">
      <img src={quatre} alt="404_picture" />
    </div>
    <div className="source_img">
      <a href="https://fr.freepik.com/photos-vecteurs-libre/web" target="_blank">Web vecteur créé par stories - fr.freepik.com</a>
    </div>
  </div>

);

export default Quatre;
