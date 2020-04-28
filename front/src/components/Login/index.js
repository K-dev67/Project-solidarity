import React from 'react';

// == Router
import { Link } from 'react-router-dom';

// == style
import './styles.scss';

// == semantic ui for form
import {
  Button, Divider, Form, Grid, Segment,
} from 'semantic-ui-react';

const Login = () => {
  console.log('Login');
  return (
    <div className="login-form">
       <Segment
    placeholder
     >
      <Grid
      columns={2}
      relaxed="very"
      stackable
      // className="login-grid"
      >
        <Grid.Column>
          <Form>
            <Form.Input
              // error={errorAuth.name}
              type="mail"
              icon="user"
              iconPosition="left"
              label="Mail"
              placeholder="Mail"
            />
            <Form.Input
            // error={errorAuth.name}
              type="password"
              icon="user"
              iconPosition="left"
              label="Password"
              placeholder="Password"
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
