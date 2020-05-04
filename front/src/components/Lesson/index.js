import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

// react Moment
import Moment from 'react-moment';
import 'moment/locale/fr';

// component
import UpdateLessonModal from './UpdateLessonModal';

// == style
import './styles.scss';


const Lesson = ({ lesson }) => {
  const userId = useSelector((state) => state.userId);
  console.log(lesson);
  let modifyButtonJSX = '';
  if (userId === lesson.teacher_id) modifyButtonJSX = <UpdateLessonModal lesson={lesson} />;
  return (
    <div className="room">
      <div className="room--description">
        <span className="room-number"># Cockpit numero {lesson.id}</span>
        <h2 className="room-title">titre : {lesson.title}</h2>
        <div className="room-created-date">Salon crée le : <Moment format="D MMM YYYY" withTitle>{lesson.created_at}</Moment>
        </div>
        <div className="room-level">niveau : {lesson.level}</div>
        <div className="room-description">description : {lesson.description}</div>
        <div className="room-plannified">le cours aura lieu le : <Moment format="D MMM YYYY HH:mm" withTitle>{` ${lesson.plannified}`}</Moment></div>
        <div>{modifyButtonJSX}</div>
      </div>
    </div>
  );
};

Lesson.propTypes = {
  lesson: PropTypes.string.isRequired,
};

export default Lesson;
