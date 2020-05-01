import axios from 'axios';
import { API_URL } from '../utils/constante';
import {
  SET_INPUT_NAV,
  SYNC_USERNAME,
  SYNC_FIRSTNAME,
  SYNC_LASTNAME,
  SYNC_MAIL,
  SYNC_PASSWORD,
  SYNC_PASSWORD_CONFIRMATION,
  RESET, // pour reset le state
  SET_USER,
  SET_ERROR_AUTH, // pour error auth
  // GET_TEACHERS,
  SET_TEACHERS,
  UPDATE_USER,
} from './actions';


const initialState = {
  // == input du menu
  inputNav: '',
  // form du signUp
  username: '',
  firstname: '',
  lastname: '',
  mail: '',
  password: '',
  passwordConfirmation: '',
  // == error authentification
  errorAuth: '',
  user: {},
  teachers: {},
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
        username: action.payload,
      };
    }
    case SYNC_FIRSTNAME: {
      return {
        ...state,
        firstname: action.payload,
      };
    }
    case SYNC_LASTNAME: {
      return {
        ...state,
        lastname: action.payload,
      };
    }
    case SYNC_MAIL: {
      return {
        ...state,
        errorAuth: '',
        mail: action.payload,
      };
    }
    case SYNC_PASSWORD: {
      return {
        ...state,
        errorAuth: '',
        password: action.payload,
      };
    }
    case SYNC_PASSWORD_CONFIRMATION: {
      return {
        ...state,
        passwordConfirmation: action.payload,
      };
    }
    // == une fois la réponse ok de la bdd pour l'inscription je reset le state
    case RESET: {
      return {
        ...initialState,
      };
    }
    // == si le auth ok
    case SET_USER: {
      return {
        ...state,
        user: action.user,
        username: action.user.nickname,
        firstname: action.user.firstname,
        lastname: action.user.lastname,
        mail: action.user.email,
        password: '',
      };
    }
    // == si auth non ok
    case SET_ERROR_AUTH: {
      return {
        ...state,
        errorAuth: 'Le mail ou le mot de passe est incorrect',
      };
    }
    // == set teachers
    case SET_TEACHERS: {
      return {
        ...state,
        teachers: action.payload,
      };
    }
    // == update user
    case UPDATE_USER: {
      const userId = state.user.id;
      axios.patch(
        `${API_URL}/profiluser/${userId}`, {
          // gros objet avec les input de mon store
          nickname: state.username,
          firstname: state.firstname,
          lastname: state.lastname,
          email: state.mail,
          password: state.password,
          confirmpassword: state.passwordConfirmation,
          avatar: 'avatar',
        },
      ).then((res) => {
        console.log(res.data);
      });
    }
    default: {
      return state;
    }
  }
};
