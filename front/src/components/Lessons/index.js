import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// == import component semantic
import {
  Segment, Card, Image, Icon, Button,
} from 'semantic-ui-react';


// react Moment
import 'moment/locale/fr';
import Moment from 'react-moment';

// == component
import AddLessonModal from './AddLessonModal';

// == style
import './styles.scss';


const Lessons = () => {
  // useEffect(getLessons, []);
  const { lessons, userId } = useSelector((state) => state);
  // je souhaite ajouter une interaction si l'utilisateur est le teacher_id alors

  // todo gerer la photo du prof avec lesson.teacher_id
  const lessonsJSX = lessons.map((lesson) => (
    // lessons/${lesson.id}
    <Card key={lesson.id}>
      <Card.Content>
        <Card.Header><Link to={`/lessons/${lesson.id}`}>{lesson.title}</Link></Card.Header>
        <Card.Meta>
          <span className="date">leçon crée il y a <Moment locale="fr" fromNow ago>{lesson.created_at}</Moment> </span>
        </Card.Meta>
        <Card.Description>
          {lesson.description}
          {lesson.level}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="calendar" />
          Le cours aura lieu le <Moment format="D MMM YYYY HH:mm" withTitle>{` ${lesson.plannified}`}</Moment>
        </a>
      </Card.Content>
    </Card>
  ));

  return (
    <div className="lessons">
      <Segment>
        <AddLessonModal />
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
