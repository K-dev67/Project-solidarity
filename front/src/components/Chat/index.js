import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// == moment react JS
import Moment from 'moment';
import 'moment/locale/fr';


import { sendMessage, syncMessage } from 'src/store/actions';

// == utils/axios
import getMessages from '../../utils/getMessages';

// == style
import './styles.scss';


const Chat = () => {
  const dispatch = useDispatch();

  const currentMessage = useSelector((state) => state.message);
  const { messages, user } = useSelector((state) => state);
  // useEffect(getMessages, []);
  if (messages === undefined) return null;
  const messageJSX = messages.map((message) => <li><Moment locale="fr" fromNow ago>{message.created_at}</Moment>  {message.firstname} : {message.content}</li>);

  return (
    <div className="chat-main">
      <p className="chat-nickname">{user.firstname}</p>
      <ul className="chat-messages">{messageJSX}</ul>
      <form
        className="chat-send-message"
        onSubmit={(evt) => {
          evt.preventDefault();
          dispatch(sendMessage());
        }}
      >
        <input
          type="text"
          className="chat-send-message_input"
          placeholder="Votre message"
          value={currentMessage}
          onChange={(evt) => {
            dispatch(syncMessage(evt.target.value));
          }}
        />
        <button
          type="submit"
          className="chat-send-message_button"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};


export default Chat;
