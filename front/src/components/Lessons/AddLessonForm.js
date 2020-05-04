import React from 'react';
// == react hook form
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
// == actions
import { GET_LESSON_DATA, ADD_LESSON_IN_BDD } from 'src/store/actions';
// == function
// import getLessons from '../../utils/getLessons';

export default function AddLessonForm() {
  // == get all categories
  const categories = useSelector((state) => state.categories);
  const optionCategoryJSX = categories.map((categorie) => (
    <option key={categorie.id} value={categorie.name}>{categorie.name}</option>
  ));
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    dispatch({ type: GET_LESSON_DATA, payload: data });
    dispatch({ type: ADD_LESSON_IN_BDD });
    // console.log(data);
  };
  console.log(errors);

  return (
  // <div className="add-lesson-form">
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Titre" name="Titre" ref={register({ required: true, maxLength: 80 })} />
      <textarea name="Description" ref={register({ required: true, min: 0, maxLength: 300 })} />
      <input type="datetime-local" placeholder="Date" name="Date" ref={register} />
      <select name="Niveau" ref={register({ required: true })}>
        <option value="easy">easy</option>
        <option value=" normal"> normal</option>
        <option value=" hard"> hard</option>
        <option value=" expert"> expert</option>
      </select>
      <select name="Catégorie" ref={register}>
        {optionCategoryJSX}
      </select>
      <input type="text" placeholder="Video" name="Video" ref={register} />
      <input type="submit" name="submitAddLesson" />
    </form>
  // </div>
  );
}
