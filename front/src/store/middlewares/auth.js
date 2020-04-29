import axios from 'axios';

import {
    LOGIN,
    enterHomePage
    // SET_ERROR_AUTH,
    // SET_USER,
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
            // console.log('user', res.data);
            const user = res.data;
            console.log('user2', user)
            //  store.dispatch({ type: SET_USER, user });
            store.dispatch(enterHomePage(action.history));
          })
          .catch((error) => {
            console.trace(error);
          })
    //     axios
    //       .post('http://localhost:5050/login', {
    //         mail: store.getState().mail,
    //         password: store.getState().password,
    //       }, {
    //         withCredentials: true,
    //       })
    //       .then((response) => {
    //         const { mail, firstname, lastname } = response.data;
    //         const user = { mail, firstname, lastname };
    //         store.dispatch({ type: SET_USER, user });
    //         store.dispatch(enterHomePage(action.history, mail, firstname, lastname));
    //       })
    //       .catch((error) => {
    //         console.log('errorLOGIN', error);
    //         store.dispatch({ type: SET_ERROR_AUTH, error });
    //       });
    //     return;
        // store.dispatch(enterHomePage(action.history));
      }
      default: {
        next(action);
      }
    }
  };