import React from 'react';
import {
  Button, Header, Image, Modal,
} from 'semantic-ui-react';
import Moment from 'react-moment';
import UpdateLessonForm from './UpdateLessonForm';
// react Moment
import 'moment/locale/fr';
import background from '../../assets/img/Pattern_fond.png';
const contentStyle = {
  backgroundImage: `url(${background})`,

};


const UpdateLessonModal = ({ lesson }) => (
  <Modal trigger={<Button>Modifier votre cours</Button>}>
    <Modal.Header className="lesson-title" style={contentStyle}>Modifier votre cours</Modal.Header>
    <Modal.Content className="update-lesson-content" image>
      <Modal.Description>
        <Header>Cours prévu le <Moment format="D MMM YYYY HH:mm" withTitle>{` ${lesson.plannified}`}</Moment></Header>
        <UpdateLessonForm lesson={lesson} />
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default UpdateLessonModal;
