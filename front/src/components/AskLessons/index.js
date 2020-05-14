import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// == style
import './styles.scss';
import axios from 'axios';
import {
  Segment, Card, Icon, Label, Image,
} from 'semantic-ui-react';
import { API_URL } from '../../utils/constante';
import { SET_ASK_LESSONS } from '../../store/actions';
import Loading from '../Loading';

// == import component semantic


const AskLessons = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`${API_URL}/askList`)
      .then((res) => {
        dispatch({ type: SET_ASK_LESSONS, payload: res.data });
      });
  },
  []);
  const { askLessons, userId } = useSelector((state) => state);
  // == composant ask lesson JSX
  let labelOwnerJSX = '';
  const askLessonsJSX = askLessons.map((askLesson) => {
    console.log('asklesson', askLesson);
    if (askLesson.teacher_id === userId) {
      labelOwnerJSX = (
        <Image
          fluid
          label={{
            as: 'a', color: 'red', corner: 'right', icon: 'savetest',
          }}
        />
      );
    }
    // == label levels
    let labelJSX = '';
    if (askLesson.level === 'easy') {
      labelJSX = (
        <Label as="a" color="green" ribbon>
          {askLesson.level}
        </Label>
      );
    }
    else if (askLesson.level === 'normal') {
      labelJSX = (
        <Label as="a" color="blue" ribbon>
          {askLesson.level}
        </Label>
      );
    }
    else if (askLesson.level === 'hard') {
      labelJSX = (
        <Label as="a" color="red" ribbon>
          {askLesson.level}
        </Label>
      );
    }
    else if (askLesson.level === 'expert') {
      labelJSX = (
        <Label as="a" color="black" ribbon>
          {askLesson.level}
        </Label>
      );
    }
    return (
      <Card
        key={askLesson.id}
      >
        {labelOwnerJSX}
        <Card.Content>
          <Card.Header>
            {labelJSX}
            {/* <Link
              to={`/lessons/${lesson.id}`}
            >{lesson.title}
            </Link> */}
          </Card.Header>
          <Card.Meta>
            {/* <span className="date">leçon crée il y a <Moment locale="fr" fromNow ago>{lesson.created_at}</Moment> </span> */}
          </Card.Meta>
          <Card.Description>
            <p>{askLesson.level}</p>
            <p>{askLesson.description}</p>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="calendar" />
            {/* Le cours aura lieu le <Moment format="D MMM YYYY HH:mm" withTitle>{` ${lesson.plannified}`}</Moment> */}
          </a>
        </Card.Content>
      </Card>
    );
  });
  return (
    <div className="askLessons">
      Faire une demande de cours

      <Segment>
        {/* <AddLessonModal />
        <InputSearchLesson /> */}
        <Card.Group
          itemsPerRow={3}
          stackable
        >{askLessons.length > 0 ? (<>{askLessonsJSX}</>) : <Loading />}
        </Card.Group>
      </Segment>
    </div>
  );
};


export default AskLessons;
