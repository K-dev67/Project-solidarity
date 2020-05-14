import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { SET_INPUT_NAV } from 'src/store/actions';

// == import component semantic
import {
  Segment, Card, Icon, Label, Image,
} from 'semantic-ui-react';

// == import action
import { ENTER_CHAT } from '../../store/actions';

// react Moment
import 'moment/locale/fr';
import Moment from 'react-moment';

// == component
import AddLessonModal from './AddLessonModal';
import InputSearchLesson from './InputSearchLesson';
import Loading from '../Loading';

// == import from BDD
import getLessonById from '../../utils/getLessonById';
import getMessages from '../../utils/getMessages';
import getLessons from '../../utils/getLessons';

// == style
import './styles.scss';

const Lessons = () => {
  const dispatch = useDispatch();
  useEffect(getLessons, []);
  const { lessonsFiltered, userId } = useSelector((state) => state);
  // je souhaite ajouter une interaction si l'utilisateur est le teacher_id alors
  let labelOwnerJSX = '';
  // todo gerer la photo du prof avec lesson.teacher_id
  if (lessonsFiltered === undefined) return null;
  const lessonsJSX = lessonsFiltered.map((lesson) => {
    if (lesson.teacher_id === userId) {
      labelOwnerJSX = (
        <Image
          fluid
          label={{
            as: 'a', color: 'red', corner: 'right', icon: 'save',
          }}
        />
      );
    }
    const handleClick = () => {
      // recup via une requete les id de la leçon et
      // crée un socket
      getLessonById(lesson.id);
      getMessages(lesson.id);
      dispatch({ type: ENTER_CHAT, payload: lesson.id });
    };
    // == label categories
    let labelJSX = (
      <Label as="a" color="gray" ribbon>
        {lesson.level}
      </Label>
    );
    if (lesson.level === 'easy' || lesson.level === 'Easy') {
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
      <Card
        key={lesson.id}
      >
        {labelOwnerJSX}
        <Card.Content>
          <Card.Header
            onClick={handleClick}
          >
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
            <p>{lesson.level}</p>
            <p>{lesson.description}</p>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="calendar" />
            Le cours aura lieu le <Moment format="D MMM YYYY HH:mm" withTitle>{` ${lesson.plannified}`}</Moment>
          </a>
        </Card.Content>
      </Card>
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

// easy => green
// normal => bleu
// hard => red
// expert => black
