import React from 'react';
import {
  Modal, Icon,
} from 'semantic-ui-react';
// import Moment from 'react-moment';
// import UpdateLessonForm from './UpdateLessonForm';
// react Moment
// import 'moment/locale/fr';
import background from '../../assets/img/Pattern_fond.png';
import UpdateAskLessonForm from './UpdateAskLessonForm';

const contentStyle = {
  backgroundImage: `url(${background})`,

};


const UpdateAskLessonModal = ({ askLesson }) => (
  <Modal trigger={<Icon name="pencil" style={{ cursor: 'pointer' }} />}>
    <Modal.Header className="update-lesson-header" style={contentStyle}>Modifier votre demande de cours</Modal.Header>
    <Modal.Content className="update-lesson-content" image>
      <Modal.Description>
        {/* <Header>Cours prévu le <Moment format="D MMM YYYY HH:mm" withTitle>{` ${lesson.plannified}`}</Moment></Header> */}
        {/* <UpdateLessonForm lesson={lesson} /> */}
        <UpdateAskLessonForm askLesson={askLesson} />
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default UpdateAskLessonModal;
