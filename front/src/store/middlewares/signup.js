import axios from 'axios';

import { SET_FORM, enterLoginPage } from 'src/store/actions';

export default (store) => (next) => (action) => {
  console.log('MW signup');
  switch (action.type) {
    case SET_FORM: {
    //   axios
    //     .post('http://localhost:5050/signup', {
    //       firstname: store.getState().firstname,
    //       lastname: store.getState().lastname,
    //       mail: store.getState().mail,
    //       password: store.getState().password,
    //       passwordConfirmation: store.getState().passwordConfirmation,
    //     }, {
    //       withCredentials: true,
    //     })
    //     .then((response) => {
    //       console.log('response in SIGNUP.JS', response.data);
    //       store.dispatch({ type: RESET });
    //       store.dispatch(enterSignin(action.history));
    //     })
    //     .catch((error) => console.log('errorSIGNUP', error));
        store.dispatch(enterLoginPage(action.history))
      return;
    }
    default: {
      next(action);
    }
  }
};
