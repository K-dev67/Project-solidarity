import {
  ENTER_CHAT,

} from '../actions';
import { API_URL } from '../../utils/constante';

let socket;

export default (store) => (next) => (action) => {
  console.log('socketMW');
  switch (action.type) {
    case ENTER_CHAT: {
      console.log('enter CHAT');
      socket = window.io(`${API_URL}`);
      console.log(socket);
      next(action);
      return;
    }
    default: {
      next(action);
    }
  }
};
