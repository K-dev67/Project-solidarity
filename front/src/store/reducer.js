/* eslint-disable no-fallthrough */
import axios from 'axios';
import getLesson from '../utils/getLessons';
import getLessonById from '../utils/getLessons';
import { API_URL } from '../utils/constante';
import {
  // == input navBar
  SET_INPUT_NAV,
  SET_FILTERED_LESSONS,
  // == signUp Page
  SYNC_USERNAME,
  SYNC_FIRSTNAME,
  SYNC_LASTNAME,
  SYNC_MAIL,
  SYNC_PASSWORD,
  SYNC_PASSWORD_CONFIRMATION,
  // pour reset le state
  RESET,
  // USER
  SET_USER,
  UPDATE_USER,
  SET_USER_ID,
  SET_ERROR_AUTH, // pour error auth
  // GET_TEACHERS,
  SET_TEACHERS,
  // == LESSON
  SET_LESSONS,
  GET_LESSON_DATA,
  ADD_LESSON_IN_BDD,
  GET_UPDATE_LESSON_DATA,
  UPDATE_LESSON,
  DELETE_LESSON,
  SET_LESSON_BY_ID,
  // == ajout/remove catégorie sur leçon
  ADD_CATEGORY_ON_LESSON,
  DELETE_CATEGORY_LABEL,
  // == add new lesson in lesson list
  GET_LESSON,
  SET_CATEGORIES,
  // message positif
  MESSAGE_POSITIF_TRUE,
  MESSAGE_POSTIF_FALSE,
  // message chatroom
  SYNC_MESSAGE,
  MESSAGE_RECEIVED,
  SET_MESSAGES,
  SET_USERS_IN_ROOM,
} from './actions';
import store from '.';


const initialState = {
  // == input du menu
  inputNav: '',
  lessonsFiltered: {},
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
  lessonInfo: {},
  lessons: {},
  addLessonData: {},
  updateLessonData: {},
  categories: {},
  labelCategory: {},
  // gerer l'ouverture des modals
  messagePositif: false,
  // message
  message: '',
  messages: {},
  roomUsers: {},
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
    case SET_FILTERED_LESSONS: {
      return {
        ...state,
        lessonsFiltered: [...action.payload],
        // lessons: state.lessonsFiltered,
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
        lessonsFiltered: action.payload,
        // lessonsFiltered: [...state.lessons, ...action.payload],
      };
    }
    case SET_LESSON_BY_ID: {
      console.log('SETLESSONID');
      console.log('payload', action.payload);
      return {
        ...state,
        lessonInfo: action.payload,
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
          // email: state.mail,
          // password: state.password,
          // confirmpassword: state.passwordConfirmation,
          avatar: state.user.avatar,
        },
      ).then((res) => {
        // console.log('response in UPDATEUSER', res.data);
        store.dispatch({ type: SET_USER, user: res.data });
      });
    }
    // == add lesson data
    // == ce que j'envoi à la bdd
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
        console.log('response in ADDLESSON', res);

        // store.dispatch({ type: GET_LESSON });
        getLesson();
        store.dispatch({ type: MESSAGE_POSITIF_TRUE });
      });
    }
    // == pour ajouter ma leçon nouvellement crée par le user à mon state.lessons
    case GET_LESSON: {
      getLesson();
    }
    case GET_UPDATE_LESSON_DATA: {
      return {
        ...state,
        updateLessonData: action.payload,
      };
    }
    case UPDATE_LESSON: {
      const { userId } = state;
      const lessonId = action.payload;
      axios.patch(
        `${API_URL}/user/${userId}/lesson/${lessonId}`, {
          title: state.updateLessonData.Titre,
          description: state.updateLessonData.Description,
          level: state.updateLessonData.Niveau,
          plannified: state.updateLessonData.Date,
          videos: state.updateLessonData.Video,
          // category: state.addLessonData.Catégorie,
        },
      ).then((res) => {
        console.log('response in UPDATELESSON', res);
        getLesson();
      }).catch((err) => console.trace(err));
      // break;
      next(action);
    }
    case DELETE_LESSON: {
      const { userId, lessonId } = action.payload;
      axios.delete(`${API_URL}/user/${userId}/lesson/${lessonId}`)
        .then((res) => {
          console.log('res in Delete Lesson', res);
          getLesson();
        });
    }
    case ADD_CATEGORY_ON_LESSON: {
      const { userId, lessonId, categoryName } = action.payload;
      axios
        .post(`${API_URL}/user/${userId}/lesson/${lessonId}/category`, {
          name: categoryName,
        })
        .then((res) => {
          console.log(res);
          getLesson();
          // getLessonById(lessonId);
        });
      // return {
      //   ...state,
      //   labelCategory: categoryName,
      // };
      next(action);
    }
    case DELETE_CATEGORY_LABEL: {
      const { userId } = state;
      let { categoryId, lessonId } = action.payload;
      categoryId = parseFloat(categoryId);
      axios
        .delete(`${API_URL}/user/${userId}/lesson/${lessonId}/category/${categoryId}`)
        .then((res) => {
          console.log('resInDeleteCategory', res);
          // getLesson();
        });
    }
    case MESSAGE_POSITIF_TRUE: {
      return {
        ...state,
        messagePositif: true,
      };
    }
    case MESSAGE_POSTIF_FALSE: {
      return {
        ...state,
        messagePositif: false,
      };
    }
    // == Chatroom
    case SYNC_MESSAGE: {
      return { ...state, message: action.message };
    }
    case MESSAGE_RECEIVED: {
      return {
        ...state,
        // Ajout du nouveau message à la liste actuelle des messages
        messages: [...state.messages, action.message],
        // Reset de l'input d'envoi d'un message à ''
        message: initialState.message,
      };
    }
    case SET_MESSAGES: {
      return {
        ...state,
        messages: action.payload,
      };
    }
    case SET_USERS_IN_ROOM: {
      return {
        ...state,
        roomUsers: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
