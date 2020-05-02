import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Icon, Image } from 'semantic-ui-react';


const listTeachers = () => {
  const teachers = useSelector((state) => state.teachers);
  const urlAvataree = 'https://robohash.org/';

  const listTeachersJSX = teachers.map((teacher) => (
    <Card
      key={teacher.id}
    >
      <Image
        src={urlAvataree + teacher.nickname}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{teacher.nickname}</Card.Header>
        <Card.Meta>
          <span className="date">Joined in 2015</span>
        </Card.Meta>
        <Card.Description>
          {teacher.firstname} {teacher.lastname} is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        {/* <a>
          <Icon name="user" />
          22 Friends
        </a> */}
        {teacher.email}
      </Card.Content>
    </Card>
  ));
  return (
    <>{listTeachersJSX}</>
  );
};


export default listTeachers;
