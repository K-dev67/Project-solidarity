import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// == style
import './styles.scss';
// == axios
import axios from 'axios';
// == semanthic
import {
  Segment, Card, Icon, Label, Image,
} from 'semantic-ui-react';
// == cst
import { API_URL } from '../../utils/constante';
import { SET_ASK_LESSONS } from '../../store/actions';
// react Moment
import 'moment/locale/fr';
import Moment from 'react-moment';

// import component
import AddAskLessonModal from './AskLessonModal';
import Loading from '../Loading';


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
            {askLesson.title}
          </Card.Header>
          <Card.Meta>
            <span className="date">La demande pour ce cours à été faite il y a  <Moment locale="fr" fromNow ago>{askLesson.created_at}</Moment> </span>
          </Card.Meta>
          <Card.Description>
            <p>{askLesson.description}</p>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Link
            to="lessons"
          >
            <Icon name="calendar" />
            Proposer un cours
          </Link>
        </Card.Content>
      </Card>
    );
  });
  return (
    <div className="askLessons">
      <Segment>
        <AddAskLessonModal />
        {/* <InputSearchLesson />  */}
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
