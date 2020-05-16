import React from 'react';

// == semanthic
import {
  Image,
} from 'semantic-ui-react';

// == Import les images
import geographie from '../../assets/img/category/Geographie.png';
import informatique from '../../assets/img/category/Informatique.png';
import marketing from '../../assets/img/category/Marketing.png';
import maths from '../../assets/img/category/Maths.png';
import physique from '../../assets/img/category/Physique.png';

const ImageCategory = ({ picture }) => (
  <>
    {/* <Image src={`/src/assets/img/category/${lesson.picture}.png`} size="medium" bordered /> */}
    {/* <Image src="./src/assets/img/category/Geographie.png" size="medium" bordered /> */}
    <Image src={geographie} size="medium" bordered />
  </>
);

export default ImageCategory;
