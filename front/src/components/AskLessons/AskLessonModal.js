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
    <Modal trigger={<Button className="btn-ask-lesson" onClick={handleClick} fluid>Faire une demande de cours</Button>}>
      <Modal.Header className="ask-title" style={contentStyle}>Faire une demande de cours</Modal.Header>
      <Modal.Content className="addAskModal">
        <MessagePositive />
        <Modal.Description>
          <AskLessonForm />
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default AskLessonModal;
