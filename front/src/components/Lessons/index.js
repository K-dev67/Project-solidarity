import React from 'react';
import { useSelector } from 'react-redux';

// == import component semantic
import { Card, Image, Icon } from 'semantic-ui-react';

// react Moment
import Moment from 'react-moment';
import 'moment/locale/fr';

// == style
import './styles.scss';


const Lessons = () => {
  const lessons = useSelector((state) => state.lessons);
  console.log('lessons', lessons);
  // todo gerer la photo du prof avec lesson.teacher_id
  const lessonsJSX = lessons.map((lesson) => (
    <Card>
      <Image src="{avataree}" wrapped ui={false} />
      <Card.Content>
        <Card.Header>{lesson.title}</Card.Header>
        <Card.Meta>
          <span className="date">leçon crée il y a <Moment locale="fr" fromNow ago>{lesson.created_at}</Moment> </span>
        </Card.Meta>
        <Card.Description>
          {lesson.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          {lesson.level}
        </a>
      </Card.Content>
    </Card>
  ));
  return (
    <div className="lessons">
      <Card.Group
        itemsPerRow={3}
        stackable
      >{lessonsJSX}
      </Card.Group>
    </div>
  );
};


export default Lessons;
