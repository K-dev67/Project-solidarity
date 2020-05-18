import axios from 'axios';

import {
  LOGIN,
  enterHomePage,
  SET_ERROR_AUTH,
  SET_USER,
  // SET_USER_ID,
  SET_USER_TOKEN,
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
          if (res.status === 200) {
            sessionStorage.user = JSON.stringify(res.data);
            console.log('res.data', res.data);
            sessionStorage.userToken = JSON.stringify(res.data.token);
            const user = JSON.parse(sessionStorage.getItem('user'));
            const userToken = JSON.parse(sessionStorage.getItem('userToken'));
            store.dispatch({ type: SET_USER, user });
            store.dispatch({ type: SET_USER_TOKEN, payload: userToken });
            store.dispatch(enterHomePage(action.history));
          }
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
