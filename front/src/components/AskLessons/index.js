import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// == style
import './styles.scss';
// == axios
import axios from 'axios';
// == semanthic
import {
  Segment, Card, Icon, Label,
} from 'semantic-ui-react';
// == cst
import Moment from 'react-moment';
import { API_URL } from '../../utils/constante';
import { SET_ASK_LESSONS, DELETE_ASK_LESSON } from '../../store/actions';
// react Moment
import 'moment/locale/fr';

// import component
import AddAskLessonModal from './AskLessonModal';
import Loading from '../Loading';


const AskLessons = () => {
  const dispatch = useDispatch();
  const { askLessons, userId } = useSelector((state) => state);
  useEffect(() => {
    axios.get(`${API_URL}/askList`)
      .then((res) => {
        dispatch({ type: SET_ASK_LESSONS, payload: res.data });
      })
      .catch((error) => console.trace(error));
  },
  [askLessons]);

  let colorOwner = '';
  let iconPencil = '';
  let iconCross = '';
  // == composant ask lesson JSX
  const askLessonsJSX = askLessons.map((askLesson) => {
    // == pour différencier un proprio
    if (askLesson.author_id === userId) {
      colorOwner = 'teal';
      iconPencil = (<Icon name="pencil" />);
      iconCross = (<Icon name="close" />);
    }
    // == pour delete une carte
    const handleDelete = () => {
      dispatch({ type: DELETE_ASK_LESSON, payload: askLesson.id });
    };
    // == pour update une carte
    const handleUpdate = () => {
      console.log('clickk');
      console.log('askLesson.id', askLesson.id);
    };
    // == pour like une carte
    const handleLike = () => {
      console.log('liké');
      axios.get(`${API_URL}/user/${userId}/ask/${askLesson.id}/subscribe`)
        .then((res) => console.log('res', res));
    };
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
        color={colorOwner}
        key={askLesson.id}
      >
        <Card.Content>
          <Card.Header>
            {labelJSX}
            {askLesson.title}
            <div style={{ cursor: 'pointer' }} onClick={handleUpdate}>{iconPencil}</div>
            <div style={{ cursor: 'pointer' }} onClick={handleDelete}>{iconCross}</div>
          </Card.Header>
          <Card.Meta>
            <span className="date">La demande pour ce cours a été faite il y a  <Moment locale="fr" fromNow ago>{askLesson.created_at}</Moment> </span>
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
          {/* <div><Icon /></div> */}
          <div style={{ cursor: 'pointer' }} onClick={handleLike}>{askLesson.want_it}<Icon name="heart" color="teal" /></div>
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
