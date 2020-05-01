import axios from 'axios';
import store from '../store/index';

import { API_URL } from './constante';

// == actions
import { SET_TEACHERS } from '../store/actions';

const teachersRequest = `${API_URL}/teacherList`;

const getTeachers = (url = teachersRequest) => {
  const promise = axios.get(
    url,
  );
  promise.then((res) => {
    const teachers = res.data;
    store.dispatch({ type: SET_TEACHERS, payload: teachers });
  });
};

export default getTeachers;
