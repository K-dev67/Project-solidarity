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
  const errorDivStyle = { color: 'red' };

  return (

    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container-update-lesson-form">
        <div className="update-lesson-form">
          <div className="title-description">
            <div className="title">
              <p>Titre</p>
              <input type="text" placeholder={lesson.title} name="Titre" ref={register({ required: true, maxLength: 80 })} />
              {errors.Titre && <div style={errorDivStyle}>Titre requis</div>}
            </div>
            <div className="description">
              <p>Description</p>
              <textarea name="Description" placeholder={lesson.description} ref={register({ required: true, min: 0, maxLength: 300 })} />
              {errors.Description && <div style={errorDivStyle}>Description requise</div>}
            </div>
          </div>
          <div className="date-video-level">
            <div className="date">
              <p>Date et Heure</p>
              <input type="datetime-local" placeholder="Date" name="Date" ref={register({ required: true })} />
              {errors.Date && <div style={errorDivStyle}>champ requis</div>}
            </div>
            <div className="video">
              <p>Lien vidéo (facultatif)</p>
              <input type="text" placeholder="Video" name="Video" ref={register} />
            </div>
            <div className="level">
              <p>Niveau</p>
              <select name="Niveau" ref={register({ required: true })}>
                {errors.Niveau && <div style={errorDivStyle}>champ requis</div>}
                <option value="easy">easy</option>
                <option value="normal">normal</option>
                <option value="hard">hard</option>
                <option value="expert">expert</option>
              </select>
            </div>
          </div>
        </div>
        <div className="submit-lesson-form">
          <input type="submit" name="submitUpdate" />
        </div>
      </div>
    </form>

  );
};

export default UpdateLessonForm;
