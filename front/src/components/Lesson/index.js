import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

// react Moment
import Moment from 'react-moment';
import 'moment/locale/fr';

// == semantic
import { Button } from 'semantic-ui-react';

// == action
import { DELETE_LESSON } from '../../store/actions';

// component
import UpdateLessonModal from './UpdateLessonModal';

// == style
import './styles.scss';


const Lesson = ({ lesson }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.userId);
  let modifyButtonJSX = '';
  let deleteButtonJSX = '';
  if (userId === lesson.teacher_id) modifyButtonJSX = <UpdateLessonModal lesson={lesson} />;
  if (userId === lesson.teacher_id) {
    deleteButtonJSX = (
      <Button
        onClick={() => {
          console.log('click on DELETE');
          dispatch({
            type: DELETE_LESSON,
            payload: {
              userId,
              lessonId: lesson.id,
            },
          });
        }}
      >Supprimer votre cours
      </Button>
    );
  }


  return (
    <div className="room">
      <div className="room--description">
        <span className="room-number"># Cockpit numero {lesson.id}</span>
        <div className="room-modify-button">{modifyButtonJSX}</div>
        <h2 className="room-title">titre : {lesson.title}</h2>
        <div className="room-created-date">Salon crée le : <Moment format="D MMM YYYY" withTitle>{lesson.created_at}</Moment>
        </div>
        <div className="room-level">niveau : {lesson.level}</div>
        <div className="room-description">description : {lesson.description}</div>
        <div className="room-plannified">le cours aura lieu le : <Moment format="D MMM YYYY HH:mm" withTitle>{` ${lesson.plannified}`}</Moment></div>
        <div className="room-delete-button">{deleteButtonJSX}</div>
      </div>
    </div>
  );
};

Lesson.propTypes = {
  lesson: PropTypes.string.isRequired,
};

export default Lesson;
