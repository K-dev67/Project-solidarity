import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

// == pour la validation de l'email
import EmailValidator from 'email-validator';

import {
  SYNC_PASSWORD,
  SYNC_MAIL,
  UPDATE_MAIL,
  DISCONNECT,
  RESET,
} from 'src/store/actions';

// == semantic form
import { Button, Form } from 'semantic-ui-react';


const FormUpdateMail = () => {
  const dispatch = useDispatch();
  const [errorMail, setErrorMail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const {
    password,
    mail,
  } = useSelector((state) => state);

  const errorsList = [];
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!EmailValidator.validate(mail)) {
      errorsList.push("L'email n'est pas un email correct");
      setErrorMail('L\'email n\'est pas un email correct');
    }
    if (!mail) {
      errorsList.push('Ce champ est requis');
      setErrorMail('Ce champ est requis');
    }
    if (!password) {
      errorsList.push('Ce champ est requis');
      setErrorPassword('Ce champ est requis');
    }
    if (errorsList.length === 0) {
      dispatch({ type: UPDATE_MAIL });
      dispatch({ type: RESET });
      dispatch({ type: DISCONNECT });
    }
  };

  return (
    <div className="signup-form">
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Input
          error={errorMail}
          type="mail"
          label="Mail"
          placeholder="Mail"
          name="newMail"
          onChange={(evt) => {
            setErrorMail('');
            dispatch({ type: SYNC_MAIL, payload: evt.target.value });
          }}
          value={mail}
        />
        <Form.Input
          error={errorPassword}
          type="password"
          label="Password"
          placeholder="Password"
          name="password"
          onChange={(evt) => {
            setErrorPassword('');
            dispatch({ type: SYNC_PASSWORD, payload: evt.target.value });
          }}
          value={password}
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

export default FormUpdateMail;
