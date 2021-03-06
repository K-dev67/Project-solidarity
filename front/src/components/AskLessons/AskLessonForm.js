import React, { useEffect } from 'react';
// == react hook form
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_ASKLESSON_IN_BDD } from 'src/store/actions';
import getCategories from '../../utils/getCategories';
// == actions


const AskLessonForm = () => {
  const dispatch = useDispatch();
  useEffect(getCategories, []);
  const categories = useSelector((state) => state.categories);
  const optionCategoryJSX = categories.map((categorie) => (
    <option key={categorie.id} value={categorie.name}>{categorie.name}</option>
  ));
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    dispatch({ type: ADD_ASKLESSON_IN_BDD, payload: data });
    // console.log(errors);
  };

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
            <textarea name="Description" placeholder="Description" ref={register({ required: true, min: 0, maxLength: 1000 })} />
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
            {errors.Catégorie && <div className="error-form">champ requis</div>}
          </div>
        </div>
      </div>
      <div className="submit-add-lesson">
        <input type="submit" name="submitAddLesson" />
      </div>
    </form>
  );
};


export default AskLessonForm;
