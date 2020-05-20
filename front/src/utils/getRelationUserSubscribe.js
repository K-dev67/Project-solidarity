
import axios from 'axios';
import store from '../store/index';

import { API_URL } from './constante';

// == actions
// import { SET_CATEGORIES } from '../store/actions';


const getRelationSubscribe = () => {
  const promise = axios.get(`${API_URL}/relationLesson`);
  promise.then((res) => {
    console.log(res.data);
    // const categories = res.data;
    // store.dispatch({ type: SET_CATEGORIES, payload: categories });
  });
};

export default getRelationSubscribe;
