import React from 'react';
import PropTypes from 'prop-types';

// == style
import './styles.scss';


const Lesson = ({ lesson }) => {
  console.log(lesson);
  return (
    <div className="Lesson">
      Cockpit numero
    </div>
  );
};

Lesson.propTypes = {
  lesson: PropTypes.string.isRequired,
};

export default Lesson;
