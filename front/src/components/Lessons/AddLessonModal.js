import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Button, Header, Image, Modal,
} from 'semantic-ui-react';
import { MESSAGE_POSTIF_FALSE } from '../../store/actions';

// == component
import AddLessonForm from './AddLessonForm';
import MessagePositive from './MessagePositive';
// == function getLessonFromBdd
import background from '../../assets/img/Pattern_fond.png';

const AddLessonModal = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({ type: MESSAGE_POSTIF_FALSE });
  };
  const contentStyle = {
    backgroundImage: `url(${background})`,

  };
  return (
    <Modal trigger={<Button onClick={handleClick} fluid>Proposer un cours</Button>}>
      <Modal.Header style={contentStyle}>Proposer un cours</Modal.Header>
      <Modal.Content className="lessonContent">
        <MessagePositive />
        {/* <Image wrapped size="medium" src="/images/avatar/large/rachel.png" /> */}
        <Modal.Description>
          {/* <Header>Default Profile Image</Header> */}
          <AddLessonForm />
        </Modal.Description>
      </Modal.Content>
    </Modal>

  );
};


export default AddLessonModal;
