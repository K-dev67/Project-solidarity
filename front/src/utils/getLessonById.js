import axios from 'axios';
import store from '../store/index';

import { API_URL } from './constante';

// == actions
import { SET_LESSON_BY_ID } from '../store/actions';
// == pour recup les categories de mes leçons

const lessonIdRequest = `${API_URL}/lessons/`;

const getLessonById = (lessonId) => {
  const promise = axios.get(
    lessonIdRequest + lessonId,
  );
  promise.then((res) => {
    store.dispatch({ type: SET_LESSON_BY_ID, payload: res.data });
  })
    .catch((error) => console.trace(error));
};

export default getLessonById;
