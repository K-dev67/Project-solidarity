import axios from 'axios';
import store from '../store/index';

import { API_URL } from './constante';

// == actions
import { SET_CATEGORIES } from '../store/actions';

const categoriesRequest = `${API_URL}/categoryList`;

const getCategories = (url = categoriesRequest) => {
  const promise = axios.get(
    url,
  );
  promise.then((res) => {
    const categories = res.data;
    store.dispatch({ type: SET_CATEGORIES, payload: categories });
  });
};

export default getCategories;
