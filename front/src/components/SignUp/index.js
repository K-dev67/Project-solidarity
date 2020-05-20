import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// == pour gérer ma "route" au submit du form
import { useHistory } from 'react-router';

// == pour la validation de l'email
import EmailValidator from 'email-validator';

// == import pour la valid du mdp
import passwordValidator from 'password-validator';

// == import actions
import {
  SYNC_USERNAME,
  SYNC_FIRSTNAME,
  SYNC_LASTNAME,
  SYNC_MAIL,
  SYNC_PASSWORD,
  SYNC_PASSWORD_CONFIRMATION,
  signup,
  SYNC_ERROR_PASSWORD,
  SYNC_ERROR_PASSWORD_CONFIRMATION,
} from 'src/store/actions';

// == semantic form
import { Button, Form } from 'semantic-ui-react';

// == style
import './styles.scss';

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
  .symbols(); // Must have special caractère
//! -----------------

const SignUp = () => {
  const dispatch = useDispatch();

  // == traitement des erreurs en front via state local
  const [errorUsername, setErrorUsername] = useState('');
  const [errorFirstname, setErrorFirstname] = useState('');
  const [errorLastname, setErrorLastname] = useState('');
  const [errorMail, setErrorMail] = useState('');
  // == reducer
  const {
    username,
    firstname,
    lastname,
    mail,
    password,
    passwordConfirmation,
    errorPassword,
    errorPasswordConfirmation,
  } = useSelector((state) => state);
  // == history
  const history = useHistory();
  //! == traitement des erreurs en front
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
    // - adresse email au bon format
    if (!EmailValidator.validate(mail)) {
      errorsList.push("L'email n'est pas un email correct");
      setErrorMail('L\'email n\'est pas un email correct');
    }
    // - longueur minimum du mot de passe (8 caractère minimum !)
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
      dispatch(signup(history));
    }
  };
  // == Fin handleSubmit ---------------
  return (
    <div className="first-signup-form">
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Input
          error={errorUsername}
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
          error={errorFirstname}
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
          error={errorLastname}
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
        <Form.Input
          error={errorMail}
        // fluid
          type="mail"
          label="Mail"
          placeholder="Mail"
          name="mail"
          onChange={(evt) => {
            setErrorMail('');
            dispatch({ type: SYNC_MAIL, payload: evt.target.value });
          }}
          value={mail}
        />
        <Form.Input
          error={errorPassword}
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
          error={errorPasswordConfirmation}
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

export default SignUp;
