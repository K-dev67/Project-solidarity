import React from 'react';
import {
  Button, Header, Image, Modal,
} from 'semantic-ui-react';
import UpdateLessonForm from './UpdateLessonForm';

const UpdateLessonModal = () => (
  <Modal trigger={<Button>Modifier votre cours</Button>}>
    <Modal.Header>Modifier votre cours</Modal.Header>
    <Modal.Content image>

      <Modal.Description>
        <Header>Default Profile Image</Header>
        <UpdateLessonForm />
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default UpdateLessonModal;
