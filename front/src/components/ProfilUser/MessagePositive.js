import React from 'react';
import { useSelector } from 'react-redux';
import { Message } from 'semantic-ui-react';

const MessagePositive = () => {
  const { messagePositif } = useSelector((state) => state);

  console.log('message');
  return (
    <Message positive hidden={!messagePositif}>
      <Message.Header>Votre modification a été enregistré</Message.Header>
      {/* <p>
          Go to your <b>special offers</b> page to see now.
        </p> */}
    </Message>
  );
};


export default MessagePositive;
