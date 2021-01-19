import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// == Router
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

// == Action
import { SYNC_MAIL, SYNC_PASSWORD, login } from 'src/store/actions';


// == style
import './styles.scss';

// == semantic ui for form
import {
  Button, Divider, Form, Grid, Segment,
} from 'semantic-ui-react';

const Login = () => {
  const dispatch = useDispatch();
  const { mail, password, errorAuth } = useSelector((state) => state);
  const history = useHistory();

  return (
    <div className="login-form">
      <Segment
        placeholder
      >
        <Form
          onSubmit={(evt) => {
            evt.preventDefault();
            dispatch(login(history));
          }}
        >
          <Form.Input
            error={(errorAuth) || null}
            type="mail"
            icon="user"
            iconPosition="left"
            label="Mail"
            placeholder="Mail"
            onChange={(evt) => {
              dispatch({ type: SYNC_MAIL, payload: evt.target.value });
            }}
            value={mail}
          />
          <Form.Input
            error={(errorAuth) || null}
            type="password"
            icon="user"
            iconPosition="left"
            label="Password"
            placeholder="Password"
            onChange={(evt) => {
              dispatch({ type: SYNC_PASSWORD, payload: evt.target.value });
            }}
            value={password}
          />
          <Button content="Login" primary />
        </Form>
      </Segment>
    </div>

  );
};

export default Login;
