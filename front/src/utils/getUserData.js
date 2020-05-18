import axios from 'axios';
import store from '../store/index';

import { API_URL } from './constante';

// == actions
import { SET_USER_DATA } from '../store/actions';
// == pour recup les categories de mes leçons

const profilUrl = `${API_URL}/profile/`;

const getLessonById = (userId) => {
  const promise = axios.get(
    profilUrl + userId,
  );
  promise.then((res) => {
    store.dispatch({ type: SET_USER_DATA, payload: res.data });
  })
    .catch((error) => console.trace(error));
};

export default getLessonById;
