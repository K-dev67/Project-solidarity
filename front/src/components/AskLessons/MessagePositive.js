import React from 'react';
import { useSelector } from 'react-redux';
import { Message } from 'semantic-ui-react';

const MessagePositive = () => {
  const { messagePositif } = useSelector((state) => state);
  return (
    <Message positive hidden={!messagePositif}>
      <Message.Header>Votre demande de cours a bien été ajoutée</Message.Header>
    </Message>
  );
};


export default MessagePositive;
