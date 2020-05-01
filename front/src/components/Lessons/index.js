import React from 'react';
import { useSelector } from 'react-redux';

// == style
import './styles.scss';


const Lessons = () => {
  const lessons = useSelector((state) => state.lessons);
  console.log('lessons', lessons);
  return (
    <div className="lessons">
      Lesson
    </div>
  );
};


export default Lessons;
