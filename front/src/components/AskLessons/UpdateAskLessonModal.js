import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Modal, Icon,
} from 'semantic-ui-react';

import { MESSAGE_POSTIF_FALSE } from '../../store/actions';

import background from '../../assets/img/Pattern_fond.png';
import UpdateAskLessonForm from './UpdateAskLessonForm';
import MessagePositive from './MessagePositive';

const contentStyle = {
  backgroundImage: `url(${background})`,
};


const UpdateAskLessonModal = ({ askLesson }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({ type: MESSAGE_POSTIF_FALSE });
  };
  return (
    <Modal trigger={<Icon name="pencil" onClick={handleClick} style={{ cursor: 'pointer' }} />}>
      <Modal.Header className="ask-title" style={contentStyle}>Modifier votre demande de cours</Modal.Header>
      <Modal.Content className="addAskModal" image>
        <MessagePositive />
        <Modal.Description>
          <UpdateAskLessonForm askLesson={askLesson} />
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default UpdateAskLessonModal;
