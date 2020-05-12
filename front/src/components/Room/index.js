import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

// == semantic
import { Button } from 'semantic-ui-react';
import { API_URL } from '../../utils/constante';

// == action
import { LEAVE_ROOM, SET_LESSON_BY_ID } from '../../store/actions';

// == import utils/fetchInBdd

import getCategories from '../../utils/getCategories';

// component
import RoomDescription from './RoomDescription';
import LabelCategory from './LabelCategory';
import Chat from '../Chat';
import RoomUsers from './RoomUsers';
import UpdateTeacherComponent from './UpdateTeacherComponent';
import Video from '../VideoLive';

// == style
import './styles.scss';
import store from '../../store';

const Room = ({ lesson }) => {
  const dispatch = useDispatch();
  useEffect(
    () => {
      axios
        .get(`${API_URL}/lessons/${lesson.id}`)
        .then((res) => {
          console.log('good for lessonId in Room');
          store.dispatch({ type: SET_LESSON_BY_ID, payload: res.data });
        }).catch((error) => console.trace(error));
    },
    [],
  );
  useEffect(getCategories, []);
  const userId = useSelector((state) => state.userId);
  let buttonSentence = 'Suivre le live';
  if (userId === lesson.teacher_id) buttonSentence = 'Lancer le live';
  const [askLive, setAskLive] = useState(false);
  let videoLiveComponent = '';
  if (askLive === true) {
    videoLiveComponent = <Video lesson={lesson} />;
  }

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
        <Button
          color="red"
          onClick={() => setAskLive(true)}
        >{buttonSentence}
        </Button>
        {videoLiveComponent}
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
