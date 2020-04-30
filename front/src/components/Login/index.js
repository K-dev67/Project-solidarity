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
      <Grid
      columns={2}
      relaxed="very"
      stackable
      >
        <Grid.Column>
          <Form
          onSubmit={(evt) => {
            evt.preventDefault();
            dispatch(login(history));
          }}
          >
            <Form.Input
              error={errorAuth}
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
              error={errorAuth}
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
        </Grid.Column>
        <Grid.Column verticalAlign="middle">
          <Link to="/signup">
            <Button content="Sign up" icon="signup" size="big" />
          </Link>
        </Grid.Column>
      </Grid>
      <Divider vertical>Or</Divider>
    </Segment>
    </div>

  );
};

export default Login;
