import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// == react hook form
import { useForm } from 'react-hook-form';
import { Button } from 'semantic-ui-react';
// ant
import { Popconfirm } from 'antd';
import {
  DELETE_LESSON,
  ADD_CATEGORY_ON_LESSON,
  // MESSAGE_POSITIF_TRUE,
} from '../../store/actions';
import UpdateLessonModal from './UpdateLessonModal';


const UpdateTeacherComponent = ({ lesson }) => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state);

  let modifyButtonJSX = '';
  let deleteButtonJSX = '';
  let addCategoryJSX = '';
  if (userId === lesson.teacher_id) modifyButtonJSX = <UpdateLessonModal lesson={lesson} />;
  if (userId === lesson.teacher_id) {
    deleteButtonJSX = (
      <Button>
        <Popconfirm
          title="Confirmez-vous la suppression ?"
          okText="Oui"
          cancelText="Non"
          onConfirm={() => {
            // dispatch({ type: MESSAGE_POSITIF_TRUE });
            dispatch({
              type: DELETE_LESSON,
              payload: {
                userId,
                lessonId: lesson.id,
              },
            });
          }}
        >
          Supprimer votre cours
        </Popconfirm>
      </Button>
    );
  }

  // == category
  const { register, handleSubmit, errors } = useForm();

  // == get all categories from bdd to add category
  const categories = useSelector((state) => state.categories);
  const optionCategoryJSX = categories.map((categorie) => (
    <option key={categorie.id} value={categorie.name}>{categorie.name}</option>
  ));

  // == submit du select addCategory
  const onSubmit = (data) => {
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
  // == si le user est le teacher
  if (userId === lesson.teacher_id) {
    addCategoryJSX = (
      <div className="container-addCategory">
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
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
    <>
      <div className="container-update-room">
        <div className="room-modify-button">{modifyButtonJSX}</div>
        <div className="room-addCategory-select">{addCategoryJSX}</div>
        <div className="room-delete-button">{deleteButtonJSX}</div>
      </div>
    </>
  );
};

UpdateTeacherComponent.propTypes = {

};

export default UpdateTeacherComponent;
// <p>Ajouter une catégorie</p>
