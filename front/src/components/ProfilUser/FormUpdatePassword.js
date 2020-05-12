import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

// == pour gérer ma "route" au submit du form
import { useHistory } from 'react-router';

import {
  SYNC_OLD_PASSWORD,
  SYNC_PASSWORD,
  SYNC_PASSWORD_CONFIRMATION,
  UPDATE_PASSWORD,
  SYNC_ERROR_PASSWORD,
  SYNC_ERROR_PASSWORD_CONFIRMATION,
} from 'src/store/actions';

// == semantic form
import { Button, Form } from 'semantic-ui-react';

const FormUpdatePassword = () => {
  const dispatch = useDispatch();

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
    if (password.length < 8) {
      errorsList.push(
        'Le mot de passe doit contenir un minimum de 8 caractères',
      );
      dispatch({ type: SYNC_ERROR_PASSWORD, errorPassword: 'Le mot de passe doit contenir un minimum de 8 caractères' });
    }
    // - mot de passe = confirmation
    if (password !== passwordConfirmation) {
      errorsList.push(
        'Le mot de passe et la confirmation ne correspondent pas',
      );
      dispatch({ type: SYNC_ERROR_PASSWORD_CONFIRMATION, errorPasswordConfirmation: 'Le mot de passe et la confirmation ne correspondent pas' });
    }
    console.log('errorsList', errorsList);
    if (errorsList.length === 0) {
      //   dispatch(signup(history));
      dispatch({ type: UPDATE_PASSWORD });
    }
  };

  return (
    <div className="signup-form">
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Input
        //   error={errorPassword}
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
          error={errorPassword}
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
          error={errorPasswordConfirmation}
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
