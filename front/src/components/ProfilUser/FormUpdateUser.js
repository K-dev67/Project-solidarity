import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

// == import actions
import {
  SYNC_USERNAME,
  SYNC_FIRSTNAME,
  SYNC_LASTNAME,
  UPDATE_USER,
  // DISCONNECT,
  // RESET,
} from 'src/store/actions';

// == semantic form
import { Button, Form } from 'semantic-ui-react';

// == style
import './styles.scss';

const FormUpdateUser = () => {
  const dispatch = useDispatch();
  const [errorUsername, setErrorUsername] = useState('');
  const [errorFirstname, setErrorFirstname] = useState('');
  const [errorLastname, setErrorLastname] = useState('');
  // == reducer
  const {
    username,
    firstname,
    lastname,
  } = useSelector((state) => state);

  const errorsList = [];
  // == handleSubmit ---------------
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) {
      errorsList.push('Le username ne peut pas être vide');
      setErrorUsername('Le pseudo ne peut pas être vide');
    }
    if (!firstname) {
      errorsList.push('Le prénom ne peut pas être vide');
      setErrorFirstname('Le Prénom ne peut pas être vide');
    }
    if (!lastname) {
      errorsList.push('Le nom ne peut pas être vide');
      setErrorLastname('Le Nom de famille ne peut pas être vide');
    }
    // console.log('errorsList', errorsList);
    if (errorsList.length === 0) {
      dispatch({ type: UPDATE_USER });
      // dispatch({ type: RESET });
      // dispatch({ type: DISCONNECT });
    }
  };
  // == Fin handleSubmit ---------------

  return (
    <div className="signup-form">
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Input
          error={(errorUsername) || null}
          type="text"
          icon="user"
          iconPosition="left"
      // fluid
          label="Username"
          placeholder="Username"
          name="username"
          onChange={(evt) => {
            setErrorUsername('');
            dispatch({ type: SYNC_USERNAME, payload: evt.target.value });
          }}
          value={username}
        />
        <Form.Input
          error={(errorFirstname) || null}
          type="text"
          icon="user"
          iconPosition="left"
      // fluid
          label="First name"
          placeholder="First name"
          name="firstname"
          onChange={(evt) => {
            setErrorFirstname('');
            dispatch({ type: SYNC_FIRSTNAME, payload: evt.target.value });
          }}
          value={firstname}
        />
        <Form.Input
          error={(errorLastname) || null}
      // fluid
          icon="user"
          iconPosition="left"
          type="text"
          label="Last name"
          placeholder="Last name"
          name="lastname"
          onChange={(evt) => {
            setErrorLastname('');
            dispatch({ type: SYNC_LASTNAME, payload: evt.target.value });
          }}
          value={lastname}
        />
        <Button
          type="submit"
        >
          Valider
        </Button>
      </Form>
    </div>
  );
};

export default FormUpdateUser;
