import { } from '../actions';

export default (store) => (next) => (action) => {
  switch (action.type) {
    // case ENTER_SIGNIN: {
    //   action.history.push('/');
    //   return;
    // }
    // case ENTER_MAIN: {
    //   // store.dispatch
    //   // console.log('response.data', response.data);
    //   action.history.push('/main');
    //   return;
    // }

    default: {
      // Si le middleware n'est pas intéressé par l'action reçue,
      // alors il laisse filer l'action vers la suite de son voyage.
      next(action);
    }
  }
};
