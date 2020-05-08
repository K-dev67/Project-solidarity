import axios from 'axios';

import {
  LOGIN,
  enterHomePage,
  SET_ERROR_AUTH,
  SET_USER,
  SET_USER_ID,
  ENTER_CHAT,
} from 'src/store/actions';

import { API_URL } from '../../utils/constante';


export default (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      axios
        .post(`${API_URL}/login`, {
          email: store.getState().mail,
          password: store.getState().password,
        }, {
          withCredentials: true,
        })
        .then((res) => {
          const user = res.data;
          // sessionStorage.user = JSON.stringify(res.data);
          // console.log('sessionStorage', sessionStorage);
          // const user = JSON.parse(sessionStorage.getItem('user'));
          console.log('userInAuth.js', user);
          store.dispatch({ type: SET_USER, user });
          store.dispatch({ type: SET_USER_ID, payload: user.id });
          store.dispatch(enterHomePage(action.history));
          store.dispatch({ type: ENTER_CHAT });
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
