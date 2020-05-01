import axios from 'axios';

import store from '../store/index';

import { API_URL } from './constante';

const { user } = store.getState();
console.log('user', user);
const userId = user.nickname;
console.log('userNickName in fnel', userId);
const updateProfilRequest = `${API_URL}/profiluser/${userId}`;

const updateProfilUser = (url = updateProfilRequest) => {
  console.log(user);
  console.log(userId);
  const promise = axios.patch(
    url, {
      // gros objet avec les input de mon store


    },
  );
  promise.then((res) => {
    console.log(res.data);
  });
};

export default updateProfilUser;
