/* eslint-disable no-fallthrough */
import axios from 'axios';
import { CommentActions } from 'semantic-ui-react';
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
  SYNC_ERROR_PASSWORD,
  SYNC_ERROR_PASSWORD_CONFIRMATION,
  // == update password
  SYNC_OLD_PASSWORD,
  // pour reset le state
  //!
  SET_USER_DATA,
  RESET,
  // SET_USER,
  SET_USER_TOKEN,
  UPDATE_USER,
  UPDATE_MAIL,
  UPDATE_PASSWORD,
  SET_ERROR_AUTH, // pour error auth
  SET_TEACHERS,
  // == LESSON
  SET_LESSONS,
  GET_LESSON_DATA,
  ADD_LESSON_IN_BDD,
  GET_UPDATE_LESSON_DATA,
  UPDATE_LESSON,
  DELETE_LESSON,
  SET_LESSON_BY_ID,
  // SET_RELATION_USER_SUBSCRIBE,
  // == ASK LESSON
  SET_ASK_LESSONS,
  ADD_ASKLESSON_IN_BDD,
  DELETE_ASK_LESSON,
  UPDATE_ASKLESSON_IN_BDD,
  // == ajout/remove catégorie sur leçon
  ADD_CATEGORY_ON_LESSON,
  DELETE_CATEGORY_LABEL,
  // == add new lesson in lesson list
  GET_LESSON,
  SET_CATEGORIES,
  SET_CATEGORY_BY_LESSONID,
  // message positif
  MESSAGE_POSITIF_TRUE,
  MESSAGE_POSTIF_FALSE,
  // message chatroom
  SYNC_MESSAGE,
  MESSAGE_RECEIVED,
  SET_MESSAGES,
  SET_USERS_IN_ROOM,
  DISCONNECT,
} from './actions';
import store from '.';


const initialState = {
  // == input du menu
  inputNav: '',
  lessonsFiltered: [],
  // form du signUp
  userToken: '',
  username: '',
  firstname: '',
  lastname: '',
  mail: '',
  password: '',
  passwordConfirmation: '',
  oldPassword: '',
  errorPassword: '',
  errorPasswordConfirmation: '',
  // == error authentification
  errorAuth: '',
  user: {},
  userId: '',
  teachers: [],
  lessonInfo: {},
  lessons: [],
  // relationUserSubscribe: [],
  askLessons: [],
  addLessonData: {},
  updateLessonData: {},
  categories: [],
  categoryByLesson: [],
  labelCategory: {},
  // gerer l'ouverture des modals
  messagePositif: false,
  // message
  message: '',
  messages: [{ content: 'blabla' }],
  roomUsers: [{ username: 'robot' }],
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
    case SYNC_OLD_PASSWORD: {
      return {
        ...state,
        oldPassword: action.payload,
      };
    }
    // == une fois la réponse ok de la bdd pour l'inscription je reset le state
    case RESET: {
      return {
        ...initialState,
      };
    }
    case DISCONNECT: {
      sessionStorage.clear();
    }
    // == si le auth ok
    // case SET_USER: {
    //   return {
    //     ...state,
    //     user: action.user,
    //     userId: action.user.id,
    //     username: action.user.nickname,
    //     firstname: action.user.firstname,
    //     lastname: action.user.lastname,
    //     mail: action.user.email,
    //     password: '',
    //   };
    // }
    //!
    case SET_USER_DATA: {
      return {
        ...state,
        user: action.payload[0],
        userId: action.payload[0].id,
        username: action.payload[0].nickname,
        firstname: action.payload[0].firstname,
        lastname: action.payload[0].lastname,
        mail: action.payload[0].email,
        avatar: action.payload[0].avatar,
        password: '',
      };
    }
    case SET_USER_TOKEN: {
      return {
        ...state,
        userToken: action.payload,
      };
    }
    // == si auth non ok
    case SET_ERROR_AUTH: {
      return {
        ...state,
        errorAuth: 'Le mail ou le mot de passe est incorrect',
      };
    }
    case SYNC_ERROR_PASSWORD: {
      return {
        ...state,
        errorPassword: action.errorPassword,
      };
    }
    case SYNC_ERROR_PASSWORD_CONFIRMATION: {
      return {
        ...state,
        errorPasswordConfirmation: action.errorPasswordConfirmation,
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
      };
    }
    case SET_LESSON_BY_ID: {
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
    case SET_CATEGORY_BY_LESSONID: {
      return {
        ...state,
        categoryByLesson: action.payload,
      };
    }
    // == set ask lessons
    case SET_ASK_LESSONS: {
      return {
        ...state,
        askLessons: action.payload,
      };
    }
    case ADD_ASKLESSON_IN_BDD: {
      const { userId } = state;
      axios.post(
        `${API_URL}/user/${userId}/ask`, {
          title: action.payload.Titre,
          description: action.payload.Description,
          level: action.payload.Niveau,
          category: action.payload.Catégorie,
        },
      ).then((res) => {
        axios.get(`${API_URL}/askList`)
          .then((res2) => {
            store.dispatch({ type: SET_ASK_LESSONS, payload: res2.data });
          });
        store.dispatch({ type: MESSAGE_POSITIF_TRUE });
      });
      next(action);
    }
    case DELETE_ASK_LESSON: {
      const { userId } = state;
      axios
        .delete(`${API_URL}/user/${userId}/ask/${action.payload}`)
        .then((res) => {
          axios.get(`${API_URL}/askList`)
            .then((res2) => {
              store.dispatch({ type: SET_ASK_LESSONS, payload: res2.data });
            });
        })
        .catch((error) => console.trace(error));
      next(action);
    }
    case UPDATE_ASKLESSON_IN_BDD: {
      const { userId } = state;
      axios
        .patch(`${API_URL}/user/${userId}/ask/${action.askLessonId}`, {
          title: action.payload.Titre,
          description: action.payload.Description,
          level: action.payload.Niveau,
        })
        .then((res) => {
          if (res.status === 200) {
            store.dispatch({ type: MESSAGE_POSITIF_TRUE });
            axios.get(`${API_URL}/askList`)
              .then((res2) => {
                store.dispatch({ type: SET_ASK_LESSONS, payload: res2.data });
              })
              .catch((error) => console.trace(error));
          }
        });
      next(action);
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
          avatar: state.user.avatar,
        },
      ).then((res) => {
      });
    }
    case UPDATE_PASSWORD: {
      const { userId } = state;
      axios.patch(
        `${API_URL}/profiluser/${userId}/changePassword`, {
          password: state.oldPassword,
          newPassword: state.password,
        },
      ).then((res) => {
        if (res.status === 200) {
          store.dispatch({ type: MESSAGE_POSITIF_TRUE });
        }
      })
        .catch((error) => console.trace(error));
    }
    case UPDATE_MAIL: {
      const { userId } = state;
      axios.patch(
        `${API_URL}/profiluser/${userId}/changeEmail`, {
          email: state.mail,
          password: state.password,
        },
      ).then((res) => {
        if (res.status === 200) {
          store.dispatch({ type: MESSAGE_POSITIF_TRUE });
        }
      }).catch((error) => console.trace(error));
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
        getLesson();
      }).catch((err) => console.trace(err));
      next(action);
    }
    case DELETE_LESSON: {
      const { userId, lessonId } = action.payload;
      axios.delete(`${API_URL}/user/${userId}/lesson/${lessonId}`)
        .then((res) => {
          getLesson();
        });
      next(action);
    }
    case ADD_CATEGORY_ON_LESSON: {
      const { userId, lessonId, categoryName } = action.payload;
      axios
        .post(`${API_URL}/user/${userId}/lesson/${lessonId}/category`, {
          name: categoryName,
        })
        .then((res) => {
          axios
            .get(`${API_URL}/categoryList/${lessonId}`)
            .then((res2) => {
              store.dispatch({ type: SET_CATEGORY_BY_LESSONID, payload: res2.data });
            }).catch((error) => console.trace(error));
        });
      next(action);
      // return;
    }
    // case SET_RELATION_USER_SUBSCRIBE: {
    //   return {
    //     ...state,
    //     relationUserSubscribe: action.payload,
    //   };
    // }
    case DELETE_CATEGORY_LABEL: {
      const { userId } = state;
      let { categoryId, lessonId } = action.payload;
      categoryId = parseFloat(categoryId);
      axios
        .delete(`${API_URL}/user/${userId}/lesson/${lessonId}/category/${categoryId}`)
        .then((res) => {
          axios
            .get(`${API_URL}/categoryList/${lessonId}`)
            .then((res2) => {
              store.dispatch({ type: SET_CATEGORY_BY_LESSONID, payload: res2.data });
            }).catch((error) => console.trace(error));
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
