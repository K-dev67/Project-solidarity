import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Button, Modal,
} from 'semantic-ui-react';
import { MESSAGE_POSTIF_FALSE } from '../../store/actions';

// == component
import AskLessonForm from './AskLessonForm';
import MessagePositive from './MessagePositive';
// == background
import background from '../../assets/img/Pattern_fond.png';

const AskLessonModal = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({ type: MESSAGE_POSTIF_FALSE });
  };
  const contentStyle = {
    backgroundImage: `url(${background})`,
  };
  return (
    <Modal trigger={<Button onClick={handleClick} fluid>Faire une demande de cours</Button>}>
      <Modal.Header className="update-lesson-header" style={contentStyle}>Faire une demande de cours</Modal.Header>
      <Modal.Content className="addAskModal">
        <MessagePositive />
        {/* <Image wrapped size="medium" src="/images/avatar/large/rachel.png" /> */}
        <Modal.Description>
          {/* <Header>Default Profile Image</Header> */}
          <AskLessonForm />
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default AskLessonModal;
