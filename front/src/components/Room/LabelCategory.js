import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Icon, Label } from 'semantic-ui-react';
import axios from 'axios';
import Loading from '../Loading';
import { DELETE_CATEGORY_LABEL, SET_LESSON_BY_ID, SET_CATEGORY_BY_LESSONID } from '../../store/actions';
import { API_URL } from '../../utils/constante';


const LabelCategory = ({ lessonId, teacherId }) => {
  const dispatch = useDispatch();
  //! ----- > test category
  const { categoryByLesson } = useSelector((state) => state);
  useEffect(
    () => {
      axios
        .get(`${API_URL}/categoryList/${lessonId}`)
        .then((res) => {
          dispatch({ type: SET_CATEGORY_BY_LESSONID, payload: res.data });
        }).catch((error) => console.trace(error));
    },
    [],
  );

  console.log('categoryByLesson', categoryByLesson);
  //!

  const { userId } = useSelector((state) => state);
  // const { categoryInfo } = lessonInfo;
  useEffect(
    () => {
      axios
        .get(`${API_URL}/lessons/${lessonId}`)
        .then((res) => {
          dispatch({ type: SET_LESSON_BY_ID, payload: res.data });
        }).catch((error) => console.trace(error));
    },
    [],
  );

  // if (categoryInfo === undefined) {
  //   return null;
  // }
  if (categoryByLesson === undefined) {
    return null;
  }
  // console.log('categoryInfo', categoryInfo);
  const categoryJSX = categoryByLesson.map((category) => {
    // == fct pour qui réagit au handleClick
    const handleClick = (e) => {
      const categoryId = e.target.getAttribute('data-key');
      dispatch({
        type: DELETE_CATEGORY_LABEL,
        payload:
         {
           categoryId,
           lessonId,
         },
      });
    };
    // == icone de la croix pour remove category
    let iconJSX = '';
    if (userId === teacherId) {
      iconJSX = (
        <Icon
          onClick={handleClick}
          name="delete"
          key={category.category_id}
          data-key={category.category_id}
        />
      );
    }
    return (
      <Label
        image
        color={category.color}
      >
        {category.name}
        {iconJSX}
      </Label>
    );
  });
  return (
    <div className="label-category">
      {categoryByLesson.length > 0 ? (<>{categoryJSX}</>) : <Loading />}
    </div>
  );
};

LabelCategory.propTypes = {
  lessonId: PropTypes.number,
  teacherId: PropTypes.number,
};

export default LabelCategory;
