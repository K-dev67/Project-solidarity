import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import getTeachers from '../../utils/getTeachers';
import Loading from '../Loading';


// == style
import './styles.scss';


const TeacherPresentation = () => {
  useEffect(getTeachers, []);
  const teachers = useSelector((state) => state.teachers);
  // if (teachers === undefined) return null;
  console.log('teachers', teachers);
  let sliceTeachers = [];
  if (teachers.length > 0) sliceTeachers = teachers.slice(4, 8);
  console.log('spliceTeachers', sliceTeachers);
  const teachersJSX = sliceTeachers.map((t) => (
    <div key={t.id} className="OneCard">
      <img src={t.avatar} />
      <h4>{t.lastname}</h4>
      {/* <p>{prof.matter}</p> */}
    </div>
  ));


  return (
    <div className="TeacherPresentation_main">
      <h2>Apprenez ou proposez un cours en ligne</h2>
      <div className="TeacherPresentation_card">
        {/* {profs} */}
        {teachersJSX.length > 0 ? (<>{teachersJSX}</>) : <Loading />}

      </div>
      <Link to="/teachers">
        <button
          className="button AssetsPresentation_button"
          type="button"
        //   onClick={handleClick}
        >Voir la liste des profs
        </button>
      </Link>
    </div>
  );
};

// Fausse données
const fauxProf = [
  {
    id: 1, name: 'Anthony', avatar: 'https://www.nicepng.com/png/detail/804-8049853_med-boukrima-specialist-webmaster-php-e-commerce-web.png', matter: 'Physique',
  },
  {
    id: 2, name: 'Kevin', avatar: 'https://www.nicepng.com/png/detail/804-8049853_med-boukrima-specialist-webmaster-php-e-commerce-web.png', matter: 'Math',
  },
  {
    id: 3, name: 'Samy', avatar: 'https://www.nicepng.com/png/detail/804-8049853_med-boukrima-specialist-webmaster-php-e-commerce-web.png', matter: 'Anglais',
  },
  {
    id: 4, name: 'oclock', avatar: 'https://www.nicepng.com/png/detail/804-8049853_med-boukrima-specialist-webmaster-php-e-commerce-web.png', matter: 'Informatique',
  },
];

export default TeacherPresentation;
