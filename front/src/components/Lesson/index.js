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
    <div className="room">
      <div className="room--description">
        <span className="room-number"># Cockpit numero {lesson.id}</span>
        <h2 className="room-title">{lesson.title}</h2>
        <div className="room-created-date">Salon crée le : <Moment format="D MMM YYYY" withTitle>{lesson.created_at}</Moment>
        </div>
        <div className="room-level">niveau : {lesson.level}</div>
        <div className="room-description">{lesson.description}</div>
      </div>
    </div>
  );
};

Lesson.propTypes = {
  lesson: PropTypes.string.isRequired,
};

export default Lesson;
