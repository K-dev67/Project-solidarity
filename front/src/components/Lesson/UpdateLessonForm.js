import React from 'react';
// == react hook form
import { useForm } from 'react-hook-form';
// == hook reduc
import { useDispatch, useSelector } from 'react-redux';
// == actions
import { GET_UPDATE_LESSON_DATA, UPDATE_LESSON } from '../../store/actions';

const UpdateLessonForm = ({ lesson }) => {
  // == get all categories
  // const categories = useSelector((state) => state.categories);
  // const optionCategoryJSX = categories.map((categorie) => (
  //   <option key={categorie.id} value={categorie.name}>{categorie.name}</option>
  // ));
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log('click on UPDATE');
    dispatch({ type: GET_UPDATE_LESSON_DATA, payload: data });
    dispatch({ type: UPDATE_LESSON, payload: lesson.id });
    // console.log(data);
  };
  console.log('error in UpdateLessonForm', errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder={lesson.title} name="Titre" ref={register({ required: true, maxLength: 80 })} />
      <textarea name="Description" placeholder={lesson.description} ref={register({ required: true, min: 0, maxLength: 300 })} />
      <input type="datetime-local" placeholder="Date" name="Date" ref={register} />
      <select name="Niveau" ref={register({ required: true })}>
        <option value="easy">easy</option>
        <option value=" normal"> normal</option>
        <option value=" hard"> hard</option>
        <option value=" expert"> expert</option>
      </select>
      {/* <select name="Catégorie" ref={register}>
        {optionCategoryJSX}
      </select> */}
      <input type="text" placeholder="Video" name="Video" ref={register} />
      <input type="submit" name="submitUpdate" />
    </form>
  );
};

export default UpdateLessonForm;
