import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// react Moment
import Moment from 'react-moment';
import 'moment/locale/fr';

import { Button } from 'semantic-ui-react';

import { LEAVE_ROOM } from '../../store/actions';

import LabelCategory from './LabelCategory';
import UpdateTeacherComponent from './UpdateTeacherComponent';
import RoomUsers from './RoomUsers';

// useDispatch;


const RoomDescription = ({ lesson }) => {
  const dispatch = useDispatch();
  return (
    <div className="room--description">
      <div className="descri-user">
        <div className="room-descri">
          <h2 className="room-title">{lesson.title}</h2>
          <LabelCategory lessonId={lesson.id} teacherId={lesson.teacher_id} />
          <span className="room-number">Salle de cours : #{lesson.id}</span>
          <div className="room-created-date"><bold>Salon crée le</bold> : <Moment format="D MMM YYYY" withTitle>{lesson.created_at}</Moment>
          </div>
          <div className="room-level">Niveau : {lesson.level}</div>
          <div className="room-description">Description : {lesson.description}</div>
          <div className="room-plannified">Le cours aura lieu le : <Moment format="D MMM YYYY HH:mm" withTitle>{` ${lesson.plannified}`}</Moment></div>
        </div>
        <RoomUsers />
      </div>
      <UpdateTeacherComponent lesson={lesson} />
      <Link
        fluid
        to="/lessons/"
        onClick={() => {
          dispatch({ type: LEAVE_ROOM });
        }}
      >
        <Button
          color="red"
          fluid
        >Quitter le cours
        </Button>
      </Link>
    </div>
  );
};


RoomDescription.propTypes = {
};

export default RoomDescription;
