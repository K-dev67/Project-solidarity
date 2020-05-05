import axios from 'axios';

import {
  SET_FORM, RESET, enterLoginPage,
} from 'src/store/actions';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case SET_FORM: {
      axios
        .post('http://localhost:8888/signup', {
          pseudo: store.getState().username,
          firstname: store.getState().firstname,
          lastname: store.getState().lastname,
          email: store.getState().mail,
          password: store.getState().password,
          confirmpassword: store.getState().passwordConfirmation,
        }, {
          withCredentials: true,
        })
        .then((response) => {
          // console.log('response in SIGNUP.JS', response.data);
          store.dispatch({ type: RESET });
          store.dispatch(enterLoginPage(action.history));
        })
        .catch((error) => console.log('errorSIGNUP', error));

      return;
    }
    default: {
      next(action);
    }
  }
};
