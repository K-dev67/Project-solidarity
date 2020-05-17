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
  let sliceTeachers = [];
  if (teachers.length > 0) sliceTeachers = teachers.slice(4, 8);
  const teachersJSX = sliceTeachers.map((t) => (
    <div key={t.id} className="OneCard">
      <img src={t.avatar} alt="avatar_teacher" />
      <h4>{t.lastname}</h4>
      {/* <p>{prof.matter}</p> */}
    </div>
  ));


  return (
    <div className="TeacherPresentation_main">
      <h2>Apprenez ou proposez un cours en ligne</h2>
      <div className="TeacherPresentation_card">
        {teachersJSX.length > 0 ? (<>{teachersJSX}</>) : <Loading />}

      </div>
      <Link to="/teachers">
        <button
          className="button AssetsPresentation_button"
          type="button"
        >Voir la liste des profs
        </button>
      </Link>
    </div>
  );
};

export default TeacherPresentation;
