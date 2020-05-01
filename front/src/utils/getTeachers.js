import axios from 'axios';
import store from '../store/index';

// == actions
import { SET_TEACHERS } from '../store/actions';

const teachersRequest = 'http://localhost:8888/teacherList';

const getTeachers = (url = teachersRequest) => {
  const promise = axios.get(
    url,
  );
  promise.then((res) => {
    const teachers = res.data;
    store.dispatch({ type: SET_TEACHERS, payload: teachers });
  });
};

export default getTeachers;
