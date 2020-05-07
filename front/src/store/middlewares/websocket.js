import {
  ENTER_CHAT,
  MESSAGE_RECEIVED,
  SEND_MESSAGE,

} from '../actions';
import { API_URL } from '../../utils/constante';

let socket;

export default (store) => (next) => (action) => {
  console.log('socketMW');
  switch (action.type) {
    case ENTER_CHAT: {
      console.log('enter CHAT');
      socket = window.io(`${API_URL}`);

      // On se prépare le plus tôt possible à réceptionner des messages
      // Ici, on va traiter des messages de type 'send_message' =>
      // on va vouloir afficher le-dit message dans la liste des msg.
      socket.on('send_message', (message) => {
        console.log('message reçu :', message);
        store.dispatch({ type: MESSAGE_RECEIVED, message });
      });

      console.log(socket);
      next(action);
      return;
    }

    case SEND_MESSAGE: {
      console.log('Envoi du message au serveur central');
      const { user } = store.getState();
      const { userId, message } = store.getState();

      socket.emit('send_message', {
        authorId: userId,
        firstname: user.firstname,
        content: message,
        //   timestamp: moment().unix(),
      });
      next(action);
      return;
    }

    default: {
      next(action);
    }
  }
};
