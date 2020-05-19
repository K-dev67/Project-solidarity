import React, { useState, useEffect } from 'react';

import axios from 'axios';


import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

// == semantic
import { Button } from 'semantic-ui-react';
import { API_URL } from '../../utils/constante';

// == action
import { SET_LESSON_BY_ID } from '../../store/actions';

// == import utils/fetchInBdd
import getCategories from '../../utils/getCategories';

// component
import RoomDescription from './RoomDescription';

import Chat from '../Chat';

import Video from '../VideoLive';

// == style
import './styles.scss';
import store from '../../store';

import background from '../../assets/img/Pattern_fond.png';

const Room = ({ lesson }) => {
  // const dispatch = useDispatch();
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
  const [buttonDisplay, setButtonDisplay] = useState('block');
  let videoLiveComponent = '';
  if (askLive === true) {
    videoLiveComponent = <Video lesson={lesson} />;
  }
  // == background image from live
  const divStyleStream = {
    backgroundImage: `url(${background})`,
  };
  // == display none ou block if live is on or off
  const divStyleButton = {
    display: `${buttonDisplay}`,
  };
  return (
    <>
      <div
        className="room"
        key={lesson.id}
      >
        <div className="container-live-description">
          <div className="live-stream" style={divStyleStream}>
            {videoLiveComponent}
            <Button
              style={divStyleButton}
              color="red"
              onClick={() => {
                setAskLive(true);
                setButtonDisplay('none');
              }}
            >{buttonSentence}
            </Button>
          </div>
          <RoomDescription lesson={lesson} />
        </div>
        <div className="tchat">
          <Chat lessonId={lesson.id} />
        </div>
      </div>
    </>
  );
};

Room.propTypes = {
  lesson: PropTypes.string.isRequired,
};

export default Room;
