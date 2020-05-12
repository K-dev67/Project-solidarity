import React from 'react';
import PropTypes from 'prop-types';

// react Moment
import Moment from 'react-moment';
import 'moment/locale/fr';

const RoomDescription = ({ lesson }) => (
  <div className="room--description">
    <span className="room-number"># Cockpit numero {lesson.id}</span>
    <h2 className="room-title">{lesson.title}</h2>
    <div className="room-created-date">Salon crée le : <Moment format="D MMM YYYY" withTitle>{lesson.created_at}</Moment>
    </div>
    <div className="room-level">niveau : {lesson.level}</div>
    <div className="room-description">description : {lesson.description}</div>
    <div className="room-plannified">le cours aura lieu le : <Moment format="D MMM YYYY HH:mm" withTitle>{` ${lesson.plannified}`}</Moment></div>
  </div>
);

RoomDescription.propTypes = {
};

export default RoomDescription;
