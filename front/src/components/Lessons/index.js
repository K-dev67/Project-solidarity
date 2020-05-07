import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { SET_INPUT_NAV } from 'src/store/actions';

// == import component semantic
import {
  Segment, Card, Image, Icon, Button,
} from 'semantic-ui-react';


// react Moment
import 'moment/locale/fr';
import Moment from 'react-moment';

// == component
import AddLessonModal from './AddLessonModal';
import InputSearchLesson from './InputSearchLesson';

// == import from BDD
import getLessonById from '../../utils/getLessonById';

// == style
import './styles.scss';


const Lessons = () => {
  const { lessons, lessonsFiltered, userId } = useSelector((state) => state);
  // je souhaite ajouter une interaction si l'utilisateur est le teacher_id alors
  let classNameOwner = '';
  // todo gerer la photo du prof avec lesson.teacher_id
  if (lessonsFiltered === undefined) return null;
  const lessonsJSX = lessonsFiltered.map((lesson) => {
    if (lesson.teacher_id === userId) classNameOwner = 'card-owner';
    return (
      <Card
        key={lesson.id}
        className={classNameOwner}
        onClick={() => {
          console.log('click');
          getLessonById(lesson.id);
        }}
      >
        <Card.Content>
          <Card.Header><Link to={`/lessons/${lesson.id}`}>{lesson.title}</Link></Card.Header>
          <Card.Meta>
            <span className="date">leçon crée il y a <Moment locale="fr" fromNow ago>{lesson.created_at}</Moment> </span>
          </Card.Meta>
          <Card.Description>
            <p>{classNameOwner}</p>
            <p>{lesson.description}</p>
            <p>{lesson.level}</p>
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
        >{lessonsJSX}
        </Card.Group>
      </Segment>
    </div>
  );
};


export default Lessons;
