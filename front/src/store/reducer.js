import {
  SET_INPUT_NAV,
  SYNC_USERNAME,
  SYNC_FIRSTNAME,
  SYNC_LASTNAME,
  SYNC_MAIL,
  SYNC_PASSWORD,
  SYNC_PASSWORD_CONFIRMATION,
  // SET_FORM,
} from './actions';

const initialState = {
  inputNav: '',
  username: '',
  firstname: '',
  lastname: '',
  mail: '',
  password: '',
  passwordConfirmation: '',
  // user: {}
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    // == Input Nav
    case SET_INPUT_NAV: {
      return {
        ...state,
        inputNav: action.payload,
      };
    }
    // == form user
    case SYNC_USERNAME: {
      return {
        ...state,
        username: action.username,
      };
    }
    case SYNC_FIRSTNAME: {
      return {
        ...state,
        firstname: action.firstname,
      };
    }
    case SYNC_LASTNAME: {
      return {
        ...state,
        lastname: action.lastname,
      };
    }
    case SYNC_MAIL: {
      return {
        ...state,
        mail: action.mail,
      };
    }
    case SYNC_PASSWORD: {
      return {
        ...state,
        password: action.password,
      };
    }
    case SYNC_PASSWORD_CONFIRMATION: {
      return {
        ...state,
        passwordConfirmation: action.passwordConfirmation,
      };
    }
    // case SET_FORM: {
    //   return {
    //     ...state,
    //     user: action.user,
    //   };
    // }
    default: {
      return state;
    }
  }
};
