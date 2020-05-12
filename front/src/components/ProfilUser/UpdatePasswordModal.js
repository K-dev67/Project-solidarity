// == j'importe useState pour fermer mes modales..
// == pas besoin de blinder mon reducer
import React, { useState } from 'react';

// == component
import {
  Button, Header, Modal,
} from 'semantic-ui-react';
import FormUpdatePassword from './FormUpdatePassword';


const UpdatePasswordModal = () => (
  // je souhaite changer un boolean en fonction de l'ouverture ou la fermeture de la modale
  // eslint-disable-next-line react/jsx-boolean-value
  <Modal trigger={<Button>Changer votre mot de passe</Button>} closeIcon>
    <Header icon="pencil" content="Modifier votre mot de passe" />
    <Modal.Content>
      <FormUpdatePassword />
    </Modal.Content>
    {/* <Modal.Actions>
    <Button color="red">
      <Icon name="remove" /> No
    </Button>
    <Button color="green">
      <Icon name="checkmark" /> Yes
    </Button>
  </Modal.Actions> */}
    {/* <Icon name="pencil" size="large" corner="right" /> */}
  </Modal>
);


export default UpdatePasswordModal;
