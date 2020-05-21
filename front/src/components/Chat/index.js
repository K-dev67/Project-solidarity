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
// == auto scroll
import AutoScroll from '@brianmcallister/react-auto-scroll';


// == style
import './styles.scss';


const Chat = ({ lessonId }) => {
  let key = 1;
  const dispatch = useDispatch();
  // useEffect(getMessages(lessonId), []);
  const [hidden, setHidden] = useState(true);
  const currentMessage = useSelector((state) => state.message);
  const userId = useSelector((state) => state.userId);
  const { messages } = useSelector((state) => state);
  const messageJSX = messages.map((message) => {
    console.log('bjr');
    let classAuthor = '';
    if (message.nickname === 'Robot') {
      classAuthor = 'chat-message robot';
    }
    else if (message.author_id === userId) {
      classAuthor = 'chat-message owner';
    }
    else classAuthor = 'chat-message';
    return (
      <li
        className={classAuthor}
        key={key++}
      >
        <strong className="message-author">{message.nickname}</strong>
        <em className="date-message"><Moment format="D MMM YYYY HH:mm" withTitle>{message.created_at}</Moment></em>
        <p className="message-content"><Formatizer>{message.content}</Formatizer></p>
      </li>
    );
  });

  return (
    <div
      className="container-chat-main"
      key={lessonId}
    >
      {/* <Picker style={styleEmoji} onChange={(data) => console.log(data)} /> */}
      <ul className="chat-all-messages">
        <AutoScroll className="auto-first-div">
          {messageJSX}
        </AutoScroll>
      </ul>
      <div className="text-chat">
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

            {/*<div className="icone-smiley">
              <Icon
                name="plus square outline"
                className="smiley"
                onClick={() => {
                  setHidden(false);
                }}
              />

            </div>*/}
            {/* </button> */}
            {/* </div> */}
            {/* <Picker onChange={(data) => console.log(data)} /> */}
          </div>
        </form>
      </div>
    </div>
  );
};


export default Chat;
