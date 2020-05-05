import React from 'react';
// == react hook form
import { useForm } from 'react-hook-form';
// == hook reduc
import { useDispatch, useSelector } from 'react-redux';
// == actions
import { GET_UPDATE_LESSON_DATA, UPDATE_LESSON } from '../../store/actions';

const UpdateLessonForm = ({ lesson }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  // == onSubmit de updateLesson (heure, titre etc.. )
  const onSubmit = (data) => {
    console.log('click on UPDATE');
    dispatch({ type: GET_UPDATE_LESSON_DATA, payload: data });
    dispatch({ type: UPDATE_LESSON, payload: lesson.id });
    // console.log(data);
  };
  console.log('error in UpdateLessonForm', errors);

  return (
    <div className="container-updateLesson">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <p>Titre</p>
          <input type="text" placeholder={lesson.title} name="Titre" ref={register({ required: true, maxLength: 80 })} />
          {errors.Titre && <div>champ requis</div>}
        </div>
        <div>
          <p>Description</p>
          <textarea name="Description" placeholder={lesson.description} ref={register({ required: true, min: 0, maxLength: 300 })} />
          {errors.Description && <div>champ requis</div>}
        </div>
        <div>
          <p>Date et Heure</p>
          <input type="datetime-local" placeholder="Date" name="Date" ref={register({ required: true })} />
          {errors.Date && <div>champ requis</div>}
        </div>
        <div>
          <p>Niveau</p>
          <select name="Niveau" ref={register({ required: true })}>
            {errors.Niveau && <div>champ requis</div>}
            <option value="easy">easy</option>
            <option value=" normal"> normal</option>
            <option value=" hard"> hard</option>
            <option value=" expert"> expert</option>
          </select>

        </div>
        <div>
          <p>Lien vidéo</p>
          <input type="text" placeholder="Video" name="Video" ref={register} />
        </div>
        <div>
          <input type="submit" name="submitUpdate" />
        </div>
      </form>
    </div>
  );
};

export default UpdateLessonForm;
