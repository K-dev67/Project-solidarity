import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Icon, Image } from 'semantic-ui-react';

const listTeachers = () => {
  const teachers = useSelector((state) => state.teachers);
  console.log('teachers', teachers);
  const listTeachersJSX = teachers.map((teacher) => (
    <Card>
      <Image src="/images/avatar/large/matthew.png" wrapped ui={false} />
      <Card.Content>
        <Card.Header>Matthew</Card.Header>
        <Card.Meta>
          <span className="date">Joined in 2015</span>
        </Card.Meta>
        <Card.Description>
          {teacher.nickname} {teacher.lastname} is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          22 Friends
        </a>
      </Card.Content>
    </Card>
  ));
  return (
    <div>{listTeachersJSX}</div>
  );
};


export default listTeachers;
