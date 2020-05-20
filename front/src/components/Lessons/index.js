import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// == axios
import axios from 'axios';
import { API_URL } from '../../utils/constante';
import { Link } from 'react-router-dom';

// == import component semantic
import {
  Segment, Card, Icon, Label, Image,
} from 'semantic-ui-react';
import { Popconfirm } from 'antd';

// == import action
import { ENTER_CHAT, LEAVE_ROOM } from '../../store/actions';

// react Moment
import 'moment/locale/fr';
import Moment from 'react-moment';

// == component
import AddLessonModal from './AddLessonModal';
import InputSearchLesson from './InputSearchLesson';
// import ImageCategory from './ImageCategory';
import Loading from '../Loading';

// == import from BDD
import getLessonById from '../../utils/getLessonById';
import getMessages from '../../utils/getMessages';
import getLessons from '../../utils/getLessons';
import getRelationSubscribe from '../../utils/getRelationUserSubscribe';

// == style
import './styles.scss';

const Lessons = () => {
  const dispatch = useDispatch();
  useEffect(getLessons, []);
  useEffect(getRelationSubscribe, []);
  //! test close socket
  dispatch({ type: LEAVE_ROOM });

  const { lessonsFiltered, userId } = useSelector((state) => state);
  let classCardLesson = 'card-lesson-list';


  if (lessonsFiltered === undefined) return null;
  const lessonsJSX = lessonsFiltered.map((lesson) => {
    if (lesson.teacher_id === userId) {
      classCardLesson = 'card-lesson-list card-lesson-list--owner';
    }
    else classCardLesson = 'card-lesson-list';
    // pour s'inscrire à un cours
    const handleSubscribe = () => {
      axios.patch(`${API_URL}/user/${userId}/lesson/${lesson.id}/subscribe`)
        .then((res) => {
          getLessons();
        });
      axios.patch(`${API_URL}/user/${userId}/lesson/${lesson.id}/like`)
        .then((res) => {
          getLessons();
        });
    };

    // pop confirm pour subscribe à un cours
    const confirmSubscribe = (
      <Popconfirm
        title="S'abonner à ce cours ?"
        okText="Oui"
        cancelText="Non"
        onConfirm={handleSubscribe}
      >
        <a href="#"><Icon name="bell outline" size="large" /></a>
      </Popconfirm>
    );

    const handleClick = () => {
      // recup via une requete les id de la leçon et
      // crée un socket
      getLessonById(lesson.id);
      getMessages(lesson.id);
      dispatch({ type: ENTER_CHAT, payload: lesson.id });
    };
    // == label levels
    let labelJSX = '';
    if (lesson.level === 'easy') {
      labelJSX = (
        <Label as="a" color="green" ribbon>
          {lesson.level}
        </Label>
      );
    }
    else if (lesson.level === 'normal') {
      labelJSX = (
        <Label as="a" color="blue" ribbon>
          {lesson.level}
        </Label>
      );
    }
    else if (lesson.level === 'hard') {
      labelJSX = (
        <Label as="a" color="red" ribbon>
          {lesson.level}
        </Label>
      );
    }
    else if (lesson.level === 'expert') {
      labelJSX = (
        <Label as="a" color="black" ribbon>
          {lesson.level}
        </Label>
      );
    }
    return (
      <div
        className={classCardLesson}
        key={lesson.id}
      >
        <Card>
          <Card.Content>
            <Card.Header
              onClick={handleClick}
            >
              {/* <ImageCategory picture={lesson.picture} /> */}
              {labelJSX}
              <Link
                to={`/lessons/${lesson.id}`}
              >{lesson.title}
              </Link>
            </Card.Header>
            <Card.Meta>
              <span className="date">leçon crée il y a <Moment locale="fr" fromNow ago>{lesson.created_at}</Moment> </span>
            </Card.Meta>
            <Card.Description>
              <p>{lesson.description}</p>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name="calendar" />
            <p>Le cours aura lieu le </p> <Moment format="D MMM YYYY HH:mm" withTitle>{` ${lesson.plannified}`}</Moment>
            <div className="lesson-bell" style={{ cursor: 'pointer' }}>
              <a>{lesson.like}</a>
              {confirmSubscribe}
            </div>
          </Card.Content>
        </Card>
      </div>
    );
  });

  return (
    <div className="lessons">
      <Segment>
        <AddLessonModal />
        <InputSearchLesson />
        <Card.Group
          itemsPerRow={3}
          stackable
        >{lessonsFiltered.length > 0 ? (<>{lessonsJSX}</>) : <Loading />}
        </Card.Group>
      </Segment>
    </div>
  );
};

export default Lessons;
