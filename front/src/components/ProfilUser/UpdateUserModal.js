// == j'importe useState pour fermer mes modales..
// == pas besoin de blinder mon reducer
import React, { useState } from 'react';

// == component
import {
  Button, Header, Icon, Modal,
} from 'semantic-ui-react';
import FormUpdateUser from './FormUpdateUser';


const ModalExampleCloseIcon = () => (
  // je souhaite changer un boolean en fonction de l'ouverture ou la fermeture de la modale
  // eslint-disable-next-line react/jsx-boolean-value
  <Modal trigger={<Button>Modifier votre profil</Button>} closeIcon>
    <Header icon="pencil" content="Modifier votre profil" />
    <Modal.Content>
      <FormUpdateUser />
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


export default ModalExampleCloseIcon;
