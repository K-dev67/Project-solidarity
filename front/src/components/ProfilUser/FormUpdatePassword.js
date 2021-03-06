import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

// == pour gérer ma "route" au submit du updateForm
// import { useHistory } from 'react-router';

import {
  SYNC_OLD_PASSWORD,
  SYNC_PASSWORD,
  SYNC_PASSWORD_CONFIRMATION,
  UPDATE_PASSWORD,
  SYNC_ERROR_PASSWORD,
  SYNC_ERROR_PASSWORD_CONFIRMATION,

  // login,
  DISCONNECT,
  RESET,
} from 'src/store/actions';

// == import pour la valid du mdp
import passwordValidator from 'password-validator'; // Must have special caractère
//! -----------------

// == semantic form
import { Button, Form } from 'semantic-ui-react';

//! password validator
// Create a schema
const schema = new passwordValidator();
// Add properties to it
schema
  .is().min(8) // Minimum length 8
  .is().max(100) // Maximum length 100
  .has()
  .uppercase() // Must have uppercase letters
  .has()
  .lowercase() // Must have lowercase letters
  .has()
  .digits() // Must have digits
  .has()
  .not()
  .spaces() // Should not have spaces
  .has()
  .symbols();


const FormUpdatePassword = () => {
  const dispatch = useDispatch();
  // const history = useHistory();
  const [errorOldPassword, setErrorOldPassword] = useState('');
  const {
    password,
    passwordConfirmation,
    oldPassword,
    errorPassword,
    errorPasswordConfirmation,
  } = useSelector((state) => state);

  const errorsList = [];
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!oldPassword) {
      errorsList.push(
        'Le mot de passe ne peut pas être vide',
      );
      setErrorOldPassword('Le mot de passe ne peut pas être vide');
    }
    if (!schema.validate(password)) {
      errorsList.push(
        'Le mot de passe doit contenir un minimum de 8 caractères, une majuscule, une minuscule et un caractère spécial',
      );
      dispatch({ type: SYNC_ERROR_PASSWORD, errorPassword: 'Le mot de passe doit contenir un minimum de 8 caractères, une majuscule, une minuscule et un caractère spécial' });
    }
    // - mot de passe = confirmation
    if (password !== passwordConfirmation) {
      errorsList.push(
        'Le mot de passe et la confirmation ne correspondent pas',
      );
      dispatch({ type: SYNC_ERROR_PASSWORD_CONFIRMATION, errorPasswordConfirmation: 'Le mot de passe et la confirmation ne correspondent pas' });
    }
    // console.log('errorsList', errorsList);
    if (errorsList.length === 0) {
      dispatch({ type: UPDATE_PASSWORD });
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
          error={(errorOldPassword) || null}
          type="password"
          label="Old Password"
          placeholder="Old Password"
          name="oldPassword"
          onChange={(evt) => {
            dispatch({ type: SYNC_OLD_PASSWORD, payload: evt.target.value });
          }}
          value={oldPassword}
        />
        <Form.Input
          error={(errorPassword) || null}
          type="password"
          label="New Password"
          placeholder="New Password"
          name="password"
          onChange={(evt) => {
            dispatch({ type: SYNC_PASSWORD, payload: evt.target.value });
          }}
          value={password}
        />
        <Form.Input
          error={(errorPasswordConfirmation) || null}
          type="password"
          label="Password confirmation"
          placeholder="Password confirmation"
          name="passwordConfirmation"
          onChange={(evt) => {
            dispatch({ type: SYNC_PASSWORD_CONFIRMATION, payload: evt.target.value });
          }}
          value={passwordConfirmation}
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

export default FormUpdatePassword;
