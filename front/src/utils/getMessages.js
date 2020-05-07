import axios from 'axios';
import store from '../store/index';

import { API_URL } from './constante';

// == actions
import { SET_MESSAGES } from '../store/actions';

const messagesRequest = `${API_URL}/messages`;

const getLessons = (url = messagesRequest) => {
  const promise = axios.get(
    url,
  );
  promise.then((res) => {
    const messages = res.data;
    store.dispatch({ type: SET_MESSAGES, payload: messages });
  });
};

export default getLessons;
