import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { Card, Icon, Image } from 'semantic-ui-react';
import { API_URL } from '../../utils/constante';
import { SET_TEACHERS } from '../../store/actions';
import Loading from '../Loading';
import store from '../../store';


const listTeachers = () => {
  const dispatch = useDispatch();
  // Après le premier rendu du composant
  // UseEffect va déclencher une requête pour obtenir
  // la liste des teachers
  useEffect(
    () => {
      axios
        .get(`${API_URL}/teacherList`)
        .then((res) => {
          dispatch({ type: SET_TEACHERS, payload: res.data });
          // const teachers = res.data;
        })
        .catch((error) => console.trace(error));
    },
    [],
  );

  const teachers = useSelector((state) => state.teachers);
  // const urlAvataree = 'https://robohash.org/';
  let listTeachersJSX = '';
  if (!teachers) {
    return <Loading />;
  }


  listTeachersJSX = teachers.map((teacher) => (
    <Card
      key={teacher.id}
    >
      <Image
        src={teacher.avatar}
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
