import React from 'react';


// == import component
import { Container, Segment, Card } from 'semantic-ui-react';
import ListTeachers from './teachersCard';


// == import semanthic
// == style
import './styles.scss';


const Teachers = () => (
  <div className="teachers">
    <h2>Liste de nos Professeurs
    </h2>
    <Segment>
      <Card.Group
        itemsPerRow={3}
        stackable
      >
        <ListTeachers />
      </Card.Group>
    </Segment>
  </div>
);


export default Teachers;
