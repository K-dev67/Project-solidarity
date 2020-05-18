import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// react Moment
import 'moment/locale/fr';
import Moment from 'react-moment';

import { sendMessage, syncMessage } from 'src/store/actions';
// import Loading from '../Loading';
import { Icon } from 'semantic-ui-react';

// == formatizer formater le texte
import { Formatizer, Picker } from 'formatizer';
// import getMessages from '../../utils/getMessages';

// == style
import './styles.scss';


const Chat = ({ lessonId }) => {
  const dispatch = useDispatch();
  // useEffect(getMessages(lessonId), []);
  const [hidden, setHidden] = useState(true);
  const currentMessage = useSelector((state) => state.message);
  const { messages } = useSelector((state) => state);
  const messageJSX = messages.map((message) => (
    <li className="chat-message">
      <strong className="message-author">{message.nickname}</strong>
      <em className="date-message"><Moment format="D MMM YYYY HH:mm" withTitle>{message.created_at}</Moment></em>
      <p className="message-content"><Formatizer>{message.content}</Formatizer></p>
    </li>
  ));

  return (
    <div
      className="container-chat-main"
      key={lessonId}
    >
      {/* <Picker style={styleEmoji} onChange={(data) => console.log(data)} /> */}

      <ul className="chat-all-messages">{messageJSX}</ul>
      <div className="">
        <form
          className="chat-send-message"
          onSubmit={(evt) => {
            evt.preventDefault();
            dispatch(sendMessage());
          }}
        >
          <div className="container-input-submit">
            <input
              type="text"
              className="chat-send-message_input"
              placeholder="Votre message"
              value={currentMessage}
              onChange={(evt) => {
                dispatch(syncMessage(evt.target.value));
              }}
            />

            <div className="icone-smiley">
              <Icon
                name="plus square outline"
                className="smiley"
                onClick={() => {
                  setHidden(false);
                }}
              />

            </div>

            {/* </button> */}
            {/* </div> */}
            {/* <Picker onChange={(data) => console.log(data)} />; */}
          </div>
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

// || messages === null

//* à faire -----
//* try to add scroll down
// useEffect(() => {
//   window.scrollTo(1000, 1000);
// }, []);

//* className for author
// const classNameAuthor = 'chat-message';
// if (message.author_id === user.id) classNameAuthor = 'chat-message author';

//* try to add loader
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

// document.getElementsByClassName('container-chat-main').scrollTop = document.getElementsByClassName('container-chat-main').scrollHeight;
// console.log('objectCHAT', document.getElementsByClassName('container-chat-main'));
