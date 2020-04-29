// == input de la navBar
export const SET_INPUT_NAV = 'actions/SET_INPUT_NAV';
// == sync userForm in signUp
export const SYNC_USERNAME = 'actions/SYNC_USERNAME';
export const SYNC_FIRSTNAME = 'actions/SYNC_FIRSTNAME';
export const SYNC_LASTNAME = 'actions/SYNC_LASTNAME';
export const SYNC_MAIL = 'actions/SYNC_MAIL';
export const SYNC_PASSWORD = 'actions/SYNC_PASSWORD';
export const SYNC_PASSWORD_CONFIRMATION = 'actions/SYNC_PASSWORD_CONFIRMATION';

export const RESET = 'actions/RESET';

// == page signUp => je submit mon formulaire
// == enter -> login Page
export const SET_FORM = 'actions/SET_FORM';
export const ENTER_LOGIN_PAGE = 'actions/ENTER_LOGIN_PAGE';
export const signup = (history) => ({ type: SET_FORM, history });
export const enterLoginPage = (history) => ({ type: ENTER_LOGIN_PAGE, history });

// == page login => je sub mon login
// == enter -> homePage même si on peut y accéder dans login (la nav va changer etc)
export const LOGIN = 'actions/LOGIN';
export const ENTER_HOME_PAGE = 'actions/ENTER_HOME_PAGE';
export const login = (history) => ({ type: LOGIN, history });
export const enterHomePage = (history) => ({ type: ENTER_HOME_PAGE, history });

