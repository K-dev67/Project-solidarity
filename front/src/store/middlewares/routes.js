import { ENTER_LOGIN_PAGE, ENTER_HOME_PAGE } from '../actions';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case ENTER_LOGIN_PAGE: {
      action.history.push('/login');
      return;
    }
    case ENTER_HOME_PAGE: {
      action.history.push('/');
      return;
    }
    default: {
      // Si le middleware n'est pas intéressé par l'action reçue,
      // alors il laisse filer l'action vers la suite de son voyage.
      next(action);
    }
  }
};
