import React from 'react';

import { Segment, Card } from 'semantic-ui-react';


// == import component
import ListTeachers from './teachersCard';


// == import semanthic
// == style
import './styles.scss';


const Teachers = () => (
  <div className="teachers">
    <h2 className="title-teacher-list">Liste de nos Professeurs
    </h2>
    <Card.Group
      itemsPerRow={3}
      stackable
    >
      <ListTeachers />
    </Card.Group>
  </div>
);


export default Teachers;
