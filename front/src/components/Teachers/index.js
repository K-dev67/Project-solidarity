import React from 'react';


// == import component
import ListTeachers from './teachersCard';

// == style
import './styles.scss';


const Teachers = () => (
  <div className="teachers">
    <h1>Liste de nos Professeurs
    </h1>
    <div className="container-list-teachers">
      <ListTeachers />
    </div>
  </div>
);


export default Teachers;
