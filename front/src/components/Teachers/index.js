import React from 'react';
import { useSelector } from 'react-redux';

// == style
import './styles.scss';


const Teachers = () => {
  const teachers = useSelector((state) => state.teachers);
  console.log('teachers', teachers);

  return (
    <div className="teachers">
      <h1>teachers</h1>
    </div>
  );
};


export default Teachers;
