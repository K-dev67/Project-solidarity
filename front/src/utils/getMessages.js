import axios from 'axios';
import store from '../store/index';

import { API_URL } from './constante';

// == actions
import { SET_MESSAGES } from '../store/actions';

const messagesRequest = `${API_URL}/messages/`;
// + lessonId, lessonId
const getMessages = (lessonId) => {
  const promise = axios.get(
    messagesRequest + lessonId,
  );
  promise.then((res) => {
    const messages = res.data;
    console.log('messagesInAXIOSSSSS', messages);
    store.dispatch({ type: SET_MESSAGES, payload: messages });
  });
};

export default getMessages;
