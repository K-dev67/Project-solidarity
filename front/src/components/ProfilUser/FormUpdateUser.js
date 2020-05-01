import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

// == pour gérer ma "route" au submit du form
import { useHistory } from 'react-router';

// == pour la validation de l'email
import EmailValidator from 'email-validator';

// == import actions
import {
  SYNC_USERNAME,
  SYNC_FIRSTNAME,
  SYNC_LASTNAME,
  SYNC_MAIL,
  SYNC_PASSWORD,
  SYNC_PASSWORD_CONFIRMATION,
  UPDATE_USER,
} from 'src/store/actions';


import { Button, Form } from 'semantic-ui-react';
// == utils request bdd
import updateProfilUser from '../../utils/updateProfilUser';

// == semantic form

// == style
import './styles.scss';

const FormUpdateUser = () => {
  const dispatch = useDispatch();
  // == reducer
  const {
    username,
    firstname,
    lastname,
    mail,
    password,
    passwordConfirmation,
    user,
  } = useSelector((state) => state);

  console.log('user', user);
  // == history
  //   const history = useHistory();
  //! == traitement des erreurs en front
  const errorsList = [];
  // == handleSubmit ---------------
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('je submit');
    if (!username) {
      errorsList.push('Le username ne peut pas être vide');
      // dispatch({ type: SYNC_ERROR_FIRSTNAME, errorFirstname: 'Please enter your first name' });
    }
    if (!firstname) {
      errorsList.push('Le prénom ne peut pas être vide');
      // dispatch({ type: SYNC_ERROR_FIRSTNAME, errorFirstname: 'Please enter your first name' });
    }
    if (!lastname) {
      errorsList.push('Le nom ne peut pas être vide');
      // dispatch({ type: SYNC_ERROR_LASTNAME, errorLastname: 'Please enter your last name' });
    }
    // - adresse email au bon format
    if (!EmailValidator.validate(mail)) {
      errorsList.push("L'email n'est pas un email correct");
      // dispatch({ type: SYNC_ERROR_MAIL, errorMail: 'The email adress is invalid' });
    }
    // - longueur minimum du mot de passe (8 caractère minimum !)
    if (password.length < 8) {
      errorsList.push(
        'Le mot de passe doit contenir un minimum de 8 caractères',
      );
      // dispatch({ type: SYNC_ERROR_PASSWORD, errorPassword: 'Le mot de passe doit contenir un minimum de 8 caractères' });
    }
    // // - mot de passe = confirmation
    if (password !== passwordConfirmation) {
      errorsList.push(
        'Le mot de passe et la confirmation ne correspondent pas',
      );
      // dispatch({ type: SYNC_ERROR_PASSWORD_CONFIRMATION, errorPasswordConfirmation: 'Le mot de passe et la confirmation ne correspondent pas' });
    }
    console.log('errorsList', errorsList);
    if (errorsList.length === 0) {
    //   dispatch(signup(history));
      dispatch({ type: UPDATE_USER });
    }
  };
  // == Fin handleSubmit ---------------

  return (
    <div className="signup-form">
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Input
      // error={errorFirstname}
          type="text"
          icon="user"
          iconPosition="left"
      // fluid
          label="Username"
          placeholder="Username"
          name="username"
          onChange={(evt) => {
            dispatch({ type: SYNC_USERNAME, payload: evt.target.value });
          }}
          value={username}
        />
        <Form.Input
      // error={errorFirstname}
          type="text"
          icon="user"
          iconPosition="left"
      // fluid
          label="First name"
          placeholder="First name"
          name="firstname"
          onChange={(evt) => {
            dispatch({ type: SYNC_FIRSTNAME, payload: evt.target.value });
          }}
          value={firstname}
        />
        <Form.Input
      // error={errorLastname}
      // fluid
          icon="user"
          iconPosition="left"
          type="text"
          label="Last name"
          placeholder="Last name"
          name="lastname"
          onChange={(evt) => {
            dispatch({ type: SYNC_LASTNAME, payload: evt.target.value });
          }}
          value={lastname}
        />
        <Form.Input
      // error={errorMail}
      // fluid
          type="mail"
          label="Mail"
          placeholder="Mail"
          name="mail"
          onChange={(evt) => {
            dispatch({ type: SYNC_MAIL, payload: evt.target.value });
          }}
          value={mail}
        />
        <Form.Input
      // error={errorPassword}
      // fluid
          type="password"
          label="Password"
          placeholder="Password"
          name="password"
          onChange={(evt) => {
            dispatch({ type: SYNC_PASSWORD, payload: evt.target.value });
          }}
          value={password}
        />
        <Form.Input
      // error={errorPasswordConfirmation}
      // fluid
          type="password"
          label="Password confirmation"
          placeholder="Password confirmation"
          name="passwordConfirmation"
          onChange={(evt) => {
            dispatch({ type: SYNC_PASSWORD_CONFIRMATION, payload: evt.target.value });
          }}
          value={passwordConfirmation}
        />
        {/* <Form.Field>
    <Checkbox label="I agree to the Terms and Conditions" />
  </Form.Field> */}
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
