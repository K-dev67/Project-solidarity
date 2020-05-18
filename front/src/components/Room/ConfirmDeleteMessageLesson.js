import React from 'react';
import { useSelector } from 'react-redux';
import { Message } from 'semantic-ui-react';

const ConfirmDeleteMessageLesson = () => {
  const { messagePositif } = useSelector((state) => state);

  console.log('message');
  return (
    <Message positive hidden={!messagePositif}>
      <Message.Header>Votre cours a bien été supprimé</Message.Header>
    </Message>
  );
};


export default ConfirmDeleteMessageLesson;
