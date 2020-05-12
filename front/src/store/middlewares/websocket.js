import moment from 'moment';


import {
  ENTER_CHAT,
  MESSAGE_RECEIVED,
  SEND_MESSAGE,
  LEAVE_ROOM,
  SET_USERS_IN_ROOM,
} from '../actions';
import { API_URL } from '../../utils/constante';

let socket;

export default (store) => (next) => (action) => {
  switch (action.type) {
    case ENTER_CHAT: {
      const user = JSON.parse(sessionStorage.getItem('user'));
      const lessonId = action.payload;
      socket = window.io(`${API_URL}`);
      // On se prépare le plus tôt possible à réceptionner des messages
      // Ici, on va traiter des messages de type 'send_message' =>
      // on va vouloir afficher le-dit message dans la liste des msg.
      //! test
      socket.emit('joinRoom', {
        username: user,
        room: lessonId,
      });
      //!--
      socket.on('message', (message) => {
        console.log('message reçu :', message);
        store.dispatch({ type: MESSAGE_RECEIVED, message });
      });

      socket.on('roomUsers', ({ room, users }) => {
        console.log('room', room);
        console.log('users', users);
        store.dispatch({ type: SET_USERS_IN_ROOM, payload: users });
      });

      console.log(socket);
      next(action);
      return;
    }

    case SEND_MESSAGE: {
      console.log('Envoi du message au serveur central');
      // const { user } = store.getState();
      const { message } = store.getState();
      console.log('message', message);
      socket.emit('chatMessage', {
        // authorId: userId,
        // firstname: user.firstname,
        content: message,
        // message,
        // created_at: moment(),
      });
      // next(action);
      return;
    }
    case LEAVE_ROOM: {
      console.log('leave_room');
      socket.close();
      next(action);
      return;
    }

    default: {
      next(action);
    }
  }
};
