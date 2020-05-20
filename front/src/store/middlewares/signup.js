import axios from 'axios';

import {
  SET_FORM, RESET, enterLoginPage,
} from 'src/store/actions';

import { API_URL } from '../../utils/constante';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case SET_FORM: {
      axios
        .post(`${API_URL}/signup`, {
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
