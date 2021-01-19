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
// ant
import { Popconfirm } from 'antd';
import { API_URL } from '../../utils/constante';
import { SET_ASK_LESSONS, DELETE_ASK_LESSON } from '../../store/actions';
// react Moment
import 'moment/locale/fr';

// import component
import AddAskLessonModal from './AskLessonModal';
import UpdateAskLessonModal from './UpdateAskLessonModal';
// import ConfirmDelete from './ConfirmDelete';
import Loading from '../Loading';
import background from '../../assets/img/Pattern_fond.png';

const AskLessons = () => {
  const dispatch = useDispatch();
  const { askLessons, userId } = useSelector((state) => state);
  const contentStyle = {
    backgroundImage: `url(${background})`,
  };
  useEffect(() => {
    axios.get(`${API_URL}/askList`)
      .then((res) => {
        dispatch({ type: SET_ASK_LESSONS, payload: res.data });
      })
      .catch((error) => console.trace(error));
  },
  []);

  // const colorOwner = '';
  let iconPencil = '';
  let confirmDelete = '';
  let classAskCardOwner = 'ask-card';
  // == composant ask lesson JSX
  const askLessonsJSX = askLessons.map((askLesson) => {
    // == pour différencier un proprio
    if (askLesson.author_id === userId) {
      // == class de bordure de carte
      classAskCardOwner = 'ask-card ask-card--owner';
      // == pour delete une carte
      const handleDelete = () => {
        dispatch({ type: DELETE_ASK_LESSON, payload: askLesson.id });
      };

      iconPencil = (<a href="#"><UpdateAskLessonModal askLesson={askLesson} /></a>
      );

      confirmDelete = (
        <Popconfirm
          title="Confirmez-vous la suppression ?"
          okText="Oui"
          cancelText="Non"
          onConfirm={handleDelete}
        >
          <a href="#"><Icon name="close" /></a>
        </Popconfirm>
      );
    }
    else {
      iconPencil = '';
      confirmDelete = '';
      classAskCardOwner = 'ask-card';
    }

    // == pour like une askLesson
    const handleLike = () => {
      axios.patch(`${API_URL}/user/${userId}/ask/${askLesson.id}/like`)
        .then((res) => {
          axios.get(`${API_URL}/askList`)
            .then((res2) => {
              dispatch({ type: SET_ASK_LESSONS, payload: res2.data });
            })
            .catch((error) => console.trace(error));
        });
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
        className={classAskCardOwner}
        // color={colorOwner}
        key={askLesson.id}
      >
        <div className="for-ask-border">
          <Card.Content>
            <Card.Header style={contentStyle}>
              {labelJSX}
              {askLesson.title}

            </Card.Header>
            <Card.Meta>
              <span className="date">La demande pour ce cours a été faite il y a  <Moment locale="fr" fromNow ago>{askLesson.created_at}</Moment> </span>
            </Card.Meta>
            <Card.Description>
              <p>{askLesson.description}</p>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="link-ask-div">
              <Link
                to="lessons"
              >
                <Icon name="calendar" />
                Proposer un cours
              </Link>
            </div>
            <div className="pencil-ask-card" style={{ cursor: 'pointer' }}>{iconPencil}</div>
            {confirmDelete}
            <div className="ask-heart" style={{ cursor: 'pointer' }} onClick={handleLike}><a><p>{askLesson.want_it}</p><Icon name="heart" color="teal" /></a></div>
          </Card.Content>
        </div>
      </Card>
    );
  });
  return (
    <div className="askLessons">
      <Segment>
        <div className="btn-container">
          <AddAskLessonModal />
        </div>
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
