
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Icon, Header, Modal,
} from 'semantic-ui-react';
import { MESSAGE_POSTIF_FALSE } from '../../store/actions';
import MessagePositive from './MessagePositive';

// == component
import FormUpdateMail from './FormUpdateMail';
import background from '../../assets/img/Pattern_fond.png';

const contentStyle = {
  backgroundImage: `url(${background})`,

};

const UpdateMailModal = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({ type: MESSAGE_POSTIF_FALSE });
  };

  return (
    <Modal trigger={<a><Icon className="penUpdateMail" name="pencil" onClick={handleClick} /></a>} closeIcon>
      <Header style={contentStyle} icon="pencil" content="Modifier votre mail" />
      <MessagePositive />
      <Modal.Content className="mailModal">
        <FormUpdateMail />
      </Modal.Content>
    </Modal>
  );
};
export default UpdateMailModal;
