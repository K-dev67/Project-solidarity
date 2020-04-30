import axios from 'axios';

import {
  LOGIN,
  enterHomePage,
  SET_ERROR_AUTH,
  SET_USER,
} from 'src/store/actions';

export default (store) => (next) => (action) => {
  console.log('MW auth');
  switch (action.type) {
    case LOGIN: {
      axios
        .post('http://localhost:8888/login', {
          email: store.getState().mail,
          password: store.getState().password,
        }, {
          withCredentials: true,
        })
        .then((res) => {
          const user = res.data;
          console.log('user', user);
          store.dispatch({ type: SET_USER, user });
          store.dispatch(enterHomePage(action.history));
        })
        .catch((error) => {
          console.trace(error);
          store.dispatch({ type: SET_ERROR_AUTH, error });
        });
    }
    default: {
      next(action);
    }
  }
};
