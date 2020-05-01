import React from 'react';

// == component
import {
  Button, Header, Icon, Modal,
} from 'semantic-ui-react';
import FormUpdateUser from './FormUpdateUser';


const ModalExampleCloseIcon = () => (
  <Modal trigger={<Button><Icon name="pencil" size="large" corner="right" /></Button>} closeIcon>
    <Header icon="pencil" content="Modifier votre profil" />
    <Modal.Content>
      <FormUpdateUser />
    </Modal.Content>
    <Modal.Actions>
      <Button color="red">
        <Icon name="remove" /> No
      </Button>
      <Button color="green">
        <Icon name="checkmark" /> Yes
      </Button>
    </Modal.Actions>
  </Modal>
);

export default ModalExampleCloseIcon;
