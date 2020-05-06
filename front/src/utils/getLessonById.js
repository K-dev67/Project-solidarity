import axios from 'axios';
import store from '../store/index';

import { API_URL } from './constante';

// == actions
import { SET_LESSON_BY_ID } from '../store/actions';

const lessonIdRequest = `${API_URL}/lesson/`;

const getLessonById = (lessonId) => {
  const promise = axios.get(
    lessonIdRequest + lessonId,
  );
  promise.then((res) => {
    console.log('infoLessonById', res.data);
    store.dispatch({ type: SET_LESSON_BY_ID, payload: res.data });
  });
};

export default getLessonById;
