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
  SET_USER_ID,
  SET_LESSONS,
  GET_LESSON_DATA,
  ADD_LESSON_IN_BDD,
  // == add new lesson in lesson list
  SET_NEW_LESSON,
  SET_CATEGORIES,
} from './actions';
import store from '.';


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
  userId: '',
  teachers: {},
  lessons: {},
  addLessonData: {},
  categories: {},
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
    case SET_USER_ID: {
      return {
        ...state,
        userId: action.payload,
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
    // == set lessons
    case SET_LESSONS: {
      return {
        ...state,
        lessons: action.payload,
      };
    }
    // == set categories
    case SET_CATEGORIES: {
      return {
        ...state,
        categories: action.payload,
      };
    }
    // == update user
    case UPDATE_USER: {
      const { userId } = state;
      axios.patch(
        `${API_URL}/profiluser/${userId}`, {
          // gros objet avec les input de mon store
          nickname: state.username,
          firstname: state.firstname,
          lastname: state.lastname,
          email: state.mail,
          password: state.password,
          confirmpassword: state.passwordConfirmation,
          avatar: state.user.avatar,
        },
      ).then((res) => {
        console.log('response in UPDATEUSER', res.data);
        store.dispatch({ type: SET_USER, user: res.data });
      });
    }
    // == add lesson data
    // eslint-disable-next-line no-fallthrough
    case GET_LESSON_DATA: {
      return {
        ...state,
        addLessonData: action.payload,
      };
    }
    case ADD_LESSON_IN_BDD: {
      const { userId } = state;
      axios.post(
        `${API_URL}/user/${userId}/lesson`, {
          title: state.addLessonData.Titre,
          description: state.addLessonData.Description,
          level: state.addLessonData.Niveau,
          plannified: state.addLessonData.Date,
          videos: state.addLessonData.Video,
          category: state.addLessonData.Catégorie,
        },
      ).then((res) => {
        console.log('response in UPDATELESSON', res.data);
        store.dispatch({ type: SET_NEW_LESSON, newLesson: res.data });
      });
    }
    // case SET_NEW_LESSON: {
    //   const { lessons } = state;
    //   lessons.push(addLessonData);
    //   return {
    //     ...state,
    //     // lessons: [...lessons, action.newLesson],
    //     lessons,
    //   };
    // }
    default: {
      return state;
    }
  }
};
