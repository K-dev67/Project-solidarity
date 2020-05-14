// == j'importe useState pour fermer mes modales..
// == pas besoin de blinder mon reducer
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  Button, Header, Icon, Modal,
} from 'semantic-ui-react';
import { MESSAGE_POSTIF_FALSE } from '../../store/actions';

// == component
import FormUpdateUser from './FormUpdateUser';
import MessagePositive from './MessagePositive';


const ModalExampleCloseIcon = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({ type: MESSAGE_POSTIF_FALSE });
  };
  // je souhaite changer un boolean en fonction de l'ouverture ou la fermeture de la modale
  // eslint-disable-next-line react/jsx-boolean-value
  return (
    <Modal trigger={<Button onClick={handleClick}>Modifier votre profil</Button>} closeIcon>
      <Header icon="pencil" content="Modifier votre profil" />
      <MessagePositive />
      <Modal.Content>
        <FormUpdateUser />
      </Modal.Content>
    </Modal>
  );
};


export default ModalExampleCloseIcon;
