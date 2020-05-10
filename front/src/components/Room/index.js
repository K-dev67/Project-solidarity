import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

// == semantic
import { Button } from 'semantic-ui-react';

// == action
import { LEAVE_ROOM } from '../../store/actions';

// component
import RoomDescription from './RoomDescription';
import LabelCategory from './LabelCategory';
import Chat from '../Chat';
import RoomUsers from './RoomUsers';
import UpdateTeacherComponent from './UpdateTeacherComponent';

// == style
import './styles.scss';


const Room = ({ lesson }) => {
  const dispatch = useDispatch();
  // const { userId } = useSelector((state) => state);

  return (
    <>
      <header className="header-room">
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
        <LabelCategory lessonId={lesson.id} teacherId={lesson.teacher_id} />
      </header>
      <div className="room">
        <UpdateTeacherComponent lesson={lesson} />
        <RoomDescription lesson={lesson} />
        <div className="tchat">
          <Chat lessonId={lesson.id} />
          <RoomUsers />
        </div>
      </div>
    </>
  );
};

Room.propTypes = {
  lesson: PropTypes.string.isRequired,
};

export default Room;
