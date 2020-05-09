import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// react Moment
import 'moment/locale/fr';
import Moment from 'react-moment';

import { sendMessage, syncMessage } from 'src/store/actions';
import Loading from '../Loading';


// == utils/axios
// import getMessages from '../../utils/getMessages';

// == style
import './styles.scss';


const Chat = ({ lessonId }) => {
  console.log('lessonId In Chat', lessonId);
  // getMessages(lessonId);
  // scroll down non ok
  document.getElementsByClassName('container-chat-main').scrollTop = document.getElementsByClassName('container-chat-main').scrollHeight;
  // console.log('objectCHAT', document.getElementsByClassName('container-chat-main'));
  const dispatch = useDispatch();
  // useEffect(getMessages, []);
  useEffect(() => {
    window.scrollTo(1000, 1000);
  }, []);
  const currentMessage = useSelector((state) => state.message);
  const { messages, user } = useSelector((state) => state);

  // console.log('messages', messages);
  // if (messages === undefined || messages === null) {
  //   return null;
  // } if (messages === {}) {
  //   return null;
  // }
  // if (!messages) {
  //   return <Loading />;
  // }
  // const messageJSX = () => {
  const messageJSX = messages.map((message) => (
    <li className="chat-message">
      <strong className="message-author">{message.nickname}</strong>
      <em className="date-message"><Moment format="D MMM YYYY HH:mm" withTitle>{message.created_at}</Moment></em>
      <p className="message-content">{message.content}</p>
    </li>
  ));


  // };


  // useEffect(messageJSX, [messages]);
  // messageJSX();

  return (
    <div className="container-chat-main">
      <ul className="chat-all-messages">{messageJSX}</ul>
      <div className="container-input-submit">
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
    </div>
  );
};


export default Chat;

// const messageJSX = messages.map((message) => (
//   <li className="">
//     <strong className="message-author">{message.nickname}</strong>
//     <em className="date-message"><Moment format="D MMM YYYY HH:mm" withTitle>{message.created_at}</Moment></em>
//     <p className="message-content">{message.content}</p>
//   </li>
// ));

// messageJSX();
// useEffect(messageJSX, [messages]);
// console.log('messages', messages.messageInfo);
// const messageRoom = messages.messageInfo;
// const classNameAuthor = 'chat-message';
// if (message.author_id === user.id) classNameAuthor = 'chat-message author';
// || messages === null
