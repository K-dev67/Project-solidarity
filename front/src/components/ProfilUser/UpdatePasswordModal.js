// == j'importe useState pour fermer mes modales..
// == pas besoin de blinder mon reducer
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button, Header, Modal,
} from 'semantic-ui-react';
import { MESSAGE_POSTIF_FALSE } from '../../store/actions';
import MessagePositive from './MessagePositive';

// == component
import FormUpdatePassword from './FormUpdatePassword';


const UpdatePasswordModal = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({ type: MESSAGE_POSTIF_FALSE });
  };

  return (
    <Modal trigger={<Button onClick={handleClick}>Changer votre mot de passe</Button>} closeIcon>
      <Header icon="pencil" content="Modifier votre mot de passe" />
      <MessagePositive />
      <Modal.Content>
        <FormUpdatePassword />
      </Modal.Content>
    </Modal>
  );
};
export default UpdatePasswordModal;
