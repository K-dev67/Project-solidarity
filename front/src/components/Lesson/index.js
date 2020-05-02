import React from 'react';
import PropTypes from 'prop-types';

// react Moment
import Moment from 'react-moment';
import 'moment/locale/fr';

// == style
import './styles.scss';


const Lesson = ({ lesson }) => {
  console.log(lesson);
  return (
    <div className="lesson">
      <span># Cockpit numero {lesson.id}</span>
      <h2>{lesson.title}</h2>
      <div>Salon crée le
        <Moment format="D MMM YYYY" withTitle>
          {lesson.created_at}
        </Moment>
      </div>
      <div>niveau : {lesson.level}</div>
      <div>{lesson.description}</div>
    </div>
  );
};

Lesson.propTypes = {
  lesson: PropTypes.string.isRequired,
};

export default Lesson;
