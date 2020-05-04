import React from 'react';

// == component
import {
  Button, Header, Image, Modal,
} from 'semantic-ui-react';
import AddLessonForm from './AddLessonForm';


const AddLessonModal = () => (
  <Modal trigger={<Button fluid>Proposer un cours</Button>}>
    <Modal.Header>Proposer un cours</Modal.Header>
    <Modal.Content>
      {/* <Image wrapped size="medium" src="/images/avatar/large/rachel.png" /> */}
      <Modal.Description>
        <Header>Default Profile Image</Header>
        <AddLessonForm />
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default AddLessonModal;
