import axios from 'axios';
import store from '../store/index';

import { API_URL } from './constante';

// == actions
import { SET_LESSONS } from '../store/actions';

const lessonsRequest = `${API_URL}/lessonList`;

const getTeachers = (url = lessonsRequest) => {
  const promise = axios.get(
    url,
  );
  promise.then((res) => {
    const lessons = res.data;
    store.dispatch({ type: SET_LESSONS, payload: lessons });
  });
};

export default getTeachers;
