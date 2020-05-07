import React from 'react';
// == react hook form
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

// react Moment
import Moment from 'react-moment';
import 'moment/locale/fr';

// == semantic
import { Button, Icon } from 'semantic-ui-react';

// == action
import { DELETE_LESSON, ADD_CATEGORY_ON_LESSON } from '../../store/actions';

// component
import UpdateLessonModal from './UpdateLessonModal';
import LabelCategory from './LabelCategory';
import Chatroom from '../Chat';

// == style
import './styles.scss';


const Lesson = ({ lesson }) => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state);


  let modifyButtonJSX = '';
  let deleteButtonJSX = '';
  let addCategoryJSX = '';
  if (userId === lesson.teacher_id) modifyButtonJSX = <UpdateLessonModal lesson={lesson} />;
  if (userId === lesson.teacher_id) {
    deleteButtonJSX = (
      <Button
        onClick={() => {
          console.log('click on DELETE');
          dispatch({
            type: DELETE_LESSON,
            payload: {
              userId,
              lessonId: lesson.id,
            },
          });
        }}
      >Supprimer votre cours
      </Button>
    );
  }
  // == category
  const { register, handleSubmit, errors } = useForm();
  // == get all categories
  const categories = useSelector((state) => state.categories);
  const optionCategoryJSX = categories.map((categorie) => (
    <option key={categorie.id} value={categorie.name}>{categorie.name}</option>
  ));
  // == submit du select addCategory
  const onSubmit = (data) => {
    console.log('jai cliqué');
    console.log('dataCategory', data.Catégorie);
    const categoryName = data.Catégorie;
    dispatch({
      type: ADD_CATEGORY_ON_LESSON,
      payload: {
        userId,
        lessonId: lesson.id,
        categoryName,
      },
    });
  };
  if (userId === lesson.teacher_id) {
    addCategoryJSX = (
      <div className="container-addCategory">
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <p>Ajouter une catégorie</p>
              <select name="Catégorie" ref={register}>
                <option value="">select</option>
                {optionCategoryJSX}
              </select>
            </div>
            <div>
              <input type="submit" name="submitCategory" />
            </div>
          </form>
        </div>
      </div>
    );
  }


  return (
    <div className="room">
      <Icon size="large" name="chevron circle left" />
      <div className="room--description">
        <span className="room-number"># Cockpit numero {lesson.id}</span>
        <h2 className="room-title">{lesson.title}</h2>
        <LabelCategory lessonId={lesson.id} teacherId={lesson.teacher_id} />
        <div className="room-created-date">Salon crée le : <Moment format="D MMM YYYY" withTitle>{lesson.created_at}</Moment>
        </div>
        <div className="room-level">niveau : {lesson.level}</div>
        <div className="room-description">description : {lesson.description}</div>
        <div className="room-plannified">le cours aura lieu le : <Moment format="D MMM YYYY HH:mm" withTitle>{` ${lesson.plannified}`}</Moment></div>
        <div className="room-modify-button">{modifyButtonJSX}</div>
        <div className="room-delete-button">{deleteButtonJSX}</div>
        <div className="room-addCategory-select">{addCategoryJSX}</div>
      </div>
      <div className="tchat">
        <Chatroom />
      </div>
    </div>
  );
};

Lesson.propTypes = {
  lesson: PropTypes.string.isRequired,
};

export default Lesson;
