
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Icon, Header, Modal,
} from 'semantic-ui-react';
import { MESSAGE_POSTIF_FALSE } from '../../store/actions';
import MessagePositive from './MessagePositive';

// == component
import FormUpdateMail from './FormUpdateMail';


const UpdateMailModal = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({ type: MESSAGE_POSTIF_FALSE });
  };

  return (
    <Modal trigger={<Icon className="penUpdateMail" name="pencil" onClick={handleClick} />} closeIcon>
      <Header icon="pencil" content="Modifier votre mail" />
      <MessagePositive />
      <Modal.Content>
        <FormUpdateMail />
      </Modal.Content>
    </Modal>
  );
};
export default UpdateMailModal;
