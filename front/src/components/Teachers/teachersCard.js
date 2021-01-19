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
  useEffect(
    () => {
      axios
        .get(`${API_URL}/teacherList`)
        .then((res) => {
          dispatch({ type: SET_TEACHERS, payload: res.data });
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
    <div
      className="teacher-div-border"
      key={teacher.id}
    >
      <Card>
        <Card.Content>
          <Card.Header>{teacher.nickname}</Card.Header>
          <Image
            src={teacher.avatar}
            wrapped
            ui={false}
          />
          <Card.Meta>
            <span className="date">Joined in 2015</span>
          </Card.Meta>
          <Card.Description>
            {teacher.firstname} {teacher.lastname} est un enseignant de la plate forme Solidarity.
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
    </div>
  ));

  return (
    teachers.length > 0 ? (<>{listTeachersJSX}</>) : <Loading />
  );
};


export default listTeachers;
