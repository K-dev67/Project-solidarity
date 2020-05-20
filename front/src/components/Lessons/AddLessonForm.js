import React, { useEffect } from 'react';
// == react hook form
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
// == actions
import { GET_LESSON_DATA, ADD_LESSON_IN_BDD } from 'src/store/actions';
// == function
import getCategories from '../../utils/getCategories';


export default function AddLessonForm() {
  const dispatch = useDispatch();
  // == get all categories
  useEffect(getCategories, []);
  const categories = useSelector((state) => state.categories);
  const optionCategoryJSX = categories.map((categorie) => (
    <option key={categorie.id} value={categorie.name}>{categorie.name}</option>
  ));

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    dispatch({ type: GET_LESSON_DATA, payload: data });
    dispatch({ type: ADD_LESSON_IN_BDD });
  };
  // console.log(errors);

  return (

    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="add-lesson-form">
        <div className="title-description">
          <div className="title">
            <p>Titre</p>
            <input type="text" placeholder="Titre" name="Titre" ref={register({ required: true, maxLength: 80 })} />
            {errors.Titre && <div className="error-form">Titre requis</div>}
          </div>
          <div className="description">
            <p>Description</p>
            <textarea name="Description" placeholder="Description" ref={register({ required: true, min: 0, maxLength: 300 })} />
            {errors.Description && <div className="error-form">Description requise</div>}
          </div>
        </div>
        <div className="level-category-date-video">
          <div className="level">
            <p>Niveau</p>
            <select name="Niveau" ref={register({ required: true })}>
              <option value="">niveaux</option>
              <option value="easy">easy</option>
              <option value="normal">normal</option>
              <option value="hard">hard</option>
              <option value="expert">expert</option>
            </select>
            {errors.Niveau && <div className="error-form">Niveau requis</div>}
          </div>
          <div className="category">
            <p>Categorie</p>
            <select name="Catégorie" ref={register({ required: true })}>
              <option value="">matières</option>
              {optionCategoryJSX}
            </select>
            {errors.Catégorie && <div className="error-form">matière requise</div>}
          </div>
          <div className="date">
            <p>Date et Heure</p>
            <input type="datetime-local" placeholder="Date" name="Date" ref={register({ required: true })} />
            {errors.Date && <div className="error-form">Date et Heure requise</div>}
          </div>
          <div className="video-url">
            <p>Lien vidéo (facultatif)</p>
            <input type="text" placeholder="Video facultatif" name="Video" ref={register} />
          </div>
        </div>
      </div>
      <div className="submit-add-lesson">
        <input type="submit" name="submitAddLesson" />
      </div>
    </form>

  );
}
